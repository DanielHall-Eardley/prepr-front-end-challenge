<template>
  <section class="host">
    <h1>This Challenge is hosted by 
      <span> {{currentDetail.host.title}}</span>
    </h1>
    <p class="host-background">{{currentDetail.host.background}}</p>
    <div class="sponsers">
      <ul>
        <li v-for="sponser in currentDetail.sponsers" :key="sponser.id">
          <img :src="sponser.img" alt="Image">
          <label for="">{{sponser.name}}</label>
        </li>
      </ul>
    </div>
    <div class="labs">
      <ul>
        <li v-for="lab in currentDetail.labs" :key="lab.id">
          <img :src="lab.img" alt="Image">
          <div class="content">
            <h3>{{lab.title}}</h3>
            <p class="overview">{{lab.overview}}</p>
            <p>Members: {{lab.memberCount}}</p>
            <p>Last active: {{lab.lastActive}}</p>
            <p>Location: {{lab.location}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    currentDetail () {
      return this.$store.state.currentDetail
    }
  }
}
</script>

<style lang="scss" scoped>
  .host {
    height: 80vh;
    padding: var(--space-md);
    display: grid;
    grid-template-columns: 1fr 35rem;
    grid-template-rows: min-content 1fr 17rem;
    overflow: hidden;

    h1 {
      font-size: var(--font-lg);
      grid-column: 1 / -1;
    }

    span {
      color: var(--blue);
    }
  }

  .host-background {
      font-size: var(--space-md);
      height: 100%;
      overflow-y: auto;
      padding-bottom: var(--space-md);
    }

  .sponsers {
    height: 100%;
    width: 100%;
    grid-column: 2 / 3;
    overflow-y: auto;
    padding-bottom: var(--space-md);

    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: var(--space-md);
    }

    img {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
    }

    label {
      display: block;
      margin-top: var(--space-sm);
      font-size: var(--font-sm);
    }
  }

  .labs {
    width: 100%;
    grid-column: 1 / -1;
    overflow-x: auto;
    padding-top: var(--space-md);
    border-top: solid 1px var(--grey);

    ul {
      display: flex;
      width: 100%;
    }

    img {
      height: 10rem;
      margin-right: var(--space-md);
    }

    li {
      height: 100%;
      flex: 0 0 45rem;
      display: flex;
      overflow: hidden;

      &:not(:first-child) {
        padding-left: var(--space-md);
      }
    }
  }

  .content {
    font-size: var(--font-sm);
  }

  .overview {
    margin: .5rem 0;
  }

  @media screen and (max-width: 1100px) {
    .host {
        height: 71vh;
      }
    }

  @media screen and (max-width: 900px) {
    .host {
      display: block;
      overflow-y: auto;
      grid-template-rows: min-content min-content min-content;
    }

    .host-background {
      height: auto;
    }

    .labs {
      height: auto;

      ul {
        display: block;
      }

      li {
        padding-left: 0 !important;
        margin-bottom: var(--space-md);
      }
    }

    .sponsers {
      margin: var(--space-sm);
      height: auto;

      ul {
        display: flex;
        flex-wrap: wrap;
      }

      li {
        margin-right: var(--space-lg);
      }
    }
  }
</style>