<template>
  <v-app>
    <v-card>
      <v-layout>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

        <v-app-bar color="primary" style="position:fixed">
          <v-toolbar-title>Controller</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-app-bar-nav-icon variant="text" @click.stop="clicknacIcon"></v-app-bar-nav-icon>
          <!-- <v-btn icon="mdi-magnify" variant="text"></v-btn>
                <v-btn icon="mdi-filter" variant="text"></v-btn>
                <v-btn icon="mdi-dots-vertical" variant="text"></v-btn> -->
        </v-app-bar>

        

        <v-main style="height: 100%;">
          <NavbarDrawer ref="childCom" />
          <RouterView></RouterView>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script lang="ts" setup>
  import NavbarDrawer from '@/components/NavBarDrawer.vue'
  import { ref,onMounted } from 'vue'

  const drawershowBool = ref(false)
  const childCom = ref(null);

  const clicknacIcon = () => {
    (childCom.value as any).changedrawershow()
  }
</script>