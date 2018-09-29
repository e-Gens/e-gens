<template>
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente <strong>Boleto</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Emissão de Boleto</li>
          <li>Edição de Boleto</li>
          <li>Cancelamento de Boleto</li>
          <li>Emissão de 2ª via de Boleto</li>
          <li>Prorrogação de boletos</li>
          <li>Abatimento de Boleto</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "Boleto",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
