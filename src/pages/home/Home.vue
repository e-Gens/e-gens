<template>
  <spa-template>
    <v-list dense slot="menu">
      
      <v-list-group prepend-icon="home" value="true">
        <v-list-tile slot="activator">
          <v-list-tile-title>Painel Administrativo</v-list-tile-title>
        </v-list-tile>
      </v-list-group>

      <v-list-group prepend-icon="dashboard" >
        <v-list-tile slot="activator">
          <v-list-tile-title>Controle</v-list-tile-title>
        </v-list-tile>
      </v-list-group>

      <v-list-group prepend-icon="account_circle" >
        <v-list-tile slot="activator">
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile>

        <v-list-group no-action sub-group >
          <v-list-tile slot="activator">
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>

          <v-list-tile v-for="(admin, i) in admins" :key="i" @click="admin">
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
          </v-list-tile>
        </v-list-group>

        <v-list-group sub-group no-action >
          <v-list-tile slot="activator">
            <v-list-tile-title>Actions</v-list-tile-title>
          </v-list-tile>

        <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="crud[1]" >
          <v-list-tile-action>
            <v-icon v-text="crud[1]"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
        </v-list-tile>
      </v-list-group>
      </v-list-group>
    </v-list>

    <v-spacer></v-spacer>
    <v-container center>
      <img src="https://randomuser.me/api/portraits/men/11.jpg">
    </v-container>

    <v-toolbar-items slot="user-nav-data">
      <v-btn flat>
        <v-badge color="red" overlap>
        <span slot="badge">6</span>
        <v-icon medium color="grey lighten-1">assignment</v-icon>
        </v-badge>
      </v-btn>
      <v-btn flat>
        <v-badge color="purple" overlap>
        <span slot="badge">6</span>
        <v-icon medium color="grey">mail</v-icon>
      </v-badge>
      </v-btn>
      <v-btn flat>
        <v-list-tile-avatar @click.stop="profileDrawer = !profileDrawer">
          <img src="https://randomuser.me/api/portraits/men/11.jpg">
        </v-list-tile-avatar>
        <small>{{ usuario }}</small>
        <v-icon>keyboard_arrow_down</v-icon>
      </v-btn>
    </v-toolbar-items> 

    <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
  
  <span slot="footer">
    <strong>&copy; 2018 — Desenvolvido por e-Gens</strong>
  </span>

  </spa-template>
</template>

<script>
import SpaTemplate from "@/template/SpaTemplate";

export default {
  name: "Home",
  data() {
    return {
      admins: [["Management", "people_outline"], ["Settings", "settings"]],
      cruds: [
        ["Create", "add"],
        ["Read", "insert_drive_file"],
        ["Update", "update"],
        ["Delete", "delete"]
      ],
      usuario: 'José da Silva'
    };
  },
  components: {
    SpaTemplate
  }
};
</script>
