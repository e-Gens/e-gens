<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Desempenho por Professor</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Avaliação geral dos professores</li>
          <li>Perfil do profissional</li>
          <li>Desempenho por Turma, Período, Unidades, etc.</li>
          <li>Relatórios e Gráficos</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "DesempenhoProfessor",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
