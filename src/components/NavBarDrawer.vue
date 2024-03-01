<template>
    <v-navigation-drawer :modelValue="drawershowBool" location="right" temporary style="position:fixed">
        <v-list>
            <v-list-item
            v-for="item in items"
            :key="item.id"
            :title="item.title"
            :to="item.to"
            base-color="green"
            @click="changedrawershow"
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    let drawershowBool = ref(false)
    const changedrawershow = () => {
        drawershowBool.value = !drawershowBool.value
    }

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
    
    defineExpose({changedrawershow})

</script>

<!-- <style scoped>
    v-list-item {

    }
</style> -->