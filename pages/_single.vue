<template>
  <!-- <Page v-if="single.type === 'page'" :page="single"/>
  <Post v-else :post="single"/> -->
  <div></div>
</template>

<script>
// import Page from '~/components/WuxtTemplates/Page'
// import Post from '~/components/WuxTtemplates/Post'
export default {
  async asyncData(context) {
    const { route, app, error } = context
    try {
      const single = await app.$wp.slug().name(route.params.single)
      return { single }
    } catch (e) {
      error(e)
    }
  },
  components: {
    Page,
    Post
  }
}
</script>
