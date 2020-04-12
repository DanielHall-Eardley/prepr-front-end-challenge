<template>
  <div class="projects">
    <header>
      <h1>Projects</h1>
      <div class="owned-invited-filter">
        <button 
          @click="filter = 'owned'" 
          class="switch-button"
          :class="{'switch-btn-focused': filter === 'owned'}">
          My projects
        </button>
        <button 
          @click="filter = 'invited'" 
          class="switch-button add-border" 
          :class="{'switch-btn-focused': filter === 'invited'}">
          Invited
        </button>
        <button class="primary-button l-margin">
          Create project
        </button>
      </div>
    </header>
    <main>
      <List :array="projectsList"></List>
    </main>
  </div>
</template>

<script>
import List from "@/components/shared/List"

export default {
  components: {
    List,
  },
  created () {
    this.$store.commit("switchListType", 'projects')
  },
  data () {
    return {
      filter: "owned",
    }
  },
  computed: {
    projectsList () {
      return this.$store.state.projectsList
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/helper";

  .projects {
    color: var(--text); 
    
    h1 {
      margin-right: auto;
      font-size: var(--font-lg);
    }
  }

  .l-margin {
    margin-left: var(--space-md);
  }

  .add-border {
    border-right: solid 1px var(--blue) !important;
  }

  @media screen and (max-width: 600px) {
    .projects h1 {
      margin: var(--space-md) 0;
      align-self: flex-start;
    }

    .owned-invited-filter {
      align-self: flex-start;
      margin-bottom: var(--space-md);
    }
  }
</style>