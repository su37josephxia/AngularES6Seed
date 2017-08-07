import 'style'
import service from './Service'
import http from '../../common/service/HttpService'
import colorUtils from '../color/color'
import echarts from 'echarts/dist/echarts.common.min'
import $ from 'jquery'
window.$ = $
import 'jquery.dataTables.min'
//import 'dataTables.fixedColumns.min'

//var $       = require( 'jquery' );
//var dt      = require( 'datatables.net' )
import 'datatables.net'
import 'datatables.net-fixedcolumns'
import 'datatables.net-fixedheader'
import 'datatables.net-dt/css/jquery.dataTables.css'
import 'datatables.net-fixedcolumns-dt/css/fixedcolumns.dataTables.css'
import 'datatables.net-fixedheader-dt/css/fixedheader.dataTables.css'
//console.log('dtttt',dt)

//var dt      = require( 'datatables.net' )( window, $ );
//var buttons = require( 'datatables.net-buttons' )( window, $ );


export default class {


    /**
     * 构造方法
     */
    constructor($element) {
        'ngInject'

        this.name = 'angular&es6'
        //this.service = service.say()
        this.element = $element
        this.count = 1
        this.chart = echarts.init(this.element.find('#main')[0])
        this.genChart()
    }

    $onInit(){
        console.log($('#example'))
        var table = $('#example').DataTable( {
            scrollY:        300,
            scrollX:        true,
            scrollCollapse: true,
            paging:         false,
            fixedColumns:   true
        } );
        //$(table.table().container()).on( 'click', 'td', function () {
        //    var cell = table.cell( this );
        //
        //    $('#click-output').prepend(
        //        '<div>'+cell.data()+'</div>'
        //    );
        //} );


    }

    genChart(){
        console.log('count...'+this.count)

        let option = this.getTemplateOption()
        option.series = []
        for (let i = 0;i < this.count;i++){
            option.series.push({
                name: '系列'+(i+1),
                type: 'bar',
                data: [320],
            })
        }

        option.color = colorUtils(this.count, 'bar')
console.log(option)
        this.chart.setOption(option)
    }

    /**
     * 增加数字
     */
    add() {
        //this.doFun()
        this.count += 1
        //this.getHttpRequest()

        this.genChart()

    }

    /**
     * 重置
     */
    reset() {
        this.chart = echarts.init(this.element.find('#main')[0])
        this.count = 1
        this.genChart()

    }

    /**
     * 调用Http请求
     */
    getHttpRequest() {
        let url = 'saiku/rest/saiku/api/query/execute'

        http.post(url, this.getRequest())
        .then(()=> {
                url = 'saiku/rest/saiku/api/query/60A9AAFD-4762-6E10-87F0-0826F470DD45/result/metadata/hierarchies/%5B%E4%BA%BA%E7%BE%A4%5D.%5B%E4%BA%BA%E7%BE%A4%5D/levels/%E4%BA%BA%E7%BE%A4'

                http.get(url)
            }
        )

    }


    doFun() {
        console.log('doFun.... ');

    }


    /**
     * 获取图表模板
     * @returns {object} 图表模版
     */
    getTemplateOption() {
        const option = {
            toolbox: {
                show: true,
                top: '12%',
                right: '5%',
            },

            tooltip: {
                trigger: 'item',

            },

            legend: {
                right: 'center',

                width: '5%',
            },
            grid: {
                //left: '3%',
                //right: '4%',
                bottom: '5%',
                top: '20%',
                containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    data: [''],
                    axisLabel: {
                        //interval: 0,
                        //rotate: 30,
                        textStyle: {
                            color: '#424648'
                        }

                    },
                    axisLine: {
                        lineStyle: {
                            color: '#B1B1B1'
                        }
                    }

                },

            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#B1B1B1'
                        }
                    },
                    axisLabel: {
                        //interval: 0,
                        //rotate: 30,
                        textStyle: {
                            color: '#424648'
                        },
                        formatter: '{value}'
                    },
                },
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    data: [320],
                },
                {
                    name: '直接访问',
                    type: 'bar',
                    data: [320],
                },

            ],
        }
        return option
    }

}
