import service from './Service'
import http from '../../common/service/HttpService'
export default class {
	constructor() {
		this.name = 'angular&es6'
		this.service = service.say()
		this.count = 0

		console.log('start....')



		console.log('end....')
	}

	add() {

		this.count++
	}

	getHttpRequest(){

		http.post('', {});

	}
}