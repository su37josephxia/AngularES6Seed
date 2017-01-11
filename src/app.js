import 'angular'
import 'angular-ui-router'

import 'lodash'
import common from  'common/index'
import moduleA from 'moduleA/index'

export default angular
	.module('app', [
		'ui.router',
		common,
		moduleA
	])

	// 设置首页
	.config(['$urlRouterProvider',
		function ($urlRouterProvider) {

			$urlRouterProvider.otherwise('/pageA')
		}])

	.run()