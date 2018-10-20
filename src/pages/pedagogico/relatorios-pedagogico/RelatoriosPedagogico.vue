<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="@/assets/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Relatorios do Grupo Pedagogico</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Relatórios oficiais a serem gerados pela escola</li>
          <li>Por exemplo: Ata de Resultados</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>     </v-container>
</template>

<script>

export default {
  name: "RelatoriosPedagogico",
  data() {
    return {};
  },
  created() {
    //console.log(this.$route)
  }
};
</script>
