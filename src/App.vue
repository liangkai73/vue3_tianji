<template>
  <div id="app">
    <headBarVue></headBarVue>
    <router-view></router-view>
  </div>

</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import headBarVue from "./pageComponents/headBar/index.vue";

</script>

<style lang="scss">
@import "~@/styles/index";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1280px;
  min-height: 550px;
  height: 100vh;

}
</style>
