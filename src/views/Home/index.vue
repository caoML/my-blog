<template>
    <div class="home">
        <div class="header" :style="{backgroundImage:`url(${selectBg})`}">
            <div class="header-title">
                <span>caoML</span>
                <span class="header-info">
                    <a class="header-info_me">Blog</a>
                    <a class="header-info_me" href="https://github.com/caoML">Projects</a>
                </span>
            </div>
            <div class="header-eyes" @click="handleClick">
                <span>主题:</span>
                <svg-icon value=0 icon-class="browse" class="header-theme"></svg-icon>
                <svg-icon value=1 icon-class="browse" class="header-theme"></svg-icon>
                <svg-icon value=2 icon-class="browse" class="header-theme"></svg-icon>
                <svg-icon value=3 icon-class="browse" class="header-theme"></svg-icon>
            </div>
            <div class="header-content">
                <div class="header-content_name">
                    <span>caoML</span>
                </div>
                <div class="header-content_slogan">
                    <span>welcome my blog</span>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-left">
                <article-list :colors="color"></article-list>
            </div>
            <div class="content-right">
                <article-con :colors="color"></article-con>
            </div>
        </div>
    </div>
</template>

<script>
import ArticleList from './articleList.vue'
import ArticleCon from './article.vue'
export default {
  components: {
    ArticleList,
    ArticleCon
  },
  data () {
    return {
      bg: ['blue', 'green', 'pink', 'yellow'],
      bgColor: ['#427bd2', '#2cc3b0', '#E2685B', '#EFD16A'],
      selectBg: require('@/assets/img/blue.jpg'),
      color: '#427bd2'
    }
  },
  methods: {
    handleClick (event) {
      let value = event.target.getAttribute('value')
      value && (this.selectBg = require('../../' + 'assets/img/' + this.bg[value] + '.jpg'))
      this.color = this.bgColor[value]
    }
  }
}
</script>

<style lang="less" scoped>
    .home{
        color:white;
        .header{
            position:relative;
            height:500px;
            transition: all 1s;
            background-repeat:no-repeat;
            background-size: cover;
        }
        .content{
            width:75%;
            margin:30px auto 0;
        }
    }
    .header-title{
        padding:20px;
        .header-info{
            float:right;
            .header-content_name:hover{
                transition:all .7s;
                transition: scale(1.2) ;
            }
        }
    }
    .header-eyes{
        position:absolute;
        right:30px;
        bottom:10px;
        font-weight: bold;
        .header-theme{
            transition: all 1s;
            color:white;
            width:1em;
            padding:0.5em;
            border-radius:20px;
            cursor:pointer;
            vertical-align: -10px;
        }
        .header-theme:hover{
            transition: all 1s;
            background-color:rgba(255,255,255,.45);
            box-shadow: 0 0 7px 1px #fff;
        }
    }
    .header-content{
        font-family:'-webkit-pictograph';
        font-size:92px;
        position:absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        .header-content_slogan{
            text-align: center;
            font-size: 25px;
        }
    }
    .content-left{
        overflow: hidden;
        display:inline-block;
        text-align: center;
        width:25%;
        background-color: white;
        border-radius: 10px;
        transition: all 0.4s;
        margin-right:20px;
        vertical-align: top;
    }
    .content-left:hover{
        box-shadow:0 0 15px 1px #B5B5B5;
        transform: translateY(-5px);
    }
    .content-right{
        // overflow: hidden;
        display:inline-block;
        text-align: center;
        width:60%;
        // background-color: white;
        // height:200px;
        // border-radius: 10px;
    }
</style>
