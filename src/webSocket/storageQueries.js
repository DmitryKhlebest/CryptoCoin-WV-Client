
let queries = {};

const addQuery = (ruid, callback) => {
	queries[ruid] = callback;
};

const getCallback = (ruid) => {
	const query = queries[ruid];
	delete queries.ruid;
	return query;
};

export default {
	addQuery,
	getCallback
};
