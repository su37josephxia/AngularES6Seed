/**
 * 获取颜色列表
 * @param num 获取颜色条数
 * @param type 图表类型（bar,pie,line,linkBar）
 * @returns {*}
 */
export default function getColor(num, type) {

    let basicColor = getBasicList()

    // 颜色序列
    let  number = 1

    // 线图和线柱混合图使用深色颜色组合
    if ('line' === type || 'linkBar' === type) {
        return genDeep(num).splice(0, num)
    } else {
        return genAll(num)
    }

    /**
     * 生成全部连续色
     * @param num 颜色数量
     */
    function genAll(num) {
        let ary
        if (num > 3) {
            ary = generateNumber(num)

            for (let k in ary) {
                fillColor(ary[k], k)
            }
            ary.P = basicColor.P
            ary.E = basicColor.E
            ary.B = basicColor.B

        } else {
            // 三个颜色以内按照深浅深的规则直接选取颜色
            ary = {}
            ary.G = [basicColor.G[1]]
            ary.Y = [basicColor.Y[0]]
            ary.R = [basicColor.R[1]]

        }
        let ret = []
        for (let k in ary) {
            for (let j of ary[k]) {
                ret.push(j)
            }
        }
        return ret.splice(0, num)
    }

    /**
     * 生成深色
     * @param num 颜色数量
     */
    function genDeep(num) {
        let ary = []
        for (let i = 0; i < 3; i++) {
            for (let k in basicColor) {
                ary.push(basicColor[k][i * 2 + 1])
            }
        }

        return ary
    }

    /**
     * 判断 颜色组 中 各颜色 需要 选择的数目，方法：尽可能的均匀分配
     :param data_number:  改组需要选取的总 颜色值 数
     :param group_number:  组内颜色的数目
     :return:  各颜色 需要选取的 颜色值 数目
     * @param data_number
     * @param group_number
     * @constructor
     */
    function generateNumber(num) {

        let res = {G: [], Y: [], R: []}
        for (let i = 0; i < num;) {
            for (let k in res) {
                if (i < num && i < 18) {
                    res[k].push('')
                }
                i++
            }
        }
        return res
    }

    /**
     * 选取颜色
     * @param color
     * @param k
     */
    function fillColor(color, k) {
        // 色彩选取顺序
        let seq = [2, 1, 4, 3, 6, 5]

        if (number % 2 === 1) {
            for (let i in color) {
                color[i] = basicColor[k][i]
                number++
            }
        } else {
            for (let i in color) {
                color[i] = basicColor[k][seq[i] - 1]
                number++
            }
        }
    }

    /**
     * 生成深色数组
     * @param num
     */
    function generateNumberDeep(num) {
        let ret = {G: [], Y: [], R: []}
        for (let i = 0; i < num;) {
            for (let k in ret) {
                if (i < num && i < 9) {
                    ret[k].push('')
                }
                i++
            }
        }
        return ret
    }

    /**
     * 选取颜色(只选取偶数色 深色)
     * @param color
     * @param k
     */
    function fillDeepColor(color, k) {
        for (let i in color) {
            color[i] = basicColor[k][i * 2 + 1]
        }
    }

    /**
     * 获取基础颜色列表
     */
    function getBasicList() {

        return {
            // 绿色
            G: [

                '#E0EBAC',

                '#8CB700',

                '#BAE58D',

                '#52A02F',

                '#A8D04A',

                '#25751E',

            ],
            // 黄色
            Y: [

                '#F3D485',

                '#F59E1B',

                '#EDD1A0',

                '#DCA43D',

                '#DCBF88',

                '#936501',

            ],
            // 红色
            R: [

                '#FBDAC6',

                '#FD6000',

                '#F6BDBB',

                '#E82219',

                '#ECB0BC',

                '#B51D41',

            ],
            // 紫色
            P: [

                '#D8EBFE',

                '#56B4E6',

                '#B6D9F6',

                '#0097DC',

                '#8EC2E5',

                '#0076AB',

            ],
            //
            E: [

                '#F3E3FF',

                '#B38ECC',

                '#DEC7F0',

                '#8F6AC2',

                '#C5ABDF',

                '#7A3CA3',

            ],
            // 蓝色
            B: [

                '#D7ECE5',

                '#54BCA4',

                '#ADDDDD',

                '#009283',

                '#A6C4BE',

                '#005B48',

            ]

        }

    }

}







