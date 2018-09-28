<template>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container-fluid>
          <img src="@/assets/logo/logo-h.png" alt="Vuetify.js" class="mb-5">
        </v-container-fluid>
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente: <strong>Aluno</strong> </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Gerenciamento dos dados dos alunos</li>
          <li>Dados preenchidos na matrícula, porém alteração será nesse tópico</li>
          <li>Informações gerais sobre o aluno e suas relações na escola (irmãos, bolsas, etc)</li>
          <li>Geração da ficha do aluno</li>
          <li>Emissão de documentos pertinentes ao aluno</li>
          <li>Relatórios</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "Aluno",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
