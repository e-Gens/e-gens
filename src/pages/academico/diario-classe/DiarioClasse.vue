<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="@/assets/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
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
    </v-slide-y-transition>     </v-container>
</template>

<script>

export default {
  name: "DiarioClasse",
  data() {
    return {};
  },
  created() {
    //console.log(this.$route)
  }
};
</script>
