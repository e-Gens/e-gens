<template>
    <v-footer fixed app elevation-0>
      <v-layout justify-center row wrap>
        <v-flex id="inner-footer" primary darkeen-3 py-3 text-xs-center white--text xs12 >
            <slot/>
        </v-flex>
      </v-layout>
    </v-footer>
</template>

<script>
export default {
    name: 'GnsFooter'
}
</script>
