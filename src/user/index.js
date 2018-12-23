
let User = null;

export default {
	set: (user) => {
		User = user;
	},
	setBalance: (balance) => {
		User.balance = balance
	},
	setAvatarPath: (imagePath) => {
		User.imagePath = imagePath;
	},
	get: () => User,
	isAuthorized: () => Boolean(User),
	logout: () => {
		User = null;
	}
};
