<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente Calendario Escolar </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Distribuição dos dias letivos</li>
          <li>Estipulação do início e fim de ano letivo e período</li>
          <li>Gestao de feriados e datas especiais</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "CalendarioEscolar",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
