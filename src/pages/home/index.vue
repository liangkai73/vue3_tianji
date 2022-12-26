<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: xieliangkai
* Date: 2022-12-06 16:10
* Desc: 
*/
 -->

<template>
  <div class="tj-container">
    <div class="map-content">
      <bgMap></bgMap>
      <div class="map-inner-left">
        <pageView :title="'节能减排量统计'">
          <div style="height:250px">
            <echartGaugeVue></echartGaugeVue>

          </div>
        </pageView>
        <pageView :title="'储能统计充电'" class="mt15">
          <div style="height:250px">

          </div>

        </pageView>
        <pageView class="mt15">
          <div style="height:195px">

          </div>

        </pageView>
      </div>
      <div class="map-inner-top flex_r_s">
        <pageView class="flex1" style="margin-right: 15px;color:aquamarine">
          <div style="height:90px">
            <div>当日收益</div>
            <div class="mt5" style="text-align:center;">
              <span>￥</span>
              <span style="font-size: 26px;">0</span>
              <span>(元)</span>
            </div>
          </div>
        </pageView>
        <pageView class="flex1" style="margin-right: 15px;color:#f38e57">
          <div style="height:90px">
            <div>当月收益</div>
            <div class="mt5" style="text-align:center;">
              <span>￥</span>
              <span style="font-size: 26px;">2323.0</span>
              <span>(元)</span>
            </div>

          </div>
        </pageView>
        <pageView class="flex1" style="margin-right: 15px;color:#8ab9f9;">
          <div style="height:90px">
            <div>总收益</div>
            <div class="mt5" style="text-align:center;">
              <span>￥</span>
              <span style="font-size: 26px;">1.5219</span>
              <span>(万元)</span>
            </div>

          </div>
        </pageView>
      </div>
      <div class="map-inner-right">
        <pageView :title="'储能放点统计'">
          <div style=" height: calc(100vh - 155px)">

          </div>

        </pageView>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue';
import { bgMap, echartGaugeVue } from './components'
import pageView from "@/pageComponents/pageView/index.vue"

onMounted(() => {


})
</script>
<style scoped lang="scss">
.map-content {
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
  }

  // #home-map {
  //   width: 100%;
  //   height: 100vh;
  // }

  .map-inner-left {
    width: 25%;
    // height: calc(100vh - 105px);
    // background: red;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 80px;
    padding: 15px;
  }

  .map-inner-top {
    width: 45%;
    height: 120px;
    position: absolute;
    font-size: 12px;
    left: 25%;
    top: 0;
    margin-top: 80px;
    padding: 15px 0 0 0;
    color: rgb(255, 255, 255);
  }

  .map-inner-right {
    width: 30%;
    // height: calc(100vh - 105px);
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 80px;
    padding: 15px;
  }
}
</style>
