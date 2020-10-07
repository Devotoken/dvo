<template>
  <div class="home">  
    <DevoHero /> 
    <Footer />
  </div>
</template>

<script>
import DevoHero from '@/components/DevoHero';
import Footer from '@/components/Footer';

export default {
  name: 'HomeView',
  components: {
    DevoHero,
    Footer
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