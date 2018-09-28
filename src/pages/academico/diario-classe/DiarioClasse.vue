<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente Diário de Classe </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Controle e Registro de Notas</li>
          <li>Aulas por turma</li>
          <li>Fechamento de diários</li>
        </ul>
        <p>O lançamento dos dados será feito pelo professor, em sua interface,</p>
        <p> mas também poderá ser encaminhado para a secretaria realizar os lançamentos</p>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "DiarioClasse",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
