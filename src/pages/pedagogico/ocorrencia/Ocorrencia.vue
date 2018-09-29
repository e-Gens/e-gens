<template>
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
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
