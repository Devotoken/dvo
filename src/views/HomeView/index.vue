<template>
  <div class="home red">  
    <DevoHero /> 
  </div>
</template>

<script>
import DevoHero from '@/components/DevoHero';

export default {
  name: 'HomeView',
  components: {
    DevoHero,
  },
  metaInfo: {
    title: 'About',
    titleTemplate: '%s | Devo ',
    meta: [
      { name: 'description', content: 'Descriptive text u know...' },
      { property: 'og:title', content: 'Devo DAO' },
      { property: 'og:site_name', content: 'DEVO' },
      { property: 'og:description', content: 'Bread for the plebs and DAOs' }
    ]
  }, 
};
</script>
