import Vue from 'vue'
import Vuex from 'vuex'

import {
  TOGGLE_MENU_STATE,
  SET_MENU_CLOSED,
  SET_MENU_OPEN,
} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuIsOpen: false
  },
  mutations: {
    [TOGGLE_MENU_STATE] (state) {
      state.menuIsOpen = !state.menuIsOpen
    },
    [SET_MENU_CLOSED] (state) {
      state.menuIsOpen = false
    },
    [SET_MENU_OPEN] (state) {
      state.menuIsOpen = true
    },
  },
  actions: {
    closeMenu(context) {
      context.commit(SET_MENU_CLOSED);
    },
    openMenu(context) {
      context.commit(SET_MENU_OPEN);
    },
    toggleMenu(context) {
      console.log('toggleMenu...')
      context.commit(TOGGLE_MENU_STATE);
    },
  },
  getters: {
    menuIsOpen: state => state.menuIsOpen,
  },
})
