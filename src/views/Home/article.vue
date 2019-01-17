<template>
    <div class="article" :style="{color:colors}">
        <div>
          <div v-for="(article,index) in articles" :key="index" class="article-item">
            <span class="article-item__date">{{article.data.split('-')[1]}}<br/>{{article.data.split('-')[2]}}</span>
            <span class="article-item__title"></span>
            <span class="article-item__introduct"></span>
            <span class="article-item__type"></span>
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
  }
  .article-item__date{
    display:inline-block;
    font-size:16px;
    width:25px;
    height:25px;
    border-radius:5px;
    padding-right:10px;
  }
  .article-item__title{
    display:inline-block;
    font-size:24px;
    text-shadow: 1px 1px 0 #CCC;
  }
  .article-item__introduct{
    display:block;
  }
  .article-item__type{
    display:inline-block;
  }
</style>
