<template>
  <div class="columns">

    <div class="column is-full">
      <div class="columns hero-background clip-ellipse">

        <div class="column is-full">

          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-1 title">
                Rug Radar
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-4 top-text">
               Devo and his team of experts are constantly on the lookout for rugs/scams to protect innocent degens. This list will be actively updated with known & potential scams so that you can avoid them and save your money.
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-5 textual">
              Shillable.finance - Maybe not a rug but a copy of unfuddable (UNFUD) where the team just dumped their tokens on everybody (42eth worth)
             <br>More coming soon!!!!!!!!!!!!!!!!!!
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
    this.$store.dispatch('closeMenu')
  },
};
</script>

<style lang="scss">
  @import "./style";
</style>