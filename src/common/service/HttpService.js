import injector from 'angular-es-utils/injector'
import {FetchHttp} from 'es6-http-utils'

export default {

	get(url) {
		return injector.get('$http').get(url)
	},

	save(url, payload) {
		return FetchHttp.post(url, payload)
	},
}