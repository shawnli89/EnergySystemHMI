// 图1
(function(){
    // 实例化对象
    var myChart = echarts.init(document.querySelector('.line1 .chart'))
    // 指定配置和数据
    option = {
        color:["#2f89cf"],
        grid:{
            left: "0%",
            top: "10%",
            right: "5%",
            bottom: "0%",
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            axisLabel:{
                color: "red",
                fontSize:"12"
            },
            axisLine:{show:false},
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '8:00', '9:00', '10:00', '13:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00','20:00','21:00','22:00','23:00','24:00']
        },
        yAxis: {
            type: 'value',
            axisLine:{show:false},
            axisLabel: {
                color:"red",
                formatter: '{value} '
            },
            axisPointer: {
                snap: true
            }
        },
        visualMap: {
            show: false,
            dimension: 0,
            pieces: [{
                lte: 7,
                color: 'green'
            },{
                gt: 7,
                lte: 10,
                color: 'orange'
            }, {
                gt: 10,
                lte: 15,
                color: 'red'
            }, {
                gt: 15,
                lte: 18,
                color: 'orange'
            }, {
                gt: 18,
                lte: 21,
                color: 'red'
            }, {
                gt: 21,
                lte: 23,
                color: 'orange'
            },{
                gt: 23,
                color: 'green'
            }]
        },
        series: [
            {
                name: '用电量',
                type: 'line',
                step: 'start',
                
                data: [0.3648, 0.3648, 0.3648, 0.3648, 0.3648, 0.3648,0.3648,0.3648, 0.8645, 0.8645,0.8645, 1.3902, 1.3902, 1.3902, 1.3902, 1.3902, 0.8645, 0.8645,0.8645, 1.3902, 1.3902, 1.3902,0.8645,0.8645,0.3648,0.3648],
                markArea: {
                    data: [ [{
                        name: '高峰电价期',
                        xAxis: '10:00'
                    }, {
                        xAxis: '15:00'
                    }], [{
                        name: '高峰电价期',
                        xAxis: '18:00'
                    }, {
                        xAxis: '21:00'
                    }] ]
                }
            }
        ]
    };
    // 配置项给实例对象
    myChart.setOption(option);
})();


// 图2
(function(){
    // 实例化对象
    var myChart = echarts.init(document.querySelector('.line2 .chart'))
    // 指定配置和数据
    option = {
        title: {
            text: 'Step Line'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Step Start', 'Step Middle', 'Step End']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Step Start',
                type: 'line',
                step: 'start',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Step Middle',
                type: 'line',
                step: 'middle',
                data: [220, 282, 201, 234, 290, 430, 410]
            },
            {
                name: 'Step End',
                type: 'line',
                step: 'end',
                data: [450, 432, 401, 454, 590, 530, 510]
            }
        ]
    };
    
    // 配置项给实例对象
    myChart.setOption(option);
})();

// 图3
(function(){
    // 实例化对象
    var myChart = echarts.init(document.querySelector('.sankey1 .chart'))
    // 指定配置和数据
    
    var nodes =[
        {"name":"grid"},
        {"name":"PV"},
        {"name":"root1"},
        {"name":"root2"},
        {"name":"electric storage"},
        {"name":"load"},
        {"name":"SPE"},
        {"name":"hydrogen stroage"},
        {"name":"vehicle"},
        ];
    var links =[
        {"source":"grid","target":"root1","value":669.3464298},
        {"source":"PV","target":"root1","value":1057.587657},
        {"source":"root1","target":"electric storage","value":143.8491647},
        {"source":"electric storage","target":"root2","value":332.506087},
        {"source":"root1","target":"root2","value":1583.084922},
        {"source":"root2","target":"load","value":1828.038939},
        {"source":"root2","target":"SPE","value":87.55207004},
        {"source":"SPE","target":"hydrogen stroage","value":100},
        {"source":"hydrogen stroage","target":"vehicle","value":250},
        
        ];
    var option = {
        color: ['#fc853e','#28cad8','#9564bf','#bd407e','#e5a214'],	
        grid:{
            left: "0%",
            top: "0%",
            right: "0",
            bottom: "0%",
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [{
            type: 'sankey',
            right: "5%",
            top:"5%",
            data: nodes,
            links:  links ,
            focusNodeAdjacency: 'allEdges',
            levels: [{
                    depth: 0,
                    itemStyle: {
                        color: '#fbb4ae'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    depth: 1,
                    itemStyle: {
                        color: '#b3cde3'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    depth: 2,
                    itemStyle: {
                        color: '#ccebc5'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    depth: 3,
                    itemStyle: {
                        color: '#ccebc5'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                },{
                    depth: 4,
                    itemStyle: {
                        color: '#ccebc5'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                },{
                    depth: 5,
                    itemStyle: {
                        color: '#ccebc5'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                },{
                    depth: 6,
                    itemStyle: {
                        color: '#decbe4'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }],
            itemStyle: {
                borderWidth: 1,
            },
            lineStyle: {
                color: 'source',
                curveness: 0.5
            }
        }],
        toolbox:{
            feature:{
                saveAsImage:{}
            }
        }
    };        
    // 配置项给实例对象
    myChart.setOption(option);
})();

// 图4
(function(){
    // 实例化对象
    var myChart = echarts.init(document.querySelector('.sankey2 .chart'))
    // 指定配置和数据
    
    var nodes =[
        {"name":"grid",
    	itemStyle: {
    	    color: '#CCFF99'
    	}},
        {"name":"PV",
    	itemStyle: {
    	    color: '#99CCCC'
    	}},
        {"name":"root1",
    	itemStyle: {
    	    color: '#CCFFFF'
    	}},
        {"name":"root2",
    	itemStyle: {
    	    color: '#99CCFF'
    	}},
        {"name":"electric storage",
    	itemStyle: {
    	    color: '#CCFFFF'
    	}},
        {"name":"load",
    	itemStyle: {
    	    color: '##CCFFFF'
    	}},
        {"name":"SPE",
    	itemStyle: {
    	    color: '#CCCCFF'
    	}},
        {"name":"loss",
    	itemStyle: {
    	    color: '##CCFFFF'
    	}},
        {"name":"hydrogen stroage",
    	itemStyle: {
    	    color: '#CCCCFF'
    	}},
        {"name":"vehicle",
    	itemStyle: {
    	    color: '#66CCCC'
    	}},
        ];
    var links =[
        {"source":"grid","target":"root1","value":1195.341801},
        {"source":"PV","target":"root1","value":881.96},
        {"source":"root1","target":"electric storage","value":277.417087},
        {"source":"electric storage","target":"root2","value":266.0434783},
        {"source":"electric storage","target":"loss","value":11.3736087},
        {"source":"root1","target":"root2","value":1799.884714},
        {"source":"root2","target":"load","value":1865.928},
        {"source":"root2","target":"SPE","value":160.00025},
        {"source":"SPE","target":"loss","value":80.00025},
        {"source":"SPE","target":"hydrogen stroage","value":80},
        {"source":"hydrogen stroage","target":"vehicle","value":200},
        
        ];
    var option = {
        color: ['#fc853e','#28cad8','#9564bf','#bd407e','#e5a214'],	
        grid:{
            left: "0%",
            top: "0%",
            right: "0",
            bottom: "0%",
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [{
            type: 'sankey',
            right: "5%",
            data: nodes,
            links:  links ,
            focusNodeAdjacency: 'allEdges',
            itemStyle: {
                borderWidth: 1,
                borderColor: '#aaa'
            },
            lineStyle: {
                color: 'source',
                curveness: 0.5
            }
        }],
        toolbox:{
            feature:{
                saveAsImage:{}
            }
        }
    };        
    // 配置项给实例对象
    myChart.setOption(option);
})();