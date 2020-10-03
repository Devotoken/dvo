<template>
  <div class="columns">

    <div class="column is-full">
      <div class="columns hero-background clip-ellipse">

        <div class="column is-full">

          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-1 title">
                DevoDAO Things
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
  },
};
</script>

<style lang="scss">
  @import "./style";
</style>
