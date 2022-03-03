const helloController = function () {
	this.yourName = 'world';
	
	this.getLodashVersion = () => {
		return _.VERSION;
	};
};

export default helloController;
