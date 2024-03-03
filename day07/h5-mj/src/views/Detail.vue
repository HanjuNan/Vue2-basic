<template>
  <div class="detail-page">
    文章详情页
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  data () {
    return {

    }
  },
  async created () {
    console.log(this.$route.params.id)
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
