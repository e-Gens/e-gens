<template>
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente <strong>Salas e Espaços</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Cadastro de salas e espaços da instituição</li>
          <ul>
            <li>Salas para atividades</li>
            <li>Quadra de esportes</li>
            <li>Auditórios</li>
            <li>etc.</li>
          </ul>
          <li>Reserva dos espaços com agendamento</li>
          <li>Relatórios pertinentes</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "Sala",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
