<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Gestão Estratégica</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Premissas Gerais</li>
          <li>Análise SWOT</li>
          <li>Metas</li>
          <li>Plano de ação</li>
          <li>Resultados Consolidados</li>
          <li>Gráficos e Relatórios</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "GestaoEstrategica",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
