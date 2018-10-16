<template>
  <login-template >
    <v-container  slot="main">
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <img src="/img/logo/logo-h.png">
            </v-card-title>
            <v-card-text>
                
                <div class="form">
                  <br>
                  <p>e-mail</p>
                  <input type="text" name="username" id="email_login" placeholder="Digite seu e-mail">
                  <p>Senha</p>
                  <input type="password" name="senha" id="senha_login" placeholder="Digite sua senha">
                  <input type="submit" name="submit" value="Login" id="Logar">
                  <br>
                  <input type="submit" name="submit" value="Matricule-se" id="matricular">
                  <br><br>
                  <a href="esqueci_senha.php">Esqueci minha senha</a>
                  <br>
                  <a href="../matricula_desistencia/form-desistencia.php">Formulário de cancelamento</a>
                </div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <span slot="footer">
      <span> | Módulo Login</span>
    </span>
  </login-template>    
</template>

<script>
import LoginTemplate from "@/template/LoginTemplate";

export default {
  name: "Login",
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    LoginTemplate
  }
};
</script>
