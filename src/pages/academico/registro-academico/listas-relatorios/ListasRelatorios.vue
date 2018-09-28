<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente ListasRelatorios </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Geração de lista de presença</li>
          <li>Geração de listas de participação em eventos</li>
          <li>Elaboração de lista a partir de evento agendado pelo professor</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "ListasRelatorios",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
