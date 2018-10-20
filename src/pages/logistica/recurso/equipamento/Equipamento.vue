<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="@/assets/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Equipamento</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Cadastro de equipamentos da instituição</li>
          <ul>
            <li>Caixas de som</li>
            <li>Projetores</li>
            <li>Equipamentos diversos, etc</li>
          </ul>
          <li>Reserva dos recursos com agendamento</li>
          <li>Relatórios pertinentes</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>     </v-container>
</template>

<script>

export default {
  name: "Equipamento",
  data() {
    return {};
  },
  created() {
    //console.log(this.$route)
  }
};
</script>
