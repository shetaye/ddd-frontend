<template>
    <v-flex xs3>
        <v-list two-line class="pa-0">
            <v-list-tile class="grey lighten-3" :to="location">
                <v-list-tile-content>
                    <v-list-tile-title>{{ title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ subTitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                    <v-icon>arrow_forward</v-icon>
                </v-list-tile-action>
            </v-list-tile>
        </v-list>
    </v-flex>
</template>

<script>
export default {
    name: 'DocumentLinkButton',
    props: {
        title: String,
        subTitle: String,
        location: Object
    }
}
</script>

<style>

</style>
