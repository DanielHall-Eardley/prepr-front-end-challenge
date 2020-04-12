<template>
  <footer>
    <button class="primary-button">Submit</button>
    <button class="alt-primary-button">Like</button>
    <button class="primary-button">Follow</button>
    <button class="alt-primary-button">Share</button>
  </footer>
</template>

<style lang="scss" scoped>
  @import "@/sass/helper";

  footer {
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--grey);
    padding-left: var(--space-md);

    button {
      margin-right: var(--space-sm);
    }
  }

  @media screen and (max-width: 1100px) {
    footer {
      width: auto;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      button {
        margin-right: var(--space-sm);
      }
    }
  }

  @media screen and (max-width: 600px) {
    footer {
      margin: 0;

      button {
        font-size: 1rem;
      }
    }
  }
</style>