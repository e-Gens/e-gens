<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente Aulas Extra </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Gerenciamento das aulas adicionais</li>
          <li>Relatórios</li>
          <li>Informações específicas</li>
          <li>Conteúdo ministrado além da grade normal do ensino formal. Esse conteúdo será contabilizado como conteúdo extra, podendo ser uma atividade extra, monitoria, excursão, etc.</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "AulasExtra",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
