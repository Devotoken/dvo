<template>
  <div class="columns">

    <div class="column is-full">
      <div class="columns hero-background clip-ellipse">

        <div class="column is-full">

          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-1 title">
                DevoPicks Things
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6 is-offset-3 has-text-centered">
              <div class="is-size-3 subtitle">
                 And then some other things... 
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6 is-offset-3 has-text-centered">
              <div class="is-size-5 textual">
                 And finally...And finally...And finally...And finally...And finally...And finally...And finally...And finally...And finally...And finally...And finally...And finally...And finally...And finally...And finally... (see views/ThisComponent/_style.scss)
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
  name: 'PicksView',
  components: {
  },
  metaInfo: {
    title: 'Picks',
    titleTemplate: '%s | Devo Picks',
    meta: [
      { name: 'description', content: 'Bread for the plebs and picks' },
      { property: 'og:title', content: 'Devo picks' },
      { property: 'og:site_name', content: 'PICKS' },
      { property: 'og:description', content: 'Bread for the plebs and picks' }
    ]
  },
  mounted() {
  },
};
</script>

<style lang="scss">
  @import "./style";
</style>
