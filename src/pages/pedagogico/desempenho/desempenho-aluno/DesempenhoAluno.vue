<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Desempenho de Alunos</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Gráficos com análises de desempenho de alunos</li>
          <li>Consulta individual de desempenho</li>
          <li>Análises de desempenho específicas a serem implementadas</li>
          <ul>
            <li>Em relação à turma</li>
            <li>Em relação a outras turmas</li>
            <li>Em relação a outras escolas</li>
          </ul>
        </ul>
      </v-layout>
    </v-slide-y-transition>     </v-container>
</template>

<script>

export default {
  name: "DesempenhoAluno",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
