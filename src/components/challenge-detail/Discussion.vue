<template>
  <section class="discussion">
    <div class="discussion-list">
      <ul>
        <Comment 
          v-for="comment in currentDetail.discussion" 
          :key="comment.id"
          :item="comment"
          v-on:enableReply="enableReply($event)">
        </Comment>
      </ul>
    </div>
    <form action="" class="input-container" >
      <input
        :class="{'remove-margin': commentId}" 
        type="text" 
        v-model="input" 
        :placeholder="replyTo ? 'Replying to ' + replyTo + ':': null">
      <button 
        v-if="commentId"
        class="alt-primary-button stop-reply" 
        @click.prevent="stopReplying"
        type="button">
        Stop Replying
      </button>
      <button class="primary-button" @click.prevent="addCommentOrReply">
        Post
      </button>
    </form>
  </section>
</template>

<script>
import Comment from "./Comment"

export default {
  components: {
    Comment
  },
  data () {
    return {
      replyTo: false,
      commentId: null,
      input: ""
    }
  },
  computed: {
    currentDetail () {
      return this.$store.state.currentDetail
    }
  },
  methods: {
    addCommentOrReply () {
      this.$store.commit("addCommentOrReply", {
        challengeId: this.currentDetail.id,
        commentId: this.commentId,
        text: this.input,
      })

      this.input = ""
    },
    enableReply (payload) {
      this.replyTo = payload.name
      this.commentId = payload.id
    },
    stopReplying () {
      this.replyTo = false
      this.commentId = null
    } 
  },
}
</script>

<style lang="scss" scoped>
  @import "@/sass/helper";

  .discussion {
    height: 80vh;
    overflow: hidden;
    padding: var(--space-md);
  }

  .discussion-list {
    height: 100%;
    padding-bottom: 5rem;
    overflow: auto;
  }

  .input-container {
    display: flex;
    align-items: stretch;
    padding: var(--space-md);
    padding-bottom: 0;
    position: absolute;
    bottom: 10vh;
    left: 0;
    right: 0; 
    background-color: var(--grey);

    input {
      height: 5rem;
      flex: 1;
      margin-right: var(--space-sm);
      border-radius: 1rem;
      border: var(--default-border);
      outline: none;
      padding-left: var(--space-sm);

      &:focus {
        border-color: var(--blue);
      }
    }

    button {
      width: 8rem;
      padding: 0;
      height: 5rem;
    }

    .stop-reply {
      width: 15rem;
      margin-right: var(--space-sm);
    }
  }

  @media screen and (max-width: 600px) {
    .discussion-list {
      padding-bottom: 22rem;
    }

    .input-container {
      flex-wrap: wrap;
    
      input {
        flex: 1 1 100%;
        margin-bottom: var(--space-sm);
        margin-right: 0;
      }

      button {
        flex: auto;
      }
    }

    .remove-margin {
      margin-right: 0 !important;
    }
  }
</style>