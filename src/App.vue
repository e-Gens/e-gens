<template>
  <router-view>
  </router-view>
</template>

<script>
import AppEvents from  './event';
export default {
  name: 'App',
  created () {
    AppEvents.forEach(item => {
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  },
  methods: {
    openThemeSettings () {
      this.$vuetify.goTo(0);
      this.rightDrawer = (!this.rightDrawer);
    }
  },
}
</script>
