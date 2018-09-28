<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Resultado de Avaliações</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Resultados das avaliações previstas na grade normal</li>
          <li>Consulta individual de resultados</li>
          <li>Resultados por Turma, Período, Unidades, etc.</li>
          <li>Relatórios e Gráficos</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "ResultadoAvaliacao",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
