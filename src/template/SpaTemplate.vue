<template>
  <v-app>
    <!-- Barra de nevagação esquerda -->
    <v-navigation-drawer 
        persistent
        :mini-variant="miniVariant"
        :clipped="clipped"
        v-model="drawer"
        enable-resize-watcher
        fixed
        app >
        <slot name="menu">
            <!-- Itens do menu lateral esqauerdo -->
        </slot>
    </v-navigation-drawer>

    <!-- Barra Superior -->
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Conteúdo Principal -->
    <v-content>
      <slot name="main">
          <!-- Conteúdo das páginas será carregado aqui -->
      </slot>
    </v-content>

    <!-- Barra de navegação à direita -->
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <!-- Rodapé -->
    <gns-footer>
        <slot name="footer">
        </slot>
    </gns-footer>

  </v-app>
</template>

<script>

import GnsFooter from '@/components/elements/GnsFooter'

export default {
  
  name: 'SpaTemplate',
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'e-Gens'
    }
  },
  components: {
    GnsFooter
  }
}
</script>
