<template>
  <div class="list">
    <Card 
      v-for="item in array" 
      :key="item.id"
      :item="item"
      :showSummary="activeCardId === item.id && showSummary"
      v-on:toggleSummary="setActiveCard($event)">
    </Card>
  </div>
</template>

<script>
import Card from "./Card"

export default {
  props: ["array"],
  components: {
    Card
  },
  data () {
    return {
      activeCardId: null,
      showSummary: false
    }
  },
  methods: {
    setActiveCard (payload) {
      this.activeCardId = payload.id
      this.showSummary = !payload.active
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    display: grid;
    grid-auto-rows: 40rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row dense;
    grid-gap: var(--space-md);
    padding: var(--space-md);
  }

  @media screen and (max-width: 1000px) {
    .list {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 600px) {
    .list {
      grid-template-columns: 1fr;
    }
  }
</style>