import controller from './pageA/Controller'
import page from './pageA/Jade.jade'


export default angular.module('app.moduleA', [])

// .service('httpServci')

.config(['$stateProvider', '$urlRouterProvider',
  ($stateProvider) => {
    $stateProvider
    .state('pageA', {
      url: '/pageA',
      template: page,

      // jade模版或html方式
      controller,
      controllerAs: 'vm',

    })
  }])


.controller('es6SampleControler', controller)
  .name
