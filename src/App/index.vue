<template>
  <div class="app">
    <TopNav />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="javascript">

/*eslint-disable */
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    TopNav,
    Footer
  },
};
</script>

<style scoped>
    /* @import './style.scss'; */
</style>
