<template>
    <v-navigation-drawer :modelValue="show" location="right" temporary>
        <v-list>
            <v-list-item
            v-for="item in items"
            :key="item.id"
            :title="item.title"
            :to="item.to"
            base-color="green"
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
    
    const items = [
        {
            id:2,
            title: 'Control',
            value: 'Control',
            to: { path: "/control" }
        },
        {
            id:1,
            title: 'wifi Setup',
            value: 'wifi Setup',
            to: { path: "/wifisetup" }
        },
    ]
    
    defineProps(['show'])

</script>

<!-- <style scoped>
    v-list-item {

    }
</style> -->