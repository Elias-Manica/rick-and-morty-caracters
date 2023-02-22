<template>
  <q-page>
    <q-page class="row justify-end">
      <q-page class="col row justify-center">
        <q-page style="padding-left: 80px">
          <h1 class="on-left" style="font-size: 70px; font-weight: bold">
            Adentre no mundo de Rick e Morty
          </h1>
          <h6>Use the field below to search for a character.</h6>
        </q-page>
      </q-page>
      <q-page
        side="right"
        show-if-above
        :width="200"
        :breakpoint="500"
        class="col row justify-center"
        padding
      >
        <q-page>
          <img alt="Gif rick" src="~assets/rickgif.gif" style="width: 150px" />
        </q-page>
      </q-page>
    </q-page>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
