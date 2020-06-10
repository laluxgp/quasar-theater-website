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
        <q-tabs v-model="tab" shrink stretch align="center">
          <q-route-tab name="home" to="/" label="home" />
          <q-route-tab name="contactus" to="/contactus" label="Contact Us" />
          <q-route-tab name="watchnow" to="/watchnow" label="Watch Now" />
          <q-route-tab to="/page4" label="Page Four" />
        </q-tabs>
        <q-space />
        <q-btn dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          header
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      tab: 'home'
    }
  }
}
</script>
