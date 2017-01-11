import controller from './pageA/controller'


export default angular.module('app.moduleA', [])

	//.service('httpServci')

	.config(['$stateProvider', '$urlRouterProvider',
		$stateProvider=> {
			$stateProvider
				.state('pageA', {
					url: '/pageA',
					template: require('./pageA/jade.jade'),

					// jade模版或html方式
					controller: controller,
					controllerAs: 'vm'

				})
		}])


	.controller('es6SampleControler', controller)
	.name