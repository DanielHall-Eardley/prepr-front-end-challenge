<template>
  <div class="card" :class="{'card-grid-column': showSummary}">
    <div class="header-container">
      <h4>{{item.title}}</h4>
      <div class="challenge-header" v-if="listType === 'challenges'">
        <span class="highlighted">
          {{item.active ? "Active" : "finished"}}
        </span>
        <span>until </span>
        <span class="highlighted">{{item.date.end}}</span>
        <span> and has </span>
        <span class="highlighted">{{item.memberCount}} members</span>
      </div>
      <div class="lab-header" v-if="listType === 'labs'">
        <span>Last active </span>
        <span class="highlighted">{{item.lastActive}}</span>
        <span>, has </span>
        <span class="highlighted">{{item.memberCount}} members, </span>
        <span> located in </span>
        <span class="highlighted">{{item.location}}</span>
      </div>
      <div class="project-header" v-if="listType === 'projects'">
        <span>Last active </span>
        <span class="highlighted">{{item.lastActive}}</span>
        <span>, has </span>
        <span class="highlighted">{{item.memberCount}} members</span>
      </div>
      <div 
        class="toggle-button align-btn" 
        @click="toggleSummary($event)"
        v-if="item.summary">
        <span v-show="!showSummary">Overview</span>
        <svg v-if="!showSummary">
          <use xlink:href="@/assets/sprite.svg#icon-chevron-thin-right"></use>
        </svg>
        <svg v-else>
          <use xlink:href="@/assets/sprite.svg#icon-chevron-thin-left"></use>
        </svg>
      </div>
      <div class="toggle-button align-btn" v-if="listType === 'projects'">
        <svg>
          <use xlink:href="@/assets/sprite.svg#icon-cross"></use>
        </svg>
      </div>
      <button class="plain-button align-btn" v-if="listType === 'labs'">
        Join
      </button>
    </div>
    <div class="img-container" :class="{'img-grid-column': showSummary}">
      <img :src="item.bannerImg" alt="Banner">
    </div>
    <div class="overview-container" v-if="showSummary">
      <p>{{item.summary}}</p>
      <button @click="navigateToDetails(item.id)">Details</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "showSummary"],
  computed: {
    listType () {
      return this.$store.state.selectedList
    }
  },
  methods: {
    toggleSummary () {
      if (this.showSummary === false) {
        console.log("F")
        this.$el.scrollIntoView({
          block: "start",
          inline: "nearest",
          behavior: "smooth"
        })
      }

      const payload = {
        active: this.showSummary,
        id: this.item.id
      }
      this.$emit("toggleSummary", payload)
    },
    navigateToDetails (itemId) {
      const detailType = this.listType.slice(0, this.listType.length - 1) + "-detail"

      this.$router.push({
        name: detailType,
        params: {
          id: itemId
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/helper";

  .card {
    display: grid;
    grid-template-rows: 26% 74%;
    grid-template-columns: auto auto;
    border: solid .5px var(--green);
    background-color: var(--grey)
  }

  .header-container {
    display: grid;
    grid-template-columns: auto min-content;
    grid-template-rows: auto auto;
    align-items: center;
    justify-content: space-between;
    grid-column: 1 / -1;
    padding: 0 var(--space-sm);
    font-size: var(--font-md);

    .challenge-header, 
    .lab-header,
    .project-header {
      grid-row: 2 / 3;
      grid-column: 1 / -1;
    }

    align-btn {
      align-self: end;
    }
  }

  .img-container {
    grid-column: 1 / 3;
  }

  .overview-container {
    padding: 0 var(--space-md);
    overflow: hidden;
    position: relative;

    p {
      font-size: var(--font-md);
      line-height: 135%;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: column;
      padding-bottom: .4rem;
      position: absolute;
      bottom: 0;
      left: 0; 
      width: 100%;
      height: 6rem;
      font-weight: bolder;
      font-size: var(--font-md);;
      border: none;
      outline: none;
      background-color: transparent;
      background-image: linear-gradient(0deg, var(--grey), 80%, transparent);
    
      &:hover {
      color: var(--blue)
    }
    }
  }
  
  .img-grid-column {
    grid-column: 1 / 2;
  }

  .card-grid-column {
    grid-column: 1 / -1;
  }

  @media screen and (max-width: 600px) {
    .img-grid-column {
      display: none;
    }

    .overview-container {
      grid-column: 1 / -1;
    }
  }

  .highlighted {
    color: var(--light-blue)
  }
</style>