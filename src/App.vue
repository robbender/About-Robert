<template>
  <v-app id="inspire">
       <v-navigation-drawer
      fixed
      v-model="drawerRight"
      right
      clipped
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="#def2f1">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Robert</span>
        <span class="font-weight-light">Bender</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="mailto:hello@robertbender.net"
        target="_blank"
      >
        <span class="mr-2">Contact Me</span>
      </v-btn>
       <v-btn icon>
         <!-- <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon> -->
          <v-icon @click.stop="drawerRight = !drawerRight" >more_vert</v-icon>
        </v-btn>
    </v-toolbar>
    <v-content>
      <Landing/>
      <!-- <router-view /> -->
    </v-content>
  </v-app>
</template>

<script>
import Landing from './components/Landing'

export default {
  name: 'App',
  components: {
    Landing
  
  },
    data: () => ({
    drawer: false,
    drawerRight: false,
    right: null,
    left: null
  }),

  props: {
    source: String
  }
}  


</script>

<style>

/* .container {
  background-color: #2b7a78;
} */

.v-content {
  background-color: #2b7a78;
}

/* element.style {
  
    background-color: #def2f1;
} */

</style>

