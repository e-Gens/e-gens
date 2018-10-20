<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="@/assets/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente Matricula </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Gerenciamento de matrícula</li>
          <li>A matrícula também poderá ser preenchida via api em site externo pelo aluno ou responsável</li>
          <li>A secretaria poderá confirmar a matrícula</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>     </v-container>
</template>

<script>

export default {
  name: "Matricula",
  data() {
    return {};
  },
  created() {
    //console.log(this.$route)
  }
};
</script>
