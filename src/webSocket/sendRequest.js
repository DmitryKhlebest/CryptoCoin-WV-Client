/* eslint-disable no-console */
/* eslint-disable no-magic-numbers */
/* globals localStorage */

import createRuid from './createRuid';
import storageQueries from './storageQueries';
// console.log('storageQueries', storageQueries);


const createSendRequest = () => {
	let ws;

	const connect = () => {
		ws = new WebSocket('ws://localhost:12345');
		// ws = new WebSocket('ws://192.168.43.211:12345');
		// ws = new WebSocket('ws://3.120.116.49:12345');

		ws.onopen = wsOpen;
		ws.onmessage = wsMessage;
		ws.onclose = wsClose;
		ws.onerror = wsError;
	};

	const sendRequest = (req) => {
		const request = req;
		const ruid = createRuid();
		storageQueries.addQuery(ruid, request.callback);

		delete request.callback;
		request.ruid = ruid;

		console.log('request: ', request);
		setTimeout(() => {
			ws.send(JSON.stringify(request));
		}, 0);
	};

	// const callbackAuthorization = (response) => {
		// response.errorMessage 
		// 	&& console.log("Error: ", response.errorMessage);
		// if(response.user) {
		// 	// serviceUser.user = response.user;
		// 	serviceUser.user.id = response.user.id;
		// 	serviceUser.user.login = response.user.login;
		// 	serviceUser.user.avatarPath = response.user.avatarPath;
		// 	serviceUser.user.interlocutor = null;
		// 	$location.path(`/${serviceUser.user.id}/personal_page`);
		// 	if(!$rootScope.$$phase) $rootScope.$apply();
		// } else {
		// 	$location.path('/login');
		// 	if(!$rootScope.$$phase) $rootScope.$apply();
		// }
	// };

	const wsOpen = () => {
		console.log("Open ws");
		// let token = localStorage.getItem('coin_token');

		// if (!token) {
		// 	$router.replace('/');
		// 	return;
		// }

		// sendRequest({
		// 	method: "authorization",
		// 	data: {
		// 		token
		// 	},
		// 	callback: callbackAuthorization
		// });
	};

	const wsMessage = (res) => {
		const response = JSON.parse(res.data);
		console.log("response", response);

		if (response.data.error)
			console.log(response.data.error.message);

		if (response.ruid) {
			const method = storageQueries.getCallback(response.ruid);
			method(response.data);
		}

		// if (response.data.error)
		// 	console.log(response.data.error.message);
		// else
		// 	method(response.data.ok);
	};

	const wsClose = (err) => {
		console.log(
			`Socket is closed. Reconnect will be attempted in 1 second.`,
			err
		);
		setTimeout(() => {
			connect();
		}, 1000);
	};

	function wsError(/*err*/) {
		console.log('Socket encountered error. Closing socket');
		ws.readyState !== 3 && ws.close();
	}

	connect();

	return sendRequest;
};

const SingletonWebSocket = (() => {
	let sendRequest;

	return {
		getSendRequest: () => {
			if (!sendRequest) sendRequest = createSendRequest();
			return sendRequest;
		}
	};
})();

export default SingletonWebSocket.getSendRequest();
