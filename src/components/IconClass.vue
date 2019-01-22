<template>
    <svg :class="svgName" aria-hidden="true">
        <use :xlink:href="iconName"></use>
        <!-- <use :xlink:href="iconName"></use> -->
    </svg>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true
    },
    svgName: {
      type: String,
      default: 'svg-name'
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style scoped>
    .svg-name{
        width: 1em;
        height: 1em;
        /* vertical-align: -0.15em; */
        fill: currentColor;
        overflow: hidden;
    }
</style>
