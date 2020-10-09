<template>
  
  <div class="hero-container background">
    <div class="columns">
      <div class="column is-6 is-offset-3 has-text-centered">
        <img id="hero-image" width="552px" height="74px" class="logo" src="@/assets/coming-soon.png" />
      </div>
    </div>
     <div class="columns logo-shadow">
      <div class="column is-6 is-offset-3 has-text-centered logo-top">
        <img id="hero-image-shadow" width="588px" class="logo-shadow" src="@/assets/coming-soon-shadow.png" />
      </div>
    </div>
  </div>

</template>

<script>

import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
gsap.registerPlugin(ExpoScaleEase, RoughEase, SlowMo);

export default {
  name: 'DevoHero',
  components: {
  },
  data() {
    return {
    };
  },
  mounted() {

    var tl1 = gsap.timeline({repeat: -1, repeatDelay: 0});
    var tl2 = gsap.timeline({repeat: -1, repeatDelay: 0});
    var tl3 = gsap.timeline({repeat: -1, repeatDelay: 2.333});
    var tl4 = gsap.timeline({repeat: -1, repeatDelay: 3.333});

    tl1.to('#hero-image', {
      y: -18,
      duration: 2,
      ease: "power1.inOut" 
    })
    
    tl1.to('#hero-image', {
      y: 0,
      duration: 2,
      ease: "power1.inOut" 
    })

    tl2.to('#hero-image-shadow', {
      width: '790px',
      duration: 2,
      opacity: 0.3,
      y: '5px',
      ease: "power1.inOut" 
    })

    tl2.to('#hero-image-shadow', {
      width: '588px',
      duration: 2,
      opacity: 1,
      y: '0px',
      ease: "power1.inOut" 
    }) 

    tl3.to('#hero-image', {
      x: 10,
      duration: 0.01,
      ease: RoughEase.ease.config({strength:18, points:50})
    })

    // skew glitch
    tl4.to('#hero-image', {
      skewY: 20,
      duration: 0.01,
    })
   tl4.to('#hero-image', {
      skewY: 0,
      duration: 0.01,
    })
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
  @import './style';
  @import url('https://fonts.googleapis.com/css2?family=Yantramanav&display=swap'); 
</style>
