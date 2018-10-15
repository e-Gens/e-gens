<template>
    <v-footer fixed app elevation-0 height="20">
        <v-layout row class="footer-copyright" primary lighten-1 align-center justify-space-between fill-height>
            <v-flex xs6>
            <span><strong>&copy; {{ new Date().getFullYear() }} e-Gens</strong></span>
            <slot/>
            <v-spacer></v-spacer>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
export default {
  name: "GnsFooter"
};
</script>