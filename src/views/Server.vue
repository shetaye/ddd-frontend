<template>
    <app-server :id="id"/>
</template>

<script>
import AppServer from '@/components/AppServer';
export default {
    name: 'Server',
    props: {
        id: String
    },
    components: {
        AppServer
    }
};
</script>

<style>
</style>