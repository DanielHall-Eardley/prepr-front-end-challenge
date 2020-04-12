<template>
  <li :class="{'is-reply': isReply}">
    <div class="img-container">
      <img :src="item.img" alt="Avatar">
    </div>
    <div class="comment-header">
      <span>{{item.userName}}<b> / </b></span>
      <span>{{item.createdAt}}</span>
    </div>
    <svg v-if="!isReply" @click="deleteComment(item.id)" class="cross">
      <use xlink:href="@/assets/sprite.svg#icon-cross"></use>
    </svg>
    <p class="content">{{item.content}}</p>
    <div class="reply-button" v-if="!isReply">
      <button class="plain-button" @click="enableReply(item.id, item.userName)">
        Reply
      </button>
      <span v-if="!showReplies && item.replies.length > 0" class="view-replies">
        View Replies
      </span>
      <svg v-if="showReplies" @click="showReplies = ! showReplies">
        <use xlink:href="@/assets/sprite.svg#icon-chevron-thin-up"></use>
      </svg>
      <svg 
        v-else-if="!showReplies && item.replies.length > 0" 
        @click="showReplies = ! showReplies">
        <use xlink:href="@/assets/sprite.svg#icon-chevron-thin-down"></use>
      </svg>
    </div>
    <template v-if="showReplies">
      <Comment 
        v-for="reply in item.replies" 
        :key="reply.id"
        :item="reply"
        :isReply="true">
      </Comment>
    </template>
  </li>
</template>

<script>
export default {
  name: "Comment",
  props: ["item", "isReply"],
  data () {
    return {
      showReplies: false,
    }
  },
  methods: {
    deleteComment (id) {
      this.$store.commit("deleteComment", id)
    },
    enableReply (id, name) {
      this.showReplies = true
      this.$emit("enableReply", {
        id,
        name
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/helper";

  li {
    display: grid;
    grid-template-columns: min-content 1fr max-content;
    grid-template-rows: min-content 1fr;
    grid-gap: var(--space-sm);
    align-items: center;
    border: var(--default-border);
    border-radius: var(--border-rad);
    margin-bottom: var(--space-sm);
    padding: var(--space-sm);
    color: var(--text);
    overflow: hidden;

    svg {
      height: 2.6rem;
      width: 2.6rem;
      fill: var(--text);
      margin-left: var(--space-md);

      &:hover {
        fill: var(--light-blue);
      }
    }

    img {
      border-radius: 50%;
    }
  }

  .is-reply {
    grid-column: 1 / -1;
    margin-left: var(--space-lg);
    border: none;
    background-color: var(--grey);
    grid-row-gap: .5rem;

    .content {
      grid-row: 2 / 3;
    }

    .img-container {
      height: 5rem;
      width: 5rem;
      grid-row: 1/ -1;
    }
  }

  .img-container {
    height: 8rem;
    width: 8rem;
    grid-row: 1/ -1;
  }

  .comment-header {
    font-size: var(--font-md);
  }

  @media screen and (max-width: 600px) {
    li {
      grid-template-columns: max-content 1fr min-content;
    }

    .view-replies {
      display: none;
    }
  }

  .reply-button {
    display: flex;
    
    span {
      margin-left: var(--space-md);
      font-size: var(--font-md);
    }
  }

  .content {
    align-self: start;
    font-size: var(--font-sm);
  }

  .cross {
    justify-self: end;
  }
</style>