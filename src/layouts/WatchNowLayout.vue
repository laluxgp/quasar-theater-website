<template>
  <q-layout view="hHr lpR ffr">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Fénix
        </q-toolbar-title>
        <q-tabs shrink stretch align="center">
          <q-route-tab name="home" to="/" label="home" />
          <q-route-tab name="watchnow" to="/watchnow" label="Watch Now" />
        </q-tabs>
        <q-space />
        <q-btn dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="right" elevated>
      <!-- drawer content -->
      El chat
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
