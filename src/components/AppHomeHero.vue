<template>
    <v-container fluid fill-height class='home-hero'>
        <v-layout align-center justify-center column>
            <div class="display-4 font-weight-light white--text text-xs-center">PURE DEMOCRACY</div>
            <div class="display-1 font-weight-thin white--text text-xs-center">Through a Discord Bot.</div>
            <v-btn @click="openBotAuth()" color="purple lighten-3">ADD TO DISCORD</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'AppHomeHero',
    methods: {
        openBotAuth: function() {
            window.open(this.$store.getters.botAddUrl);
        }
    }
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/0BhSKStVtdM');
    background-size: cover;
    width: 100%;
    height: 100%;
    max-height: 100vh;
}
</style>
