<template>
  <div class="popular-categories">
    <span v-for="category in popularCategories" :key="category">
      {{category}}
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    popularCategories () {
      return this.$store.state.popularCategories
    },
  }
}
</script>

<style lang="scss" scoped>
  .popular-categories {
    border-bottom: solid 1px var(--blue);
    padding: var(--space-sm);

    span {
      background-color: var(--grey);
      padding: var(--space-sm);
      border-radius: var(--border-rad);
      font-size: var(--font-sm);
      display: inline-block;
      margin-bottom: .8rem;
      margin-right: .8rem;
    }
  }
</style>