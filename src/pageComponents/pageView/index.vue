<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: xieliangkai
* Date: 2022-12-08 14:07
* Desc: 
*/
 -->

<template>
    <div class="tj-pageView">
        <div class="tj-pageView-title" v-if="title">
            {{ title }}
        </div>
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, onMounted, getCurrentInstance, defineProps } from 'vue'
const props = defineProps({
    title: String || undefined
})

</script>
<style scoped lang="scss" >
.tj-pageView {
    padding: 10px;
    width: 100%;
    // border: 1px solid #fff;
    position: relative;
    background: rgba(15, 17, 24, 0.3);

    &::before {
        content: '';
        width: 120px;
        height: 32px;
        position: absolute;
        top: -2px;
        left: -10px;
        z-index: 1000;
        transform: rotate(180deg);
        background: url(./download.png);
    }

    &::after {
        content: '';
        width: 120px;
        height: 32px;
        position: absolute;
        bottom: -2px;
        right: -10px;
        z-index: 1000;
        background: url(./download.png);
    }

    .tj-pageView-title {
        font-size: 16px;
        color: #fff;
        text-shadow: 0 0 1px #fff,
            0 0 10px #fff,
            0 0 15px #fff,
            0 0 20px #38c9e3,
            0 0 25px #38c9e3,


    }
}
</style>