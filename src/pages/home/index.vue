<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: xieliangkai
* Date: 2022-12-06 16:10
* Desc: 
*/
 -->

<template>
  <div>home</div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
export default {
  name: '',
  setup() {
    const { proxy }: any = getCurrentInstance()
    const data = reactive({})
    onMounted(() => {

    })
    return {
      ...toRefs(data)
    }
  },
}

</script>
<style scoped>

</style>
