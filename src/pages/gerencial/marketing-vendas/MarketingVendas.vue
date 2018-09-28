<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Marketing e Vendas</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Produtos e/ou Serviços</li>
          <li>Análise de Mercado</li>
          <li>Plano de Marketing</li>
          <ul>
            <li>Produto/serviço</li>
            <li>Praça</li>
            <li>Preço</li>
            <li>Promoção</li>
            <li>Projeção de Vendas</li>
            <li>Resultados Consolidados</li>
            <li>Gráficos e Relatórios</li>
          </ul>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "MarketingVendas",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
