<script setup lang="ts">
import { SeamlessScroll } from 'linzhe-tools'
</script>
<template>
  <div>默认滚动</div>
  <SeamlessScroll :height="108" style="background-color: #ccc">
    <div style="line-height: 22px">11111111111111111111</div>
    <div style="line-height: 22px">22222222222222222222</div>
    <div style="line-height: 22px">33333333333333333333</div>
    <div style="line-height: 22px">44444444444444444444</div>
    <div style="line-height: 22px">55555555555555555555</div>
    <div style="line-height: 22px">66666666666666666666</div>
  </SeamlessScroll>
  ==============
  <div>分步滚动</div>
  <SeamlessScroll
    :height="108"
    :step-height="22"
    :step-wait-timeout="2000"
    style="background-color: #ccc"
  >
    <div style="line-height: 22px">11111111111111111111</div>
    <div style="line-height: 22px">22222222222222222222</div>
    <div style="line-height: 22px">33333333333333333333</div>
    <div style="line-height: 22px">44444444444444444444</div>
    <div style="line-height: 22px">55555555555555555555</div>
    <div style="line-height: 22px">66666666666666666666</div>
  </SeamlessScroll>
</template>
