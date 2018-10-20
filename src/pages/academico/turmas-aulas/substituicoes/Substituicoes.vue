<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="@/assets/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
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
    </v-slide-y-transition>     </v-container>
</template>

<script>

export default {
  name: "Substituicoes",
  data() {
    return {};
  },
  created() {
    //console.log(this.$route)
  }
};
</script>
