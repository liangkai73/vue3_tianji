<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: xieliangkai
* Date: 2022-12-07 14:39
* Desc: headBar
*/
 -->

<template>
    <div class="tj-head flex_r_s">
        <div></div>
        <div class="tj-head-logo">
            <img width="120px" src="../../assets/logo_w.png" alt="">
        </div>
        <div class="flex1 flex_r">
            <span class="tj-head-title"> 天极数字能源管理平台</span>
        </div>
        <div class="tj-head-tools">
            <div class="flex_r_s">
                <span>管理员,欢迎您</span>
                <el-icon class="cur_P" :size="20" :color="'#84dded'">
                    <HomeFilled />
                </el-icon>
                <el-icon class="cur_P" :size="20" :color="'#84dded'">
                    <Tools />
                </el-icon>

            </div>
            <div class="flex_r_s mt10">
                <span class="flex1"></span>
                <span> {{ date.timer }} </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, computed, ref, onMounted, getCurrentInstance } from 'vue';
import { getDateStr } from "@/libs/filter"


const date = reactive({
    timer: '',
    timerFun: 0
})

function getNowTime(): string {
    return getDateStr(new Date().getTime(), 2)
}

onMounted(() => {
    date.timer = getNowTime()
    date.timerFun = setInterval(() => {
        date.timer = getNowTime()
    }, 1000)

})


</script>
<style scoped lang="scss">
.tj-head {
    height: 80px;
    min-width: 1280px;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(63, 97, 233, 0.2);
    color: #fff;
    width: 100%;
    z-index: 10000;

    .tj-head-logo {
        width: 220px;
        padding: 15px;
        text-align: right;
    }

    .tj-head-tools {
        width: 220px;
        font-size: 14px;
        padding: 10px;
        color: #84dded;

        i {
            margin-left: 5px;
        }
    }

    .tj-head-title {
        font-size: 34px;
        text-shadow: 0 0 1px #fff,
            0 0 10px #fff,
            0 0 15px #fff,
            0 0 20px #38c9e3,
            0 0 25px #38c9e3,

    }


}

.tj-head>div {
    height: 100%;
}
</style>