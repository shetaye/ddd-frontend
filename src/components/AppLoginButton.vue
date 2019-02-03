<template>
    <v-btn :href="this.$store.state.auth.url" color="purple lighten-3" class="hidden-sm-and-down">LOG IN</v-btn>
</template>

<script>
export default {
    name: 'AppLoginButton'
}
</script>

<style>

</style>
