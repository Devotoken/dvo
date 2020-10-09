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
              <br>
             <br>There have been a couple teams of "influencers" behind a few recent coins. While they are not rugs, they are definitely dodgy. They shill their coins to their
             followers without disclosing that they own the coin. For example, their coin MBT (Moonboytoken) is raising 175 eth and 80 of that eth is going in their pockets. That's fucked up. These tokens have 0 utility and are all copy + pastes of eachother... How the hell can you justify taking $30K USD for that?!
             <br>The tokens so far (that I know of): <a id="link" href="https://t.me/moonboytoken" target="_blank">Moonboytoken</a>, <a id="link" href="https://t.me/simpcryptogroup" target="_blank">SIMP</a>,<a id="link" href="https://t.me/simpcryptogroup" target="_blank"> Girlfriend</a> + others I can't be bothered linking: $CRNK, $HMBE, $SAUCE, $IAC2, $NCL. All which either took an unreasonable amount of eth from presale or had a stupid amount of team tokens that sold right away.
            <br>The "influencers" involved (that I know of): <a id="link" href="https://twitter.com/cryptomocho" target="_blank">Cryptomocho</a>, <a id="link" href="https://twitter.com/El_Crypto_Chapo" target="_blank">El Crypto Chapo</a>, <a id="link" href="https://twitter.com/anderoBTC" target="_blank">AnderoBTC</a> -- Do NOT trust these guys.
            <br>Here's a fun pic from my convo with mocho - avatar doesn't appear b/c he blocked me : - (
          <br><img src="@/assets/mochothefucko.png" />

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