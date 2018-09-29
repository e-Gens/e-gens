<template>
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Qualidade e Processos</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Funcionalidades a definir ....</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "QualidadeProcessos",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
