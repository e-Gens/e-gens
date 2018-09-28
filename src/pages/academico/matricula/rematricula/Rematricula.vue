<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente Rematrícula </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Rematrícula de turma em massa</li>
          <li>Rematrícula individual</li>
          <li>Troca automática de ano, a partir de dados de aprovação</li>
          <li>Relatórios de movimentação de alunos</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "Rematricula",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
