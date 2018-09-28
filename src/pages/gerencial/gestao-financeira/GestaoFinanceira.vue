<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Gestão Financeira</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Gerenciamento de Plano de Contas</li>
          <li>Adicionar/Editar/Desativar Conta-Caixa</li>
          <li>Mapa de Contas</li>
          <li>Relatórios pertinentes</li>
          <ul>
            <li>Fluxo de Caixa</li>
            <li>DRE Resumido</li>
            <li>Contas a RECEBER/PAGAR</li>
            <li>Bolsas e Gratuidade</li>
            <li>Paineis KPI</li>
          </ul>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "GestaoFinanceira",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
