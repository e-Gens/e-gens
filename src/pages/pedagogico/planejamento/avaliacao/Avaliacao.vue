<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="@/assets/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
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
    </v-slide-y-transition>     </v-container>
</template>

<script>

export default {
  name: "Avaliacao",
  data() {
    return {};
  },
  created() {
    //console.log(this.$route)
  }
};
</script>
