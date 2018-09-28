<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente Substituições </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Gerenciamento de alterações em agendamento de aulas</li>
          <li>Registro e acompanhamento de substituições</li>
          <li>Agenda com informações sobre substituições</li>
          <li>Relatórios de aulas ministradas</li>
          <li>Relatórios de substituições e saldo de horas</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "Substituições",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
