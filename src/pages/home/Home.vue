<template>
    <spa-template >


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
    <strong>&copy; 2018 — Desenvolvido por e-Gens</strong>
  </span>

  </spa-template>
</template>

<script>
import SpaTemplate from "@/template/SpaTemplate";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    SpaTemplate
  }
};
</script>
