<template>
  <login-template >
    <v-container fluid id="loginLayout" ma-0 pa-0 align-center align-content-start slot="main">
      <v-layout xs12 fill-height>
        <v-flex flexbox align-content-center id="loginImage" xs8 v-if="showImage">
        </v-flex>
        <v-flex pa-3>
          <v-layout align-space-around justify-center column fill-height>
            <v-card flat>
              <v-layout align-center justify-center column fill-height>
                <v-flex>
                    <v-img src="/img/logo/logo-login.png" max-width="250px" width="60vw"></v-img>
                </v-flex>
              </v-layout>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text>
                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required>
                  </v-text-field>
                  <v-text-field v-model="password" :rules="nameRules" :counter="10" label="Senha" required>
                  </v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-layout align-space-around justify-center column fill-height>
                    <v-layout xs12 row>
                      <v-btn flat color="green" :disabled="!valid" @click="submit" block>login</v-btn>
                      <v-btn flat color="grey" @click="clear" block>limpar</v-btn>
                    </v-layout>
                    <v-flex xs12>
                      <v-btn flat color="blue" block>Recuperar Senha</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <span slot="footer">
      <span> | Módulo Login</span>
    </span>
  </login-template>    
</template>

<script>
import LoginTemplate from "@/template/LoginTemplate"
import axios from 'axios'

export default {
  name: "Login",
  data: () => ({
    valid: true,
    password: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  computed: {
    showImage () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return false
        case 'sm': return false
        case 'md': return true
        case 'lg': return true
        case 'xl': return true
      }
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('api-gens/login', {
          email: this.email,
          password: this.password
        })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  },
  components: {
    LoginTemplate
  }
};
</script>

<style lang="css" scoped>
  #loginImage {
    background-image: url("/img/login/janelas.jpg"); /* The image used */
    background-color: #cccccc; /* Used if the image is unavailable */
    height: 92vh; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    border-right: 2px solid green;

  }
  
  #loginLayout {
    height: 70vh;
  }

</style>
