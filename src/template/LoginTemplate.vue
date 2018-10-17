<template>
  <v-app>
    <!-- Barra Superior -->
    <v-toolbar  color="primary lighten-1" dark >
      <v-layout align-center justify-center row fill-height>
        <v-avatar tile>
          <v-img src="/img/logo/logo.png" alt="Logo Cliente" contain></v-img>
        </v-avatar>
        <v-list-tile>
          <v-toolbar-title v-text="client"></v-toolbar-title>              
        </v-list-tile>
        <v-list-tile>
          <v-toolbar-title v-text="usuario.name"></v-toolbar-title>              
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
      client: "Nome do Cliente",
      usuario: false
    };
  },
  components: {
    GnsFooter
  },
  created () {
    console.log('created()')
    let usuarioAux = sessionStorage.getItem('usuario');
    if (usuarioAux) {
      this.usuario = JSON.parse(usuarioAux);
      this.$router.push('/')
    }
  },
  mounted () {
  },
  computed: {},
  methods: {
    sair(){
      sessionStorage.clear();
      this.usuario = false;
    }
  }
};
</script>
