<template>
    <v-footer class="footer-copyright" fixed app elevation-0 height="20" fluid grid-list-xl>
        <v-layout row white--text primary lighten-1 align-center justify-space-between fill-height>
            <v-flex xs3 class="text-xs-left" mx-2>
            <strong>&copy; {{ new Date().getFullYear() }} e-Gens </strong><slot/>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs9 class="text-xs-right" mx-2>
                <v-list-tile avatar >
                    <v-spacer></v-spacer> 
                    <v-list-tile-action>
                        <a href="http://laravel.com" target="_blank" rel="noopener noreferrer">
                            <v-avatar tile size="30">
                                <v-img src="https://servebolt.no/wp-content/uploads/2017/07/laravel_logo-circle-tp-xs.png" alt="Laravel">
                                </v-img>
                            </v-avatar>
                        </a>
                    </v-list-tile-action>
                    <v-list-tile-action>
                        <a href="https://br.vuejs.org" target="_blank" rel="noopener noreferrer">
                            <v-avatar tile size="30">
                                <v-img src="https://br.vuejs.org/images/logo.png" alt="Vue.JS">
                                </v-img>
                            </v-avatar>
                        </a>
                    </v-list-tile-action>
                    <v-list-tile-action>
                        <a href="https://vuetifyjs.com/pt-BR/" target="_blank" rel="noopener noreferrer">
                            <v-avatar tile size="30">
                                <v-img src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg" alt="Vuetify">
                                </v-img>
                            </v-avatar>
                        </a>
                    </v-list-tile-action>
        
                </v-list-tile>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
export default {
  name: "GnsFooter"
};
</script>