<template>
  <div class="app">
    <TopNav /> 
  </div>
</template>

<script lang="javascript">
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'App',
  components: {
    TopNav,
  },
};
</script>

<style scoped>
    @import './style.scss';
</style>

