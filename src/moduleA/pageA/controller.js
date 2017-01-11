import service from './Service'
//import http from './HttpService'
export default class {
	constructor() {
		this.name = 'angular&es6'
		this.service = service.say()
		this.count = 0

		console.log('start....')

		//http.save('', {});

		console.log('end....')
	}

	add() {

		this.count++
	}
}