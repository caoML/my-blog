<template>
    <div class="home" ref="home" :style="{height:height+'px'}">
        <div class="header" :style="{backgroundImage:`url(${selectBg})`}">
            <div class="header-title">
                <span>caoML</span>
                <span class="header-info">
                    <a class="header-info_blog">Blog</a>
                    <a class="header-info_github" href="https://github.com/caoML">Projects</a>
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
                <div class="header-content_name" :style=headerScroll>
                    <span>caoML</span>
                </div>
                <div class="header-content_slogan" :style="{transform:`scale(${scroll})`,opacity:2-`${scroll}`}">
                    <span>welcome my blog</span>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-left">
                <article-list :colors="color"></article-list>
            </div>
            <div class="content-right">
                <article-con :colors="color" v-if="showMd"></article-con>
                <router-view class="content-md" v-else></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import ArticleList from './articleList.vue'
import ArticleCon from './article.vue'
import {mapActions} from 'vuex'
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
      color: '#427bd2',
      height: 0,
      headerScroll: null
    }
  },
  computed: {
    scroll () {
      return (this.$store.state.app.scrollTop + 1000) / 1000
    },
    showMd () {
      return this.$route.path.indexOf('.md') === -1
    }
  },
  methods: {
    ...mapActions(['changeScroll']),
    handleClick (event) {
      let value = event.target.getAttribute('value')
      value && (this.selectBg = require('../../' + 'assets/img/' + this.bg[value] + '.jpg'))
      this.color = this.bgColor[value]
    },
    listenScroll () {
      let home = this.$refs['home']
      home.addEventListener('scroll', () => {
        this.changeScroll(home.scrollTop)
      }, false)
    },
    getHeight () {
      this.height = document.documentElement.clientHeight
    }
  },
  mounted () {
    this.getHeight()
    this.listenScroll()
  },
  watch: {
    scroll (newValue, oldValue) {
      if (newValue < 500) {
        this.headerScroll = {transform: `scale(${this.scroll})`, opacity: 2 - `${this.scroll}`}
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .home{
        overflow:auto;
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
            .header-info_blog:hover{
                text-shadow: 2px 2px 10px #000000;
                transition:all 0.5s;
                transform: scale(1.1)
            }
            .header-info_github:hover{
                text-shadow: 2px 2px 10px #000000;
                transition:all 0.5s;
                transform: scale(1.1)
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
        .header-content_name{
            padding-bottom: 40px;
        }
        .header-content_slogan{
            text-align: center;
            font-size: 25px;
        }
    }
    .content-left{
        @media screen {
            overflow: hidden;
            display:inline-block;
            text-align: center;
            width:20%;
            background-color: white;
            border-radius: 10px;
            transition: all 0.4s;
            margin-right:20px;
            vertical-align: top;
            @media (max-width:768px){
                width:30%;
            }
        }
    }
    .content-left:hover{
        box-shadow:0 0 15px 1px #B5B5B5;
        transform: translateY(-5px);
    }
    .content-right{
        display:inline-block;
        width:70%;
        @media screen {
            @media (max-width: 768px){
                width:60%;
            }
        }
        .content-md{
            overflow: auto;
            color:black;
            padding:10px;
            background-color: white;
            border-radius: 10px;
        }
    }
</style>
