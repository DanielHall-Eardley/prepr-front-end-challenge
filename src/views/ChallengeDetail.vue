<template>
  <div class="challenge-detail">
    <Header 
      v-on:switchSubDetailType="subDetailType = $event"
      :title="currentDetail.title"
      :subDetailType="subDetailType">
    </Header>
    <main>
      <keep-alive>
        <component :is="subDetailType"></component>
      </keep-alive>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/challenge-detail/Header"
import Footer from "@/components/challenge-detail/Footer"
import Host from "@/components/challenge-detail/Host"
import Discussion from "@/components/challenge-detail/Discussion"
import Overview from "@/components/challenge-detail/Overview"
import Members from "@/components/challenge-detail/Members"
import Submissions from "@/components/challenge-detail/Submissions"

export default {
  created () {
    this.$store.commit("loadDetail", this.$route.params.id)
  },
  components: {
    Header,
    Footer,
    Host,
    Discussion,
    Overview,
    Members,
    Submissions
  },
  data () {
    return {
      subDetailType: "Overview"
    }
  },
  computed: {
    currentDetail () {
      return this.$store.state.currentDetail
    }
  }
}
</script>

<style lang="scss" scoped>
  .challenge-detail {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
</style>