import angular from 'angular';
import helloComponent from './hello-component';

const helloModule = angular
	.module('hello', [])
	.component('hello', helloComponent);

export default helloModule;
