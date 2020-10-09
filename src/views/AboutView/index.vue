<template>
  <div class="columns">

    <div class="column is-full">
      <div class="columns hero-background clip-ellipse">

        <div class="column is-full">

          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-1 title">
                About
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-2 textual">
                <a href="https://t.me/devotoken" target="_blank">Come join the community on telegram</a>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6 is-offset-3 has-text-centered">
              <div class="is-size-5 textual">
                 Devo's backstory will soon be told. Stay tuned.
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
  name: 'AboutView',
  components: {
  },
  metaInfo: {
    title: 'About',
    titleTemplate: '%s | Devo Dude',
    meta: [
      { property: 'description', content: 'Bread for the plebs'},
      { property: 'og:title', content: 'About Devo'},
      { property: 'og:site_name', content: 'DEVO'},
      { property: 'og:description', content: 'Bread for the plebs'}
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