<template>
  <v-app>
    <v-toolbar app color="#def2f1">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Robert</span>
        <span class="font-weight-light">Bender</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Contact Me</span>
      </v-btn>
       <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>
    <v-content>
      <Skills/>
    </v-content>
  </v-app>
</template>

<script>
import Skills from './components/Skills'

export default {
  name: 'App',
  components: {
    Skills
  },
  data () {
    return {
      //
    }
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

element.style {
  
    background-color: #def2f1;
}

</style>

