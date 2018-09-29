<template>
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Recurso</strong> </h3>
        <h2>Grupo de Recursos</h2>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "Recurso",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
