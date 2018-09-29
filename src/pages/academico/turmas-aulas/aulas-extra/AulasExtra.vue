<template>
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave >
      <v-layout column align-center>
        <v-layout wrap>
          <img src="/img/logo/logo-h.png" center alt="e-Gens" class="mb-5">
        </v-layout >
        <blockquote>
          &#8220;Protótipo para simples demonstração&#8221;
        </blockquote>
        <h3> Componente Aulas Extra </h3>
        <h2>Funcionalidades esperadas</h2>
        <ul>
          <li>Gerenciamento das aulas adicionais</li>
          <li>Relatórios</li>
          <li>Informações específicas</li>
          <li>Conteúdo ministrado além da grade normal do ensino formal. Esse conteúdo será contabilizado como conteúdo extra, podendo ser uma atividade extra, monitoria, excursão, etc.</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>

export default {
  name: "AulasExtra",
  data() {
    return {};
  },
  created() {
    console.log(this.$route)
  }
};
</script>
