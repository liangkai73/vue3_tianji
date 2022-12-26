<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: xieliangkai
* Date: 2022-12-12 15:06
* Desc: 首页map
*/
 -->

<template>
    <div id="home-map-container">
        地图
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import loadBMap from '@/libs/bmap'
import * as echarts from 'echarts';


onMounted(() => {
    // eslint-disable-next-line no-undef

    loadBMap("P8ilO4PUYIGjv1wwwZUAoZwYGWjPRg9g")
        .then(() => {
            // 配置option
            require('echarts/extension/bmap/bmap');
            var chartDom = document.getElementById('home-map-container');
            var myChart = (echarts as any).init(chartDom);
            var option;

            var data: any = [
                { name: '海门', value: 9 },
                { name: '鄂尔多斯', value: 12 },
                { name: '招远', value: 12 },
                { name: '舟山', value: 12 },
                { name: '齐齐哈尔', value: 14 },
            ];
            var geoCoordMap: any = {
                海门: [121.15, 31.89],
                鄂尔多斯: [109.781327, 39.608266],
                招远: [120.38, 37.35],
                舟山: [122.207216, 29.985295],
                齐齐哈尔: [123.97, 47.33],
            };
            var convertData = function (data: any) {
                var res = [];
                for (var i = 0; i < data.length; i++) {

                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };
            function renderItem(params: any, api: any) {
                var coords = [
                    [116.7, 39.53],
                    [103.73, 36.03],
                    [112.91, 27.87],
                    [120.65, 28.01],
                    [119.57, 39.95]
                ];
                var points = [];
                for (var i = 0; i < coords.length; i++) {
                    points.push(api.coord(coords[i]));
                }
                var color = api.visual('color');
                return {
                    type: 'polygon',
                    shape: {
                        points: echarts.graphic.clipPointsByRect(points, {
                            x: params.coordSys.x,
                            y: params.coordSys.y,
                            width: params.coordSys.width,
                            height: params.coordSys.height
                        })
                    },
                    style: api.style({
                        fill: color,
                        stroke: echarts.color.lift(color, 1)
                    })
                };
            }
            option = {
                backgroundColor: 'transparent',
                title: {

                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                bmap: {
                    center: [104.114129, 37.550339],
                    zoom: 5,
                    roam: true,
                    mapStyle: {
                        styleJson: [
                            {
                                featureType: 'water',
                                elementType: 'all',
                                stylers: {
                                    color: '#044161'
                                }
                            },
                            {
                                featureType: 'land',
                                elementType: 'all',
                                stylers: {
                                    color: '#004981'
                                }
                            },
                            {
                                featureType: 'boundary',
                                elementType: 'geometry',
                                stylers: {
                                    color: '#064f85'
                                }
                            },
                            {
                                featureType: 'railway',
                                elementType: 'all',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'highway',
                                elementType: 'geometry',
                                stylers: {
                                    color: '#004981'
                                }
                            },
                            {
                                featureType: 'highway',
                                elementType: 'geometry.fill',
                                stylers: {
                                    color: '#005b96',
                                    lightness: 1
                                }
                            },
                            {
                                featureType: 'highway',
                                elementType: 'labels',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'arterial',
                                elementType: 'geometry',
                                stylers: {
                                    color: '#004981'
                                }
                            },
                            {
                                featureType: 'arterial',
                                elementType: 'geometry.fill',
                                stylers: {
                                    color: '#00508b'
                                }
                            },
                            {
                                featureType: 'poi',
                                elementType: 'all',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'green',
                                elementType: 'all',
                                stylers: {
                                    color: '#056197',
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'subway',
                                elementType: 'all',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'manmade',
                                elementType: 'all',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'local',
                                elementType: 'all',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'arterial',
                                elementType: 'labels',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'boundary',
                                elementType: 'geometry.fill',
                                stylers: {
                                    color: '#029fd4'
                                }
                            },
                            {
                                featureType: 'building',
                                elementType: 'all',
                                stylers: {
                                    color: '#1a5787'
                                }
                            },
                            {
                                featureType: 'label',
                                elementType: 'all',
                                stylers: {
                                    visibility: 'off'
                                }
                            }
                        ]
                    }
                },
                series: [
                    {
                        name: 'pm2.5',
                        type: 'scatter',
                        coordinateSystem: 'bmap',
                        data: convertData(data),
                        encode: {
                            value: 2
                        },
                        symbolSize: function (val: any) {
                            return val[2] / 10;
                        },
                        label: {
                            formatter: '{b}',
                            position: 'right'
                        },
                        itemStyle: {
                            color: '#ddb926'
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        }
                    },
                    {
                        name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'bmap',
                        data: convertData(
                            data
                                .sort(function (a: any, b: any) {
                                    return b.value - a.value;
                                })
                                .slice(0, 6)
                        ),
                        encode: {
                            value: 2
                        },
                        symbolSize: function (val: any) {
                            return val[2] / 10;
                        },
                        showEffectOn: 'emphasis',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        },
                        itemStyle: {
                            color: '#f4e925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        },
                        zlevel: 1
                    },
                    {
                        type: 'custom',
                        coordinateSystem: 'bmap',
                        renderItem: renderItem,
                        itemStyle: {
                            opacity: 0.5
                        },
                        animation: false,
                        silent: true,
                        data: [0],
                        z: -10
                    }
                ]
            };

            option && myChart.setOption(option);


        })


})

</script>
<style scoped lang="scss">
#home-map-container {
    width: 100%;
    height: 100vh;
    background: rgba(15, 17, 24, 1);
}
</style>