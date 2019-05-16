<template>
<v-container>
    <v-layout text-xs-center wrap>
        <v-flex xs12>
            <main class="w-100 min-vh-100 bg-gray8 sans-serif pa6 flex flex-column justify-center items-center">
                <div class="mw8 center overflow-hidden">
                    <h2 class="tc ttu tracked3 b f2 mt0 mb2 teal0 o-50">Experience</h2>

                </div>
            </main>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            Skills: [
              {
                id: 1,
                title: "HTML",
                experience: "3 years"
              },
              {
                id: 2,
                title: "CSS",
                experience: "3 years"
              },
              {
                id: 3,
                title: "JavaScript",
                experience: "1 year"
              }
            ]
        }
    },

    methods: {
        // code() {
        //     console.log('clicked')
        //     // alert('clicked')
        //     return 'www.github.com/robbender';
        //     //add code that you wish to happen on click
        //     // href: 'https://github.com/vuetifyjs/vuetify-loader'
        // }
    }
}
</script>

<style scoped>
body {
    background-color: #17252a;
}

a {
    color: #38d9a9;
}
</style>
