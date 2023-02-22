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
        <q-toggle v-model="isActivyDarkMode" color="green" />

        <q-route-tab :to="{ name: 'home' }" replace label="Home" />
        <q-route-tab
          :to="{ name: 'search' }"
          replace
          label="Outros personagens"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, watch } from "vue";
import { useQuasar } from "quasar";

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false);

    const isActivyDarkMode = ref(false);

    const $q = useQuasar();

    watch(isActivyDarkMode, (isActivyDarkMode) => {
      $q.dark.set(isActivyDarkMode);
    });

    return {
      leftDrawerOpen,
      isActivyDarkMode,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  methods: {
    darkMode(val) {
      this.$q.dark.set(val);
    },
  },
};
</script>
