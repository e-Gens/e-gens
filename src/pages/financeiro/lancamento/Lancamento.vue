<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="@/assets/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Lancamentos</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Lançamentos de Receitas e Despesas</li>
          <li>Entrada de NF</li>
          <li>Relatórios pertinentes</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>     </v-container>
</template>

<script>

export default {
  name: "Lancamento",
  data() {
    return {};
  },
  created() {
    //console.log(this.$route)
  }
};
</script>
