import service from './Service'
import http from '../../common/service/HttpService'

export default class {
  /**
   * 构造方法
   */
  constructor() {
    this.name = 'angular&es6'
    this.service = service.say()
    this.count = 0

    console.log('start....')


    console.log('end....')
  }

  /**
   * 增加数字
   */
  add() {
    this.count += 1
  }

  /**
   * 调用Http请求
   */
  getHttpRequest() {
    http.post('', {})
  }
}
