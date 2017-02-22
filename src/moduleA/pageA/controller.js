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

        let arr = [1, 2, 3, 4]

        console.log('http')
        this.getMetaList()
        this.getMetaData()

        this.getMetaDataHierarchies()
        //this.getSaikuQuery()
        this.getSaikuQuery2()

        //console.log('start....',arr.reduce((pre,cur)=>{
        //  console.log(pre,cur)
        //  return pre+cur
        //}))
        //
        //console.log('foreach....',arr.forEach(v => {console.log(v)}))
        //
        //console.log('filter....',arr.filter(v => {console.log(v)}))
        //
        //let  original = {a:1,b:2}
        //let  copy = Object.assign(original,{c:3})
        //console.log(original,copy)
        //delete copy.a
        //console.log(original,copy)
        //console.log('end....')

    }

    /**
     * 增加数字
     */
    add() {
        this.doFun()
        this.count += 1
    }

    /**
     * 调用Http请求
     */
    getHttpRequest() {
        http.post('', {})
    }

    doFun() {
        console.log('doFun....');

    }

    getSaikuQuery() {
        let url = '/saiku/rest/saiku/api/query/37DA5487-3985-ADD7-B281-4E9D177142AD'
        let playload = {
            json: {
                "name": "37DA5487-3985-ADD7-B281-4E9D177142AD",
                "queryModel": {
                    "axes": {
                        "FILTER": {
                            "mdx": null,
                            "filters": [],
                            "sortOrder": null,
                            "sortEvaluationLiteral": null,
                            "hierarchizeMode": null,
                            "location": "FILTER",
                            "hierarchies": [],
                            "nonEmpty": false
                        },
                        "COLUMNS": {
                            "mdx": null,
                            "filters": [],
                            "sortOrder": null,
                            "sortEvaluationLiteral": null,
                            "hierarchizeMode": null,
                            "location": "COLUMNS",
                            "hierarchies": [],
                            "nonEmpty": true
                        },
                        "ROWS": {
                            "mdx": null,
                            "filters": [],
                            "sortOrder": null,
                            "sortEvaluationLiteral": null,
                            "hierarchizeMode": null,
                            "location": "ROWS",
                            "hierarchies": [],
                            "nonEmpty": true
                        }
                    },
                    "visualTotals": false,
                    "visualTotalsPattern": null,
                    "lowestLevelsOnly": false,
                    "details": {"axis": "COLUMNS", "location": "BOTTOM", "measures": []},
                    "calculatedMeasures": [],
                    "calculatedMembers": []
                },
                "queryType": "OLAP",
                "type": "QUERYMODEL",
                "cube": {
                    "connection": "earthquakes",
                    "catalog": "Global Earthquakes",
                    "schema": "Global Earthquakes",
                    "name": "Earthquakes"
                }
            }
        }
        http.post(url, playload)

    }

    getSaikuQuery2() {
        let url = '/saiku/rest/saiku/api/query/execute'
        let playload = {
            "queryModel": {
                "axes": {
                    "FILTER": {
                        "mdx": null,
                        "filters": [],
                        "sortOrder": null,
                        "sortEvaluationLiteral": null,
                        "hierarchizeMode": null,
                        "location": "FILTER",
                        "hierarchies": [],
                        "nonEmpty": false,
                        "aggregators": []
                    },
                    "COLUMNS": {
                        "mdx": null,
                        "filters": [],
                        "sortOrder": null,
                        "sortEvaluationLiteral": null,
                        "hierarchizeMode": null,
                        "location": "COLUMNS",
                        "hierarchies": [],
                        "nonEmpty": true,
                        "aggregators": []
                    },
                    "ROWS": {
                        "mdx": null,
                        "filters": [],
                        "sortOrder": null,
                        "sortEvaluationLiteral": null,
                        "hierarchizeMode": null,
                        "location": "ROWS",
                        "hierarchies": [
                            {
                                "mdx": null,
                                "filters": [],
                                "sortOrder": null,
                                "sortEvaluationLiteral": null,
                                "hierarchizeMode": null,
                                "name": "[Date].[Time]",
                                "caption": "Time",
                                "dimension": "Date",
                                "levels": {
                                    "Year": {
                                        "mdx": null,
                                        "filters": [],
                                        "name": "Year",
                                        "caption": "Year",
                                        "selection": {"type": "INCLUSION", "members": [], "parameterName": null},
                                        "aggregators": [],
                                        "measureAggregators": []
                                    },
                                    "Quarter": {
                                        "name": "Quarter"
                                    }
                                },
                                "cmembers": {}
                            }
                        ],
                        "nonEmpty": true,
                        "aggregators": []
                    }
                },
                "visualTotals": false,
                "visualTotalsPattern": null,
                "lowestLevelsOnly": false,
                "details": {
                    "axis": "COLUMNS",
                    "location": "BOTTOM",
                    "measures": [
                        {
                            "name": "Average Magnitude",
                            "uniqueName": "[Measures].[Average Magnitude]",
                            "caption": "Average Magnitude",
                            "type": "EXACT",
                            "aggregators": []
                        },
                        {
                            "name": "Sum Reporting Stations",
                            "uniqueName": "[Measures].[Sum Reporting Stations]",
                            "caption": "Sum Reporting Stations",
                            "type": "EXACT",
                            "aggregators": []
                        }
                    ]
                },
                "calculatedMeasures": [],
                "calculatedMembers": []
            },
            "cube": {
                "uniqueName": "[earthquakes].[Global Earthquakes].[Global Earthquakes].[Earthquakes]",
                "name": "Earthquakes",
                "connection": "earthquakes",
                "catalog": "Global Earthquakes",
                "schema": "Global Earthquakes",
                "caption": null,
                "visible": false
            },
            "mdx": "",
            //"name": "37DA5487-3985-ADD7-B281-4E9D177142AD",
            "parameters": {},
            "plugins": {},
            "metadata": {},
            "queryType": "OLAP",
            "type": "QUERYMODEL"
        }
        http.post(url, playload).then(resp => {

            console.log('http:', resp.data.cellset)
            this.cellset = resp.data.cellset
        })

    }

    getMetaList() {
        let url = '/saiku/rest/saiku/admin/discover'
        http.get(url).then(resp => {

            console.log('getMetaList', resp.data)
        })

    }

    getMetaData() {
        let url = '/saiku/rest/saiku/admin/discover/earthquakes/Global%20Earthquakes/Global%20Earthquakes/Earthquakes/metadata'

        http.get(url).then(resp => {
            console.log('getMetaData', resp.data)
        })

    }


    getMetaDataHierarchies(){

        let url = '/saiku/rest/saiku/api/query/8C611896-4260-3931-B743-B55B25793554/result/metadata/hierarchies/%5BHas%20coffee%20bar%5D.%5BHas%20coffee%20bar%5D/levels/Has%20coffee%20bar'
        http.get(url).then(resp => {
            console.log('getMetaDataHierarchies',resp.data)
        })
    }

}
