<template>
  <div class="app">
    <TopNav />
    <router-view />
  </div>
</template>

<script lang="javascript">

/*eslint-disable */
import TopNav from '@/components/TopNav';

export default {
  name: 'App',
  components: {
    TopNav,
  },
};
</script>

<style scoped>
    /* @import './style.scss'; */
</style>
