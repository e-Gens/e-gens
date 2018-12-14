<template>
  <v-container fluid slot="main">
    <v-slide-y-transition mode="out-in" leave-absolute hide-on-leave>
      <v-layout align-center justify-space-around column fill-height>
        <v-card width="80vh">
          <v-toolbar card color="secondary" dark>
            <v-icon>account_circle</v-icon>
            <v-toolbar-title class="font-weight-bold">Dados do Usuário</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="primary" fab small @click="isEditing = !isEditing">
              <v-icon v-if="isEditing">close</v-icon>
              <v-icon v-else>edit</v-icon>
            </v-btn>
          </v-toolbar>
          <v-layout mt-4 align-center justify-center column fill-height>
            <v-flex>
              <v-img :src="this.usuario.avatar" max-width="12vw" width="60vw"></v-img>
            </v-flex>
          </v-layout>
          <v-form ref="form" v-model="valid" autocomplete="on">
            <v-card-text>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :disabled="!isEditing"
                label="Nome"
                prepend-icon="account_circle"
                browser-autocomplete="name"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :disabled="!isEditing"
                label="E-mail"
                prepend-icon="alternate_email"
                browser-autocomplete="username"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :disabled="!isEditing"
                counter
                label="Senha"
                prepend-icon="lock"
                :append-icon="show ? 'visibility' : 'visibility_off'"
                :type="show ? 'text' : 'password'"
                hint="Digite sua senha"
                @click:append="show = !show"
                required
              ></v-text-field>
              <v-text-field
                v-model="password_confirmation"
                :disabled="!isEditing"
                counter
                label="Confirme a senha"
                prepend-icon="lock"
                :append-icon="show ? 'visibility' : 'visibility_off'"
                :type="show ? 'text' : 'password'"
                hint="Digite novamente sua senha"
                @click:append="show = !show"
                required
              ></v-text-field>
              <v-layout
                v-if="isEditing"
                align-space-around
                justify-space-between
                row
                fill-height
                class="input-wrapper"
              >
                <v-flex xs3 align-self-center>
                  <v-btn dark color="info">
                    <label for="input-file">Selecionar imagem</label>
                  </v-btn>
                </v-flex>
                <v-flex>
                  <input id="input-file" type="file" v-on:change="salvaAvatar">
                  <v-text-field disabled prepend-icon="attach_file" :value="this.filename"></v-text-field>
                </v-flex>
                <!-- <span id="file-name"></span> -->
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-layout align-space-around justify-center column fill-height>
                <v-layout xs12 row>
                  <v-btn
                    flat
                    color="blue"
                    :disabled="!valid || !isEditing"
                    @click="submit"
                    block
                  >alterar</v-btn>
                  <v-btn flat color="grey" @click="clear" block>limpar</v-btn>
                </v-layout>
                <v-flex xs12>
                  <v-btn flat color="blue" :disabled="!isEditing" to="/" block>Cancelar alteração.</v-btn>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-form>
          <br>
          <br>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import AppEvents from '@/event'

export default {
  name: "Usuario",
  data: () => ({
    valid: true,
    errors: [],
    isEditing: null,
    show: false,
    usuario: false,
    filename: '',
    avatar: null,
    name: '',
    nameRules: [
      v => !!v || 'Nome é obrigatório',
      v => (v && v.length >= 5) || 'Nome tem que ser maior que 5 caracteres'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Senha é obrigatória',
      v => (v && v.length >= 6) || 'Senha tem que ter no mínimo 6 caracteres'
    ],
    password_confirmation: '',
    passwordConfRules: [
      v => !!v || 'Confirmação é obrigatória',
      v => (v && v.length >= 6) || 'Senha tem que ter no mínimo 6 caracteres'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v => /.+@.+/.test(v) || 'Você precisa de um e-mail válido.'
    ],
  }),
  created() {
    let usuarioAux = sessionStorage.getItem('usuario');
    if (usuarioAux) {
      this.usuario = JSON.parse(usuarioAux);
      this.name = this.usuario.name
      this.email = this.usuario.email
      this.avatar = this.usuario.avatar
    } else {
      this.$router.push('/login')
    }
    AppEvents.forEach(item => {
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  },
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
    salvaAvatar(e) {
      let arquivo = e.target.files || e.dataTransfer.files
      if (!arquivo.length) {
        return;
      }
      this.filename = e.target.value
      let reader = new FileReader();
      reader.onloadend = (e) => {
        this.avatar = e.target.result
      }
      reader.readAsDataURL(arquivo[0])
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.$http.put('/api/usuario/edit', {
          name: this.name,
          email: this.email,
          avatar: this.avatar,
          password: this.password,
          password_confirmation: this.password_confirmation
        }, { "headers": { "authorization": "Bearer " + this.usuario.token } })
          .then(response => {
            if (response.data.user.token) {
              this.usuario = response.data.user
              sessionStorage.setItem('usuario', JSON.stringify(response.data.user))
              alert('Perfil atualizado com sucesso!')
              this.$router.go()
            } else if (response.data.status == false) {
              let erros = '';
              for (let erro of Object.values(response.data.errors)) {
                erros += erro + " \n";
              }
              alert("Erro no envio dos dados" + " \n" + erros + "\n Revise seus dados e tente novamente!");
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
  }};
</script>

<style lang="stylus">
#loginLayout {
  height: 70vh;
}

input[type='file'] {
  display: none;
}
</style>
