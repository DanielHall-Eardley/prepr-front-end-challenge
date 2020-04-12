<template>
  <section class="members">
    <div class="members-list" >
      <div v-for="member in members" :key="member.id" class="member">
        <img :src="member.img" alt="Avatar">
        <label for="">
          <span>{{member.type === 'admin' ? member.type : null}}</span>
          {{member.name}}
          </label>
      </div>
    </div>
    <button class="primary-button">Join</button>
  </section>
</template>

<script>
export default {
  computed: {
    members () {
      return this.$store.state.currentDetail.members
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/helper";

  .members {
    height: 80vh;
    position: relative;

    button {
      position: absolute;
      top: var(--space-sm);
      right: var(--space-sm);
    }
  }

  .members-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-auto-rows: 24rem;
    font-size: var(--font-md);
    grid-row-gap: var(--space-sm);
    justify-items: center;
    align-items: end;
    margin: 0 var(--space-lg);

    label {
      margin-top: var(--space-sm);
      display: inline-block;
      width: 100%;
      text-align: center;
    }

    span {
      color: var(--blue);
    }

    img {
      width: 18rem;
      border-radius: 50%;
    }
  }
</style>