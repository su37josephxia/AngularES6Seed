import controllerPageA from './pageA/Controller'
import pageA from './pageA/Jade.jade'


const module = angular.module('app.moduleA', [])

// 添加一个页面
module.config(['$stateProvider', '$urlRouterProvider',
  ($stateProvider) => {
    $stateProvider
    .state('pageA', {
      url: '/pageA',
      template: pageA,
      controller: controllerPageA,
      controllerAs: 'vm',

    })
  }])

export default module.name
