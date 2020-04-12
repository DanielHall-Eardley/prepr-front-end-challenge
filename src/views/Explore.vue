<template>
  <div class="explore">
    <Header></Header>
    <List :array="getExploreList"></List>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/shared/List.vue'
import Header from '@/components/explore/Header.vue'

export default {
  name: 'Explore',
  components: {
    List,
    Header
  },
  computed: {
    getExploreList () {
      return this.$store.getters.currentArray
    },
  }
}
</script>
