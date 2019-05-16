<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <main class="w-100 min-vh-100 bg-gray8 sans-serif pa6 flex flex-column justify-center items-center">
      <div class="mw8 center overflow-hidden">
        <h2 class="tc ttu tracked3 b f2 mt0 mb2 teal0 o-1">About Robert</h2>

        <ul class="list ma0 pa0 flex flex-row flex-wrap teal4">
          <li class="pv3 ph2 ma0 link grow">
            <a href=""><font-awesome-icon :icon="['fas', 'code']" transform="shrink-4 down-0 left-0" :mask="['fas', 'circle']" size="4x" @click="code" /></a>
          </li>
          
          <li class="pv3 ph2 ma0 link grow">
            <a href="" target="_blank"><font-awesome-icon :icon="['fas', 'id-badge']" size="4x" /></a>
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <a href="https://github.com/robbender" target="_blank"><font-awesome-icon :icon="['fab', 'github']" size="4x" /></a>
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <a href="https://www.linkedin.com/in/robert-bender-b152257/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" size="4x" /></a>
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <a href="" target="_blank"><font-awesome-icon :icon="queen" size="4x" /></a>
          </li>
        </ul>
      </div>
    </main>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: 
      {
      code: 'www.//github.com/robbender'
    },
    


    methods: {
      code() {
        console.log('clicked')
        // alert('clicked')
        return 'www.github.com/robbender';
        //add code that you wish to happen on click
        // href: 'https://github.com/vuetifyjs/vuetify-loader'
      }
    }
  }


</script>

<style scoped>
  body {
    background-color: #17252a;
  }

  a {
    color:#38d9a9;
  }

  h2 {
    color: #def2f1;
  }


</style>
