<template>
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Resultado de Avaliações Extra</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Resultado de avaliações fora da grade normal</li>
          <li>Consulta individual de resultados</li>
          <li>Resultados por Turma, Período, Unidades, etc.</li>
          <li>Relatórios e Gráficos</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "ResultadoExtra",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
