<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Aulas</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Gerenciamento das aulas</li>
          <li>Acompanhamento de aulas</li>
          <li>Relatórios</li>
          <li>Informações específicas</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "Aulas",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
