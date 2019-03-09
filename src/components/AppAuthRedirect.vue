<template>
    <div/>
</template>

<script>
export default {
    name: 'AppAuthRedirect',
    mounted() {
        /* Did we actually login? */
        let error = this.$route.query.error;
        let authCode = this.$route.query.code;
        if (authCode) {
            this.$store.dispatch('auth/fromRedirect', { code: authCode });
        }
        this.$router.push({ name: 'home' });
    }
};
</script>

<style>
</style>
