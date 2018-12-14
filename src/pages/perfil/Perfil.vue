<template>
  <login-template>
    <v-container fluid id="loginLayout" ma-0 pa-0 align-center align-content-start slot="main">
      <v-layout xs12 fill-height>
        <v-flex flexbox align-content-center id="loginImage" xs8 v-if="showImage"></v-flex>
        <v-flex pa-3>
          <v-layout align-space-around justify-center column fill-height>
            <v-card>
              <br>
              <br>
              <v-layout align-center justify-center column fill-height>
                <v-flex>
                  <v-img :src="imageLogin" max-width="12vw" width="60vw"></v-img>
                </v-flex>
              </v-layout>
              <v-form ref="form" v-model="valid" autocomplete="on">
                <v-card-text>
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Nome"
                    prepend-icon="account_circle"
                    browser-autocomplete="name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    prepend-icon="alternate_email"
                    browser-autocomplete="username"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    counter
                    label="Senha"
                    prepend-icon="lock"
                    :append-icon="show ? 'visibility' : 'visibility_off'"
                    :type="show ? 'text' : 'password'"
                    hint="Digite sua senha"
                    @click:append="show = !show"
                    browser-autocomplete="current-password"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password_confirmation"
                    :rules="passwordRules"
                    counter
                    label="Confirme a senha"
                    prepend-icon="lock"
                    :append-icon="show ? 'visibility' : 'visibility_off'"
                    :type="show ? 'text' : 'password'"
                    hint="Digite sua senha"
                    @click:append="show = !show"
                    browser-autocomplete="current-password"
                    required
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-layout align-space-around justify-center column fill-height>
                    <v-layout xs12 row>
                      <v-btn flat color="blue" :disabled="!valid" @click="cadastro" block>Cadastrar</v-btn>
                      <v-btn flat color="grey" @click="clear" block>limpar</v-btn>
                    </v-layout>
                    <v-flex xs12>
                      <v-btn flat color="blue" to="/login" block>Já tenho uma conta.</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-actions>
              </v-form>
              <br>
              <br>
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <span slot="footer">
      <span>| Módulo Login</span>
    </span>
  </login-template>
</template>

<script>
import LoginTemplate from "@/template/LoginTemplate"

export default {
  name: "Perfil",
  data: () => ({
    valid: true,
    show: false,
    name: '',
    nameRules: [
      v => !!v || 'Nome é obrigatório',
      v => (v && v.length >= 5) || 'Nome tem que ser maior que 5 caracteres'
    ],
    password: '',
    password_confirmation: '',
    passwordRules: [
      v => !!v || 'Senha é obrigatória',
      v => (v && v.length >= 6) || 'Senha tem que ter no mínimo 6 caracteres'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v => /.+@.+/.test(v) || 'Você precisa de um e-mail válido.'
    ],
    imageLogin: require('@/assets/img/logo/logo-cadastro.png')
  }),
  computed: {
    showImage() {
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
    cadastro() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        // console.log('Axios aqui!')
        this.$http.post('/api/criar-usuario', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
          .then(response => {
            console.log(response)
            if (response.data.token) {
              sessionStorage.setItem('usuario', JSON.stringify(response.data))
              alert('Cadastro realizado com sucesso!')
              this.$router.push('/')
            } else if (response.data.status == false) {
              //console.log('Login não existe!')
              alert('Erro no servidor, tente novamente mais tarde.')
            } else {
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
    clear() {
      this.$refs.form.reset()
    }
  },
  components: {
    LoginTemplate
  }
};
</script>

<style lang="stylus">
#loginImage {
  background-image: url('../assets/img/login/janelas.jpg');
  height: 92vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-right: 1px solid green;
}

#loginLayout {
  height: 70vh;
}
</style>
