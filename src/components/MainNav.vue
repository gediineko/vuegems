<template>
  <div class="main-nav">
    <v-app class="elevation-1" top-toolbar left-sidebar>
      <v-toolbar class="green">
        <v-toolbar-side-icon class="hidden-lg-and-up green--text" @click.native.stop="sidebar = !sidebar" />
        <v-toolbar-logo class="text-xs-right">
          <div class="sidebar-top pr-4">
            <img src="../assets/e-global.png" class="mr-5 pr-3">
          </div>
        </v-toolbar-logo>
      </v-toolbar>
      <main>
        <v-sidebar v-model="sidebar" height="auto">
          <v-list dense>
            <template v-for="(item,i) in itemGroup">
              <v-list-group v-if="item.items">
                <v-list-item slot="item">
                  <v-list-tile ripple>
                    <v-list-tile-title v-text="item.title" />
                    <v-list-tile-action>
                      <v-icon>keyboard_arrow_down</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list-item>
                <v-list-item v-for="(subItem,i) in item.items" :key="i">
                  <v-list-tile ripple>
                    <v-list-tile-title v-text="subItem.title" />
                  </v-list-tile>
                </v-list-item>
              </v-list-group>
              <v-subheader v-else-if="item.header" v-text="item.header" />
              <v-divider v-else-if="item.divider" light />
              <v-list-item v-else>
                <v-list-tile ripple>
                  <v-list-tile-title v-text="item.title" />
                </v-list-tile>
              </v-list-item>
            </template>
          </v-list>
        </v-sidebar>
        <v-content>
          <v-container fluid>

          </v-container>
        </v-content>
      </main>
    </v-app>

  </div>
</template>

<script>
  export default {
    name: 'mainNav',
    data () {
      return {
        accountLoggedIn: true,
        sidebar: false,
        itemGroup: [
          { header: 'Header' },
          {
            title: 'Parent',
            group: '/company',
            items: [
              { title: 'Child' },
              { title: 'Child' },
              { title: 'Child' }
            ]
          },
          { title: 'Link' },
          { title: 'Link' },
          { divider: true },
          { header: 'Another Header' },
          { title: 'Link' }
        ]
      }
    }
  }
</script>

<style scoped>
.sidebar-top {
  background-color: white;
  height: 64px;
  left: 0;
  position: absolute;
  top: 0;
  width: 300px;
}

.sidebar-top img {

}
</style>
