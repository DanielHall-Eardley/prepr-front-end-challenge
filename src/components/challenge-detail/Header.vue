<template>
  <header>
    <h1><span>Challenge</span> {{title}}</h1>
    <div>
      <button 
        class="switch-button"
        :class="{'switch-btn-focused': subDetailType === 'Overview'}"
        @click="switchSubDetailType($event)">
        Overview
      </button>
      <button 
        class="switch-button"
        :class="{'switch-btn-focused': subDetailType === 'Members'}"
        @click="switchSubDetailType($event)">
        Members
      </button>
      <button 
        class="switch-button"
        :class="{'switch-btn-focused': subDetailType === 'Discussion'}"
        @click="switchSubDetailType($event)">
        Discussion
      </button>
      <button 
        class="switch-button"
        :class="{'switch-btn-focused': subDetailType === 'Submissions'}"
        @click="switchSubDetailType($event)">
        Submissions
      </button>
      <button 
        class="switch-button"
        :class="{'switch-btn-focused': subDetailType === 'Host'}"
        @click="switchSubDetailType($event)">
        Host
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: ["subDetailType", "title"],
  methods: {
    switchSubDetailType (e) {
      this.$emit("switchSubDetailType", e.target.innerText)
    }
  }
}
</script>

<style lang="scss" scoped>
   @import "@/sass/helper";

  header {
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 0 var(--space-md);
    background-color: var(--grey);

    h1 {
      margin-right: auto;
      font-size: var(--font-lg);

      span {
        color: var(--blue);
        text-transform: uppercase;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    header {
      flex-direction: column;
      height: auto;
      align-items: flex-start;
      padding: var(--space-md);
  
      h1 {
        margin-bottom: var(--space-sm);
      }
    }
  } 

  @media screen and (max-width: 600px) {
    header div {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
      grid-gap: var(--space-sm);
    }
  } 
</style>