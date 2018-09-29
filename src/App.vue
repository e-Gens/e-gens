<template>
  <gns-spa-template >
    <v-container fluid slot="main">
      <router-view>
      </router-view>
    </v-container>
    <span slot="footer">
      <strong>&copy; 2018 — Desenvolvido por e-Gens</strong>
    </span>
  </gns-spa-template>
</template>

<script>
import AppEvents from "./event";
import GnsSpaTemplate from "@/template/GnsSpaTemplate";

export default {
  name: "App",
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
  components: {
    GnsSpaTemplate
  }
};
</script>
