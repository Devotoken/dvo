<template>
  <div class="columns">

    <div class="column is-full">
      <div class="columns hero-background clip-ellipse">

        <div class="column is-full">

          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-1 title">
                DevoPicks Rug Radar Things
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
  name: 'RugRadarView',
  components: {
  },
  metaInfo: {
    title: 'Rug Radar',
    titleTemplate: '%s | Devo Rug Radar',
    meta: [
      { name: 'description', content: 'Bread for the plebs and RADAR' },
      { property: 'og:title', content: 'Devo RADAR' },
      { property: 'og:site_name', content: 'RADAR' },
      { property: 'og:description', content: 'Bread for the plebs and RADAR' }
    ]
  },
  mounted() {
  },
};
</script>

<style lang="scss">
  @import "./style";
</style>
