<template>
  <div class="challenges">
    <header>
      <h1>Challenges</h1>
      <Filters listType="challenges"></Filters>
      <div class="toggle-button l-margin category-mobile" @click="showPopCategories = !showPopCategories">
        <svg v-if="showPopCategories">
          <use xlink:href="@/assets/sprite.svg#icon-chevron-thin-up"></use>
        </svg>
        <svg v-else>
          <use xlink:href="@/assets/sprite.svg#icon-chevron-thin-down"></use>
        </svg>
        <span v-show="!showPopCategories">Popular Categories</span>
      </div> 
    </header>
    <main>
      <PopularCategories v-show="showPopCategories"></PopularCategories>
      <List :array="challengesList"></List>
    </main>
  </div>
</template>

<script>
import List from "@/components/shared/List"
import PopularCategories from "@/components/shared/PopularCategories"
import Filters from "@/components/shared/Filters"

export default {
  components: {
    List,
    Filters,
    PopularCategories
  },
  created () {
    this.$store.commit("switchListType", 'challenges')
  },
  data () {
    return {
      showPopCategories: false
    }
  },
  computed: {
    challengesList () {
      return this.$store.getters.currentArray
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/helper";


  .challenges {
    color: var(--text);  

    h1 {
      margin-right: auto;
      font-size: var(--font-lg);
    }
  }

  .l-margin {
    margin-left: var(--space-md);
  }

  @media screen and (max-width: 600px) {
    .challenges h1 {
      margin: var(--space-md) 0;
      align-self: flex-start;
    }

    .category-mobile {
      position: absolute;
      top: 4.5rem;
      right: var(--space-md)
    }
  }
</style>