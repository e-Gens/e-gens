<template>  
    <v-container fluid slot="main">
      <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="@/assets/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente Home </h3>
        <small>Base de exemplos</small>
      </v-layout>
    </v-slide-y-transition>
    </v-container>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>
