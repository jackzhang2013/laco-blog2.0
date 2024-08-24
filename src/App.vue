<template>
  <header>
    <title>{{ auther }}'s blog</title>
    <Top :auther="auther" :github="github">
        <b class="uns">主页</b>
        <b class="uns">文章</b>
        <b class="uns">分类</b>
    </Top>
  </header>
  <main>
    <div class="page">
      <div id="head">
        <img id="background_img" class="uns" :src="head_image">
        <img id="avatar" class="uns" style="" :src="avatar">
        <h1 class="uns">{{ auther }}</h1>
        <el-tag class="tag uns" effect="dark" v-for="item in tags"> {{ item }} </el-tag>
      </div>
      <div id="content">
        <div class="right">
          <el-timeline>
            <el-timeline-item v-for="item in timeline" :timestamp="item.time" placement="top">
              <div class="timeline-card">
                <h4>{{ item.title }}</h4>
              </div>
            </el-timeline-item>
          </el-timeline>
        </div>
        <div class="left">
          <img :src="snack" width="100%">
          <img src="https://skillicons.dev/icons?i=cpp,py,latex,html,css,js,vscode&theme=light">
        </div>
      </div>
    </div>
    <div class="background" :style="{'background-image': 'url(' + background + ')'}">
      <a name="blog"/>
      <p>blog</p>
      <div class="post uns">
        <img class="uns" src="/image/background_head.jpg"> 
      </div>
    </div>
  </main>
  <footer>
  </footer>
</template>

<script>
import yaml from 'js-yaml';
import $ from 'cash-dom';
import axios from 'axios'
// import { Marked } from 'marked';
// import { markedHighlight } from 'marked-highlight';
// import hljs from 'highlight.js'
// import 'highlight.js/styles/github-dark.min.css'
export default {
  name: 'MyApp',
  data() {
    return {
      auther: "",
      github: "",
      background: "",
      head_image: "",
      avatar: "",
      snack: "",
      tags: [],
      timeline: [],
    }
  },
  mounted () {
    this.getData();
    this.unsClass();
  },
  methods: {
    getData: function() {
      axios.get('./config.yml')
      .then(res => {
        const parsedConfig = yaml.load(res.data);
        this.auther = parsedConfig.auther;
        this.github = parsedConfig.github;
        this.background = parsedConfig.cdn + parsedConfig.background;
        this.head_image = parsedConfig.cdn + parsedConfig.head_image;
        this.avatar = parsedConfig.cdn + parsedConfig.avatar;
        this.snack = parsedConfig.snack;
        this.tags = parsedConfig.tags;
      })
      axios.get('./timeline.yml')
      .then(res => {
        console.log(window.location.hash);
        const parsedConfig = yaml.load(res.data);
        this.timeline = parsedConfig.all;
        // const marked = new Marked(
        //   markedHighlight({
        //     langPrefix: 'hljs language-',
        //     highlight(code, lang, info) {
        //       const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        //       return hljs.highlight(code, { language }).value;
        //     }
        //   })
        // );
        // for(var i in this.timeline) {
        //   console.log(marked.parse(this.timeline[i].title));
        //   this.timeline[i].title = marked.parse(this.timeline[i].title);
        // }
      })
    },
    unsClass: function() {
      $(function() {
        $(".uns").attr({draggable: "false"})
      });
    }
  },
  components: {}
}
</script>

<script setup>
import { ElLoading } from 'element-plus';
import 'element-plus/es/components/button/style/css'
import Top from "./Top.vue";
//const loadingInstance1 = ElLoading.service({ background: 'rgba(0, 0, 0, 0.7)', fullscreen: true });
document.onreadystatechange = function() {
  if(document.readyState == "complete")
  { 
    //loadingInstance1.close();
  }
} 
</script>

<style>
  @font-face {
      font-family: "font1";
      src: url('/fonts/PlaywriteMX-VariableFont_wght.ttf');
  }
  @keyframes page-in {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
  main {
    height: 100%;
  }
  .background {
    min-height: 100%;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #464646;
    background-attachment: fixed;
    padding: 0 20%;
  }
  .page {
    margin-top: 0;
    height: 100%;
    background-color: #EBC6D9;
  }
  body::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  body {
    -ms-overflow-style: none; /* IE 10+ */
  }
  .page > #head > h1 {
    position: relative;
    left: calc(10% + 300px);
    margin: 0;
    top: calc(75% - 105px);
    color: white;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
  .page > #head > h1 {
    font-family: 'font1';
    font-size: 3em;
  }
  #head > img {
    object-fit: cover;
  }
  .uns {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  .post {
    margin-bottom: 50px;
    position: relative;
    width: 100%;
    background-color: white;
    height: 250px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
  .post:nth-child(2) {
    margin-top: 100px;
  }
  .background > p {
    font-family: 'font1';
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    font-size: 3em;
    top: 40px;
    color: white;
    position: relative;
    margin: 0;
  }
  .post:nth-child(2n) > img {
    float: right;
    border-radius: 0px 10px 10px 0px;
  }
  .post:nth-child(2n+1) > img {
    float: left;
    border-radius: 10px 0px 0px 10px;
  }
  .post > img {
    width: 55%;
    object-fit: cover;
    height: 100%;
  }
  #head {
    height: 40%;
  }
  #background_img {
    position: absolute;
    width: 100%;
    height: 30%;
    z-index: 0;
  }
  #avatar {
    position: absolute;
    top: calc(30% - 105px);
    width: 200px;
    height: 200px;
    left: 10%;
    border-radius: 500px;
    border: 6px white solid;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
  .page > #head > .tag {
    position: relative;
    left: calc(10% + 300px);
    margin: 0;
    top: calc(75% - 70px);
    margin-right: 10px;
  }
  #content {
    padding: 1em 0;
  }
  .right {
    position: relative;
    float: right;
    width: 30%;
    right: 10%;
  }
  .left {
    position: relative;
    float: left;
    width: 45%;
    left: 10%;
  }
  .left > img {
    position: relative;
    max-width: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    margin-bottom: 30px;
  }
  .timeline-card {
    width: 100%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
  }
</style>