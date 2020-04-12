<template>
  <div class="filter-container">
    <div class="toggle-button filter-mobile" @click="showFilters = !showFilters">
      <svg v-if="showFilters">
        <use xlink:href="@/assets/sprite.svg#icon-chevron-thin-right"></use>
      </svg>
      <svg v-else>
        <use xlink:href="@/assets/sprite.svg#icon-chevron-thin-left"></use>
      </svg>
      <span v-show="!showFilters">Filters</span>
    </div> 
    <div class="filters" v-show="showFilters">
      <select name="" class="category-filter" v-model="category">
        <option value=null>None</option>
        <option value="category #1">category #1</option>
        <option value="category #2">category #2</option>
        <option value="category #2">category #2</option>
        <option value="category #4">category #4</option>
      </select>
      <div class="location-filter">
        <button 
          @click="location = 'all'" 
          class="switch-button"
          :class="{'switch-btn-focused': location === 'all'}">
          All
        </button>
        <button 
          @click="location = 'local'" 
          class="switch-button" 
          :class="{'switch-btn-focused': location === 'local'}">
          Local
        </button>
      </div>
      <div class="public-private-filter">
        <button 
          @click="isPublic = true" 
          class="switch-button"
          :class="{'switch-btn-focused': isPublic}">
          Public
        </button>
        <button 
          @click="isPublic = false" 
          class="switch-button" 
          :class="{'switch-btn-focused': !isPublic}">
          Private
        </button>
      </div>
      <div class="owned-popular-filter" v-if="listType === 'labs'">
        <button 
          @click="ownerType = 'owned'" 
          class="switch-button"
          :class="{'switch-btn-focused': ownerType === 'owned'}">
          Owned
        </button>
        <button 
          @click="ownerType= 'popular'" 
          class="switch-button" 
          :class="{'switch-btn-focused': ownerType === 'popular'}">
          Popular
        </button>
      </div>
      <button 
        class="primary-button apply"
        @click="applyFilters">
        Apply Filters
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["listType"],
  data () {
    return {
      showFilters: false,
      location: "all",
      isPublic: true,
      category: null,
      ownerType: "owned"
    }
  },
  methods: {
    applyFilters () {
      const filters = {
        location: this.location,
        isPublic: this.isPublic,
        category: this.category,
        ownerType: this.ownerType,
      }

      this.$store.commit("applyFilters", filters)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/helper";

  .filter-container {
    display:  flex;
  }

  .filters {
    display: flex;
  }

  .location-filter, 
  .public-private-filter, 
  .category-filter,
  .owned-popular-filter {
    display: flex;
    margin-left: var(--space-md);

    & > * {
      flex: 1;
    }
  }

  .apply {
    margin-left: var(--space-lg);
    width: 15rem;
  }

  @media screen and (max-width: 600px) {
    .filter-container {
      width: 100%;
      padding-bottom: var(--space-md);
    }

    .filters {
      width: 100%;
      display: grid;
      grid-row-gap: var(--space-sm);

      & > * {
        margin-left: 0;
      }
    }

    .category-filter {
      width: 100%;
      height: 4rem;
    }

    .filter-mobile {
      position: absolute;
      top: var(--space-sm);
      right: var(--space-md)
    }

    .apply {
      width: 100%;;
    }
  }
</style>