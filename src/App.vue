<template>
  <router-view></router-view>
</template>

<script>
import GnsSpaTemplate from "@/template/GnsSpaTemplate";

export default {
  name: "App",
  components: {
    GnsSpaTemplate
  },
};
</script>

<style>
  html{
    overflow: hidden
  }
</style>
