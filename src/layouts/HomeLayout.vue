<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="row justify-between">
      <q-toolbar class="col">
        <img
          alt="Quasar logo"
          src="~assets/rick-And-Morty-Logo.png"
          style="width: 150px"
        />
      </q-toolbar>

      <q-tabs>
        <q-route-tab to="/home" replace label="Home" />
        <q-route-tab to="/search" replace label="Outros personagens" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
