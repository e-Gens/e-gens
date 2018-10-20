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
                    <v-img :src="imageLogin" max-width="250px" width="60vw"></v-img>
                </v-flex>
              </v-layout>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text>
                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required>
                  </v-text-field>
                  <v-text-field v-model="password" :rules="passwordRules" :counter="10" label="Senha" required>
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

export default {
  name: "Login",
  data: () => ({
    valid: true,
    password: '',
    passwordRules: [
      v => !!v || 'Senha é obrigatória',
      v => (v && v.length <= 10) || 'Senha tem que ser menor que 10 caracteres'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v => /.+@.+/.test(v) || 'Você precisa de um e-mail válido.'
    ],
    imageLogin: require('@/assets/img/logo/logo-login.png')
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
        // console.log('Axios aqui!')
        this.$http.post('/api/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          //console.log(response)
          if (response.data.token) {
            sessionStorage.setItem('usuario',JSON.stringify(response.data))
            this.$router.push('app')
          } else if (response.data.status == false) {
            //console.log('Login não existe!')
            alert('Login ou senha incorretos')
          }else{
            //console.log('Erros de validação')
            let erros = '';
            for (let erro of Object.values(response.data)) {
              erros += erro + " \n";
              
            }
            alert(erros);
          }
        })
        .catch(e => {
          this.errors.push(e)
          alert('Erro no servidor');
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

<style lang="stylus">
  #loginImage 
    background-image: url("../assets/img/login/janelas.jpg")
    height: 92vh;
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    border-right: 1px solid green

  #loginLayout 
    height: 70vh

</style>
