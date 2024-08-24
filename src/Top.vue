<template>
    <div id="top">
      <img id="logo" class="uns" src="/favicon.webp">
      <b id="logo-text" class="uns">{{ auther }}'s blog</b>
      <slot />
      <a id="github" :href="github" target="_blank" style="">
        <img class="uns" src="/svg/github-mark-white.svg" id="github-icon">
      </a>
    </div>
</template>
<script setup>
const props = defineProps(['auther', 'github'])
</script>
<style>
  @font-face {
    font-family: "font1";
    src: url('/fonts/PlaywriteMX-VariableFont_wght.ttf');
  }
  .uns {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  #top {
    position: fixed;
    height: 60px;
    z-index: 999;
    width: 100%;
    backdrop-filter: blur(10px);
    border-bottom: 2px #FFFFFF30 solid;
    background-color: #00000030;
  }
  #logo {
    position: absolute;
    height: 40px;
    top: 10px;
    left: calc(10% + 10px);
  }
  #logo-text {
    position: absolute;
    color: white;
    font-size: 20px;
    left: calc(10% + 60px);
    top: 10px;
    margin-top: 0;
    font-family: 'font1';
  }
  #github {
    position: absolute;
    z-index: 1000;
    top: 15px;
    height: 30px;
    width: 30px;
    right: 15px;
  }
  #github-icon {
    margin-top: 0;
    margin-right: 0;
    height: 30px;
    width: 30px;
  }
  #top > p, b {
    margin: 0;
    position: relative;
    color: white;
    font-size: 20px;
    top: 20px;
    margin-right: 1em;
  }
  #top :nth-child(3):not(#github) {
    margin-left: calc(10% + 60px + 13em)
  }
</style>