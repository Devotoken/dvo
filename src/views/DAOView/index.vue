<template>
  <div class="columns">

    <div class="column is-full">
      <div class="columns hero-background clip-ellipse">

        <div class="column is-full">

          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-1 title">
                devoDAO
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-full top-text">
              <div class="is-size-4 top-text">
A private sanctuary for Devo investors. Picture yourself walking down an alleyway, suddenly stumbling through an unmarked door into a dimly lit room with a single poker table in the middle and a bar at the back. Through the thick fog of cigar smoke you find a handful of old wealthy men, their worn faces illuminated by the faint glow of an old TV. Broken English fills the room, spoken through thick accents you don't recognise as they pass faded green money to one another and laugh about it. That's devoDAO.</div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-5 bottom-text">
              devoDAO is available for chads holding 60 DEVO2
              <br>If you hold 60 (or more) DEVO2, you will be invited to join a private telegram
              <br>The contents of the DAO cannot be shared, you'll just have to see for yourself
              <br>Private DAO games, whitelist spots for Devo's coins, OTC deals and early calls just to give you a taste
              </div>
            </div>
          </div>
      <div class="columns">
        <div class="column is-full has-text-centered">
          <div class="is-size-1 textual">
          <a href="#">ENTER THE DAO - COMING SOON</a>
         </div>
        </div>
       </div>
    </div>
    </div>

    </div>

  </div>

</template>

<script lang="javascript">
export default {
  name: 'DAOView',
  components: {
  },
  metaInfo: {
    title: 'About',
    titleTemplate: '%s | Devo DAO',
    meta: [
      { name: 'description', content: 'Bread for the plebs and DAOs' },
      { property: 'og:title', content: 'Devo DAO' },
      { property: 'og:site_name', content: 'DEVO' },
      { property: 'og:description', content: 'Bread for the plebs and DAOs' }
    ]
  },
  mounted() {
    this.$store.dispatch('closeMenu');
  },
};
</script>

<style lang="scss">
  @import "./style";
</style>