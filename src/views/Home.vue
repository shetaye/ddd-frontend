<template>
    <span>
      <app-home-hero/>
      <app-home-details/>
    </span>
</template>

<script>
import AppHomeHero from '@/components/AppHomeHero';
import AppHomeDetails from '@/components/AppHomeDetails';

export default {
    name: 'Home',
    components: {
        AppHomeHero,
        AppHomeDetails
    }
};
</script>

<style>
</style>
