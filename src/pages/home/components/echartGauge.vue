<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: xieliangkai
* Date: 2022-12-12 16:32
* Desc: echart仪表盘组件
*/
 -->

<template>
    <div class="yibiao"></div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import * as echarts from 'echarts';

onMounted(() => {

    const instance: any = getCurrentInstance()

    const $el = instance.vnode.el
    // var chartDom = document.getElementById('main');
    var myChart = echarts.init($el);
    var option;

    option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                name: 'Pressure',
                type: 'gauge',
                radius: '100%',
                color: 'blue',
                progress: {
                    show: true
                },
                itemStyle: {
                    color: '#58D9F9',
                    shadowColor: 'rgba(0,138,255,0.45)',
                    shadowBlur: 10,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                    with: 2
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value}'
                },
                data: [
                    {
                        value: 50,
                        name: 'co2',
                    }
                ],
                splitNumber: 5,
                axisLine: {
                    lineStyle: {
                        width: 2,
                    }
                }

            }
        ]
    };

    option && myChart.setOption(option);
})




</script>
<style scoped lang="scss">
.yibiao {
    width: 120px;
    height: 120px;

}
</style>