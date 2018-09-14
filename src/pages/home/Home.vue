<template>
  <spa-template>

    <v-list slot="menu">
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>


    <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
  
  <span slot="footer">
    <span>&copy; e-Gens 2018</span>
  </span>

  </spa-template>
</template>

<script>

import SpaTemplate from '@/template/SpaTemplate'

export default {
  
  name: 'Home',
  data () {
    return {
      items: [{
        icon: 'dashboard',
        title: 'Dashboard'
      },
      {
        icon: 'menu',
        title: 'Admin'
      }],
    }
  },
  components: {
    SpaTemplate
  }
}
</script>
