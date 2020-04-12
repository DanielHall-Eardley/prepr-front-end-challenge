<template>
  <section class="overview">
    <div class="general">
      <span>Status:
        <span class="highlighted"> {{currentDetail.active ? "Active" : "Finished"}}</span>
      </span>
      <span>Start:
        <span class="highlighted"> {{currentDetail.date.start}}</span>
      </span>
      <span>End:
        <span class="highlighted"> {{currentDetail.date.end}}</span>
      </span>
      <span>Reward:
        <span class="highlighted"> {{currentDetail.pointsReward}}</span>
      </span>
      <span>Likes:
        <span class="highlighted"> {{currentDetail.likes}}</span>
      </span>
      <span>Members:
        <span class="highlighted"> {{currentDetail.memberCount}}</span>
      </span>
    </div>
    <div class="content">
      <div class="left">
        <div class="img-container">
          <img :src="currentDetail.bannerImg" alt="Banner">
        </div>
        <div class="tags" v-if="currentDetail.tags.length > 0">
          <h3>Tags</h3>
          <span v-for="tag in currentDetail.tags" :key="tag">
            {{tag}}
          </span>
        </div>
        <div class="skills" v-if="currentDetail.skills.length > 0">
          <h3>Skills</h3>
          <span v-for="skill in currentDetail.skills" :key="skill">
            {{skill}}
          </span>
        </div>
        <div class="requirements" v-if="currentDetail.requirements.length > 0">
          <h3>Requirements:</h3>
          <ul>
            <li v-for="requirement in currentDetail.requirements" :key="requirement">
              {{requirement}}
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="text">
          <h3>Summary</h3>
          <p>{{currentDetail.text.summary}}</p>
        </div>
        <div class="text">
          <h3>Problem Statement</h3>
          <p>{{currentDetail.text.problem}}</p>
        </div>
        <div class="text">
          <h3>Desired Outcome</h3>
          <p>{{currentDetail.text.outcome}}</p>
        </div>
        <div class="text">
          <h3>Explantory Notes</h3>
          <p>{{currentDetail.text.explanation}}</p>
        </div>
        <div class="text">
          <h3>Additional Information</h3>
          <p>{{currentDetail.text.background}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    currentDetail () {
      return this.$store.state.currentDetail
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/helper";

  .overview {
    color: var(--text);
    height: 80vh;
    overflow: hidden;
  }

  .img-container {
    height: 25rem;
  }

  .general {
    height: 10vh;
    font-size: var(--font-md);
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--grey);

    span {
      font-weight: 600;
    }
  }

  @media screen and (max-width: 900px) {
    .overview {
      height: 74vh;
      overflow-y: scroll;
    }

    .general {
      height: auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      grid-gap: var(--space-sm);
      padding: var(--space-md);
    }
  }

  @media screen and (max-width: 600px) {
    .overview {
      height: 70vh;
    }
  }

  .content {
    display: flex;
    height: 70vh;
  }

  .left {
    flex: 1;
    padding: var(--space-md);
    border-right: var(--default-border);
    overflow-y: auto;
  }

  .right {
    flex: 1.5;
    padding: var(--space-md);
    overflow-y: auto;
  }

  @media screen and (max-width: 900px) {
    .content {
      display: block;
      height: 100%
    } 

    .left, .right {
      border: var(--default-border);
      margin: var(--space-md);
      
    }  

    .right {
      margin-top: 0;
      width: auto;
    }
  }

  .highlighted {
    color: var(--red)
  }

  .tags {
    margin-top: var(--space-sm);
  }

  .tags, .skills {
    h3 {
      font-size: var(--font-md);
      margin-bottom: .6rem;
    }

    span {
      background-color: var(--grey);
      padding: var(--space-sm);
      border-radius: var(--border-rad);
      font-size: var(--font-sm);
      display: inline-block;
      margin-bottom: .8rem;
      margin-right: .8rem;
    }
  }

  .requirements {
    h3 {
      font-size: var(--font-md);
      margin-bottom: .6rem;
    }

    li {
      font-size: var(--font-sm);
      margin-left: var(--space-lg);
    };
  }

  .text {
    font-size: var(--font-md);
    line-height: 130%;

    h3 {
      margin-bottom: .6rem;
    }

    p {
      margin: 0 var(--space-lg);
      margin-bottom: var(--space-lg);
    }
  }
</style>