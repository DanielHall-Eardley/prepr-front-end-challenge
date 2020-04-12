<template>
  <header>
    <h3>
      <span>Explore </span>
      <span>{{listType}}</span>
    </h3>
    <div class="toggle-button" @click="showFilters = !showFilters">
      <svg v-if="showFilters">
        <use xlink:href="@/assets/sprite.svg#icon-chevron-thin-right"></use>
      </svg>
      <svg v-else>
        <use xlink:href="@/assets/sprite.svg#icon-chevron-thin-left"></use>
      </svg>
      <span v-show="!showFilters">Filters</span>
    </div> 
    <div class="select-type" v-show="showFilters">
      <button 
        @click="switchListType" 
        class="switch-button"
        :class="{'switch-btn-focused': listType === 'CHALLENGES'}">
        Challenges
      </button>
      <button 
        @click="switchListType" 
        class="switch-button" 
        :class="{'switch-btn-focused': listType === 'PROJECTS'}">
        Projects
      </button>
      <button 
        @click="switchListType" 
        class="switch-button" 
        :class="{'switch-btn-focused': listType === 'LABS'}">
        Labs
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      showFilters: false
    }  
  },
  computed: {
    listType () {
      const selectedList = this.$store.state.selectedList
      return selectedList.toUpperCase()
    }
  }, 
  methods: {
    switchListType (e) {
      const listType = e.target.innerText.toLowerCase()
      this.$store.commit("switchListType", listType)
    }  
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/helper";

  h3 {
    font-size: var(--font-lg);
    margin-right: auto;
    color: var(--text);

    span:last-child {
      color: var(--blue)
    }
  }

  .select-type {
    display: flex;
    align-items: "center";
    margin-left: var(--space-sm);
  }

  @media screen and (max-width: 600px) {
    header {
      flex-direction: column;
      height: auto;
  
      h3 {
        margin-top: var(--space-sm);
        margin-bottom: var(--space-md);
      }
    }

    .select-type {
      margin-left: 0;
      margin-bottom: var(--space-md);
      display: flex;
    }
  } 
</style>