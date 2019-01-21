<template>
    <app-user :id="id"/>
</template>

<script>
import AppUser from '@/components/AppUser';
export default {
    name: 'User',
    props: {
        id: String
    },
    components: {
        AppUser
    }
};
</script>

<style>
</style>