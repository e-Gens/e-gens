<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Avaliacao</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Criação e alocação de avaliações nas disciplinas</li>
          <li>Distribuição dos pontos no período</li>
          <li>Inclui trabalhos e afins</li>
          <li>Relatórios</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "Avaliacao",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
