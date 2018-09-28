<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Ocorrências do Aluno</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Registro de ocorrências disciplinares do aluno</li>
          <li>Hostórico de ocorrências</li>
          <li>Acompanhamento e solução de problemas</li>
          <li>Envio de mensagens aos Pais</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "Ocorrencia",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
