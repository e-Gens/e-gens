<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente Docente </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Alocação de professores em cursos e turmas</li>
          <li>Relatórios</li>
          <li>Perfil do Professor</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>     </v-container>
</template>

<script>

export default {
  name: "Docente",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
