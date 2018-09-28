<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
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
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "Matricula",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
