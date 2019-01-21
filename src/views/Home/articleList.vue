<template>
    <div class="acticle-list">
        <div class="list-header" :style="{backgroundColor:colors}">
            <h3>文章分类</h3>
            <span class="header-item">Article Categories</span>
        </div>
        <div class="list-content" :style="{color:colors}">
            <div class="content-item" v-for="(list,index) in lists" :key="index">{{list}}</div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: String,
      default: '#427bd2'
    }
  },
  data () {
    return {
      lists: [
        'ALL', 'CSS', 'Javascript', 'Vue', 'Javascript', 'Vue'
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .acticle-list{
    .list-header{
      padding:10px 0;
      font-weight: bold;
    }
  }
  .header-item{
    font-size: 14px;
  }
  .list-content{
    text-align: left;
    .content-item{
      font-size:14px;
      font-weight: bold;
      padding:13px;
      transition:all 1s;
      &:hover{
        transform: translateX(10px);
      }
    }
  }
</style>
