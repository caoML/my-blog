<template>
    <div class="article" :style="{color:colors}">
        <div>
          <div v-for="(article,index) in articles" :key="index" class="article-item">
            <span class="article-item__date" :style="{backgroundColor:colors}">{{article.data.split('-')[2]}}<br/>{{article.data.split('-')[1]}}</span>
            <span class="article-item__title">{{article.title}}</span>
            <span class="article-item__introduct">{{article.introduct}}</span>
            <span class="article-item__type">
              <span class="type-value" :style="{backgroundColor:colors}">{{article.type}}</span>
              <span class="article-read" :style="{backgroundColor:colors}">阅读全文</span>
            </span>
          </div>
        </div>
    </div>
</template>

<script>
import getArt from '@/api'
export default {
  props: {
    colors: {
      type: String,
      default: '#427bd2'
    }
  },
  data () {
    return {
      articles: []
    }
  },
  computed: {
  },
  methods: {
    getArticle () {
      getArt().then((res) => {
        this.articles = res.data.article
      })
    }
  },
  mounted () {
    this.getArticle()
  }
}
</script>

<style scoped lang="less">
  .article{
    font-weight: bold;
  }
  .article-item{
    background-color: white;
    padding:10px;
    margin-bottom:40px;
    border-radius:5px;
    font-weight: normal;
  }
  .article-item__date{
    display:inline-block;
    text-align:center;
    font-size:16px;
    color:white;
    border-radius:5px;
    padding:2px 10px;
  }
  .article-item__title{
    display:inline-block;
    overflow: hidden;
    font-size:24px;
    text-shadow: 1px 1px 0 #CCC;
  }
  .article-item__introduct{
    display:block;
    word-break: break-word;
    color:#636363;
    padding:20px 0;
    font-family: "lucida grande","lucida sans unicode",lucida,helvetica,"Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  }
  .article-item__type{
    display:inline-block;
    color:white;
    width:100%;
    font-size:14px;
    .type-value{
      display:inline-block;
      padding:3px;
      border-radius: 2px;
      margin-top: 4px;
    }
    .article-read{
      float:right;
      padding:6px;
      border-radius: 3px;
    }
  }
</style>
