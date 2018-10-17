<template>
  <gns-spa-template >
    <v-container fluid slot="main">
      <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente Home </h3>
        <small>Base de exemplos</small>
      </v-layout>
    </v-slide-y-transition>
    </v-container>
    <span slot="footer">
      <span> | Módulo Home</span>
    </span>
  </gns-spa-template>    
</template>

<script>
import AppEvents from "../../event";
import GnsSpaTemplate from "@/template/GnsSpaTemplate";

export default {
  name: "Home",
  data() {
    return {};
  },
  created() {
    AppEvents.forEach(item => { 
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  },
  methods: {
    openThemeSettings() {
      this.$vuetify.goTo(0);
      this.rightDrawer = !this.rightDrawer;
    }
  },
  components:{
    GnsSpaTemplate
  }
};
</script>
