<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="@/assets/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Resultados Finais</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Fechamento de períodos, semestres ou turmas</li>
          <li>Liberação para emissão de Boletins</li>
          <li>Resultados por Turma, Período, Unidades, etc.</li>
          <li>Relatórios e Gráficos</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>     </v-container>
</template>

<script>

export default {
  name: "ResultadoFinal",
  data() {
    return {};
  },
  created() {
    //console.log(this.$route)
  }
};
</script>
