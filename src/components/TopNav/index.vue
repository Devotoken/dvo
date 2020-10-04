<template>
  <nav class="navbar navbar-inverse navbar-fixed-top role=navigation is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <router-link class="navbar-item" to="/">
          <img class="logo-img" src="@/assets/devo-logo.png" alt="Devo logo">
        </router-link>
      </div>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
      <div class="navbar-start"></div>
      <div class="navbar-end has-text-left">
        <div class="navbar-item"><router-link class="navbar-item has-text-white" to="/">home</router-link></div>
        <div class="navbar-item"><router-link class="navbar-item has-text-white" to="/dao">devoDAO</router-link></div>
        <div class="navbar-item"><router-link class="navbar-item has-text-white" to="/picks">Devo's Certified Picks&trade;</router-link></div>
        <div class="navbar-item"><router-link class="navbar-item has-text-white" to="/rug-radar">Rug Radar&trade;</router-link></div>
        <div class="navbar-item"><router-link class="navbar-item has-text-white" to="/about">about</router-link></div>
      </div>
    </div>

  </nav>

</template>

<script>
export default {
  name: 'TopNav',
  components: {
  },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    // doLogout: function () {
    //   this.$store.commit('REMOVE_SESSION_TOKEN')
    //   this.$router.push({ path: '/' })
    // }
  },
};
</script>

<style scoped lang="scss">
  @import './style';
</style>
