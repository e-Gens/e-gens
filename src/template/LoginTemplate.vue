<template>
  <v-app>
    <!-- Barra Superior -->
    <v-toolbar dense  color="primary lighten-1" dark >
      <v-layout align-center justify-space-between row fill-height>
        <v-toolbar-side-icon>
          <v-img src="/img/logo/logo-light.png" alt="Logo e-Gens" contain></v-img>
        </v-toolbar-side-icon>
        <v-list-tile>
          <v-toolbar-title v-text="title"></v-toolbar-title>              
        </v-list-tile>
        <v-spacer></v-spacer>
        <v-list-tile>
          <v-toolbar-subtitle v-text="client"></v-toolbar-subtitle>              
        </v-list-tile>
      
      </v-layout>
      
    </v-toolbar>
    <!-- Conteúdo Principal -->
    <v-content>
      <slot name="main">
          <!-- Conteúdo das páginas será carregado aqui -->
      </slot>
    </v-content>
   
    <!-- Rodapé -->
    <gns-footer>
    </gns-footer>

  </v-app>
</template>

<script>
import GnsFooter from "@/components/elements/GnsFooter";

export default {
  name: "LoginTemplate",
  data() {
    return {
      title: "e-Gens",
      client: "Nome do Cliente"
    };
  },
  components: {
    GnsFooter
  },
  created () {
  },
  mounted () {
  },
  computed: {},
  methods: {}
};
</script>
