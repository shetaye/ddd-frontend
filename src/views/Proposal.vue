<template>
    <app-proposal :id="id"/>
</template>

<script>
import AppProposal from '@/components/AppProposal';
export default {
    name: 'Proposal',
    props: {
        id: String
    },
    components: {
        AppProposal
    }
};
</script>

<style>
</style>
