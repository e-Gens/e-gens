<template>     <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
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
    </v-slide-y-transition>     </v-container>
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
