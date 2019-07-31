<template>
    <app-proposal-wizard :id="id"/>
</template>

<script>
import AppProposalWizard from '@/components/AppProposalWizard';
export default {
    name: 'ProposalWizard',
    props: {
        id: String
    },
    components: {
        AppProposalWizard
    }
};
</script>

<style>
</style>
