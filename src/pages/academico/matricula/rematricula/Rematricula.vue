<template>
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
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
