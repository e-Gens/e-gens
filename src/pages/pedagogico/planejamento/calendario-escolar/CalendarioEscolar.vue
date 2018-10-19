<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
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
    </v-slide-y-transition>     </v-container>
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
