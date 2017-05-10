<template>
  <div class="login">
    <v-toolbar class="white">
      <v-toolbar-title class="text-md-left pt-2">
        <img src="../../assets/vuegems.gif" alt="eGems" class="vuegems-toolbar-logo">
      </v-toolbar-title>
      <v-toolbar-title class="text-md-right">
        <img src="../../assets/e-global-sign.png" alt="Exist Global">
      </v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <div class="login-container">
            <v-card class="login-panel">
              <v-card-row class="green darken-1">
                <v-card-title>
                  <span class="white--text">
                    Log In
                  </span>
                </v-card-title>
              </v-card-row>
              <v-card-text>
                <v-text-field name="username" label="Username"></v-text-field>
                <v-text-field name="password" label="Password" append-icon="remove_red_eye"
                              type="password"></v-text-field>
              </v-card-text>
              <v-card-row actions>
                <v-card-row class="text-md-left">
                  Don't have an Account? <router-link to="/signup">Sign up.</router-link>
                </v-card-row>
                <v-btn primary>Submit</v-btn>
              </v-card-row>
            </v-card>
          </div>
        </v-container>
      </v-content>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style scoped>
  .login-panel {
    width: 500px;
    margin: 100px auto;
  }

  .login-container {
    min-height: 600px;
  }

  .vue-toolbar-logo {
    height: 60px;
    width: 60px;
  }

  .vuegems-toolbar-logo {
    height: 60px;
  }
</style>
