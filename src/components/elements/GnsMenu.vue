<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant="mini"
    fixed
    :dark="$vuetify.dark"
    :clipped="clipped"
    app
    v-model="drawer"
    width="270"
    >
    <v-toolbar dense  color="primary lighten-1" dark >
      <v-toolbar-side-icon @click="$emit('update:mini',mini = !mini)">
      </v-toolbar-side-icon>
      <v-list-tile v-if="!mini">
        <v-toolbar-side-icon @click.stop="$emit('update:drawer',drawer = !drawer)">
          <v-img :src="logoGens" alt="Logo e-Gens" contain></v-img>
        </v-toolbar-side-icon>
        <v-list-tile>
          <v-toolbar-title v-text="title"></v-toolbar-title>                 
        </v-list-tile>
      </v-list-tile>
    </v-toolbar>

    <v-toolbar>
      <v-toolbar-side-icon to="/app">
        <v-img :src="logoCliente" alt="Logo Cliente" contain></v-img>
      </v-toolbar-side-icon>
      <v-list-tile v-if="!mini" to="/app">
        <v-toolbar-title v-text="client"></v-toolbar-title>                   
      </v-list-tile>
    </v-toolbar>

<!-- Fim da seção de cabeçalhos -->

    <vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">
      <v-list dense expand>
        <template v-for="(item, i) in menus">
            <!--group with subitems-->
            <v-list-group v-if="item.items" :key="item.name" :group="item.group" :prepend-icon="item.icon" no-action="no-action">
              <v-list-tile slot="activator" ripple="ripple" >
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <template v-for="(subItem, i) in item.items">
                <!--sub group-->
                <v-list-group  v-if="subItem.items" :key="subItem.name" :prepend-icon="subItem.icon" :group="subItem.group" sub-group="sub-group">
                  <v-list-tile slot="activator" ripple="ripple">
                    <v-list-tile-content>
                     <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile v-for="(grand, i) in subItem.children" :key="i" :to="genChildTarget(item, grand)" :href="grand.href" ripple="ripple">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ grand.title }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list-group>
                <!--child item-->
                <v-list-tile v-else :key="i" :to="genChildTarget(item, subItem)" :href="subItem.href" :disabled="subItem.disabled" :target="subItem.target" ripple="ripple">
                  <v-list-tile-content>
                    <v-list-tile-title><span>{{ subItem.title }}</span></v-list-tile-title>
                  </v-list-tile-content>
                  <!-- <v-circle class="white--text pa-0 circle-pill" v-if="subItem.badge" color="red" disabled="disabled">{{ subItem.badge }}</v-circle> -->
                  <v-list-tile-action v-if="subItem.action">
                    <v-icon :class="[subItem.actionClass || 'success--text']">{{ subItem.action }}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </template>
            </v-list-group>
            <v-subheader v-else-if="item.header" :key="i">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :key="i"></v-divider>
            <!--top-level link-->
            <v-list-tile v-else :to="gentTarget(item)" :name="item.name" ripple="ripple" :target="item.target" :key="item.name">
              <v-list-tile-action v-if="item.icon">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <!-- <v-circle class="white--text pa-0 chip--x-small" v-if="item.badge" :color="item.color || 'primary'" disabled="disabled">{{ item.badge }}</v-circle> -->
              <v-list-tile-action v-if="item.subAction">
                <v-icon class="success--text">{{ item.subAction }}</v-icon>
              </v-list-tile-action>
              <!-- <v-circle class="caption blue lighten-2 white--text mx-0" v-else-if="item.chip" label="label" small="small">{{ item.chip }}</v-circle> -->
            </v-list-tile>
        </template>
      </v-list>
      <v-spacer></v-spacer> 
    </vue-perfect-scrollbar>        
  </v-navigation-drawer>
</template>
<script>
import menu from '@/api/menu';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

export default {
  name: 'GnsMenu',
  components: {
    VuePerfectScrollbar,
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    mini: false,
    drawer: true,
    clipped: false,
    logoCliente: require('@/assets/img/logo/logo.png'),
    logoGens: require('@/assets/img/logo/logo-light.png'),

    menus: menu,
    scrollSettings: {
      maxScrollbarLength: 160
    },
    title: "e-Gens",
    client: "Nome do Cliente"
  }),
  computed: {
    computeGroupActive () {
      return true;
    },
  },
  created () {
    window.getApp.$on('APP_DRAWER_TOGGLED', () => {
      this.drawer = (!this.drawer);
      this.clipped = false
      this.mini = false
    });
  },

  methods: {
    genChildTarget (item, subItem) {
      if (subItem.href) return;
      if (subItem.component) {
        return {
          name: subItem.component,
        };
      }
      return { name: `${item.group}/${(subItem.name)}` };
    },
    gentTarget(item){
      if (!item.component) return;
      return {
          name: item.component,
        };
    },
    
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScrollFunction);
    }
};
</script>


<style lang="stylus">
//@import '../../../node_modules/vuetify/src/stylus/settings/_elevations.styl';

#appDrawer
  overflow: hidden
  .drawer-menu--scroll
    height: calc(84vh)
    overflow: none

</style>
