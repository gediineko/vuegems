<template>
  <div class="signup">
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
          <div class="signup-container">
            <v-card class="signup-panel">
              <v-card-row class="green darken-1">
                <v-card-title>
                  <span class="white--text">
                    Sign Up
                  </span>
                </v-card-title>
              </v-card-row>
              <v-card-text>
                <v-row row>
                  <v-col xs6>
                    <v-text-field name="name" label="Complete Name"></v-text-field>
                    <v-text-field name="employeeNumber" label="Employee Number" type="number"></v-text-field>
                    <v-text-field name="address" label="Complete Address"></v-text-field>
                  </v-col>
                  <v-col xs6>
                    <v-text-field name="username" label="Username" hint="At least 6 characters"></v-text-field>
                    <v-text-field name="password" label="Password" hint="At least 8 characters"
                                  append-icon="remove_red_eye" type="password"></v-text-field>
                    <v-text-field name="retypePassword" label="Retype Password" hint="At least 8 characters"
                                  append-icon="remove_red_eye" type="password"></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-row actions>
                <v-card-row class="text-md-left">
                  <span>
                    Back to <router-link to="/login"> Log In </router-link> page.
                  </span>
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
    name: 'signup'
  }
</script>

<style scoped>
  .signup-panel {
    width: 800px;
    margin: 100px auto;
  }

  .signup-container {
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
