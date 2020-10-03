<template>
  <div class="columns">

    <div class="column is-full">
      <div class="columns hero-background clip-ellipse">
        
        <div class="column is-full">
          
          <div class="columns">
            <div class="column is-full">
              <TopNav />
            </div>
          </div>

          <div class="columns">
            <div class="column is-full">
              <Hero />
            </div>
          </div>

        </div>

      </div>

    </div>
    
  </div>

</template>

<script lang="javascript">
import TopNav from '@/components/TopNav'

export default {
  name: 'AboutView',
  components: {
    TopNav,
  },
  /*
  metaInfo: {
    title: 'About',
    titleTemplate: '%s | Devo Dude',
    meta: [
      { name: 'description', content: 'Ya'll know what this is ABOUT' },
      { property: 'og:title', content: 'Devo About' },
      { property: 'og:site_name', content: 'DEVO' },
      { property: 'og:description', content: 'Bread for the plebs' }
    ]
  }, */
  mounted () {
    this.$store.dispatch('resetAllForms')
  }
}
</script>

<style lang="scss" scoped>
  @import "./style";
</style>
