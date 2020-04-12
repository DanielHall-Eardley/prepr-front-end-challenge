<template>
  <section class="submissions">
    <div v-for="submission in submissions" :key="submission.id">
      <span>{{submission.userName}} / </span>
      <span>{{submission.createdAt}}</span>
      <ul>
        <li v-for="file in submission.files" :key="file">{{file}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    submissions () {
      return this.$store.state.currentDetail.submissions
    }
  }
}
</script>

<style lang="scss" scoped>
  .submissions {
    height: 80vh;
    overflow: auto;

    div {
      margin: var(--space-md);
      font-size: var(--font-md); 
      padding: var(--space-sm);
      border-radius: var(--border-rad);
    }

    div:nth-child(even) {
      background-color: var(--light-blue);
    }

    div:nth-child(odd) {
      background-color: var(--pale-blue);
    }

    li {
      margin-left: var(--space-lg)
    }
  }
</style>