<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="@/assets/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente Diploma </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Expedição de Diplomas intempestivos</li>
          <li>Emissão de Diplomas em massa</li>
          <li>Emissão de demais certificados</li>
          <li>Geração de relatórios</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>     </v-container>
</template>

<script>

export default {
  name: "Diploma",
  data() {
    return {};
  },
  created() {
    //console.log(this.$route)
  }
};
</script>
