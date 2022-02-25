import helloController from './hello-component-controller';
import helloTemplate from './hello-component.html';

const helloComponent = helloModule.component('hello', {
	controller: helloController,
	template: helloTemplate
});

export default helloComponent;
