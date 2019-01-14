<template>
    <div class="home">
        <div class="header" :style="{background:'url('+selectBg+')'}">
        <!-- <div class="header"> -->
            <div class="header-title">
                <p>hello</p>
            </div>
            <div class="eyes" @click="handleClick">
                <svg-icon value=1 icon-class="browse" class="theme"></svg-icon>
                <svg-icon value=2 icon-class="browse" class="theme"></svg-icon>
                <svg-icon value=3 icon-class="browse" class="theme"></svg-icon>
                <svg-icon value=4 icon-class="browse" class="theme"></svg-icon>
                <svg-icon value=5 icon-class="browse" class="theme"></svg-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      bg: ['blue.jpg', 'green.jpg', 'pink.jpg', 'yellow.jpg'],
      selectBg: '@/assets/img/blue.jpg'
    //   ts: {backgroundImg: "url('+../../assets/img/blue.jpg+')"}
      //   ts: {backgroundColor: 'blue'}
    }
  },
  methods: {
    handleClick (event) {
      let value = event.target.getAttribute('value')
      console.log(value)
    }
  }
}
</script>

<style lang="less" scoped>
    .home{
        .header{
            position:relative;
            // background:url('../../assets/img/blue.jpg');
            height:500px;
            .eyes{
                .theme{
                    transition: all 1s;
                    color:white;
                    width:1.5em;
                    margin:0.5em;
                    border-radius:20px;
                    cursor:pointer;
                }
                .theme:hover{
                    transition: all 1s;
                    background-color:rgba(255,255,255,.45);
                    box-shadow: 0 0 7px 1px #fff;
                }
            }
        }
    }
</style>
