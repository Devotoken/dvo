<template>
  <div class="columns">

    <div class="column is-full">
      <div class="columns hero-background clip-ellipse">

        <div class="column is-full">

          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-1 title">
                Devo's Certified Picks
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-4 subtitle">
              These are investments/projects/coins that I personally look into, who have either shown a great amount of trust or just a solid project I really like. In Devo fashion, these picks will not be here for personal gain, nor will I accept money to list a project here. That would be gay as fuck like every CT/gem calls/"influencer" out there.
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-full has-text-centered">
              <div class="is-size-5 textual">
               UnityDAO (<a id="link" href="https://unitydao.biz" target="_blank">website</a>) - Two-layer DAO launching a DeFi hedge fund soon where the profits go to the holders.
               <br>Chonker Finance (<a id="link" href="https://chonker.finance" target="_blank">website</a>) - NFT farm with fat cat NFTs. Currently buying on the dip ~$12. 
               <br>No Brainer Finance (<a id="link" href="https://nobrainer.finance" target="_blank">website</a>) - Another NFT farm. They are quickly progressing along with the farm and releasing soon. Expect pumpy when that happens.
               <br>Encore (<a id="link" href="https://evault.finance" target="_blank">website</a>) - Missed Core? Let's hope this follows. I've bought 1 and holding onto it for dear life. FUCK ME AHHHHHHHHHHHHH.
              <br>rPepe (<a id="link" href="https://rarepepe.io" target="_blank">website</a>) - These guys are GOATs, some of the best artwork in crypto. Huge things launching on Monday. Seriously check their shit out.
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