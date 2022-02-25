const helloTemplate = `
<div>
	<label>Name:</label>
	<input type="text" ng-model="$ctrl.yourName" placeholder="Enter a name here">
	<hr>
	<h1>Hello {{$ctrl.yourName}}!</h1>
</div>
`;

angular.
	module('hello', []).
	component('hello', {
	template: helloTemplate,
	controller () {
		this.yourName = 'world';
	}
});
