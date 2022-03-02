import angular from 'angular';
import singleSpaAngularJS from 'single-spa-angularjs';
import './hello-module';

const ngLifecycles = singleSpaAngularJS({
  angular: angular,
  mainAngularModule: 'hello',
  uiRouter: true,
  preserveGlobal: false,
  template: '<hello />',
});

const getAngularjsVersion = () => {
  return angular.version.full;
};

export const bootstrap = ngLifecycles.bootstrap;
export const mount = ngLifecycles.mount;
export const unmount = ngLifecycles.unmount;
export { getAngularjsVersion };