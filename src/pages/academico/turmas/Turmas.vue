<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente Turmas </h3>
        <small>Base de exemplos</small>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "Turmas",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
