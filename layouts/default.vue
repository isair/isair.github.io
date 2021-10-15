<template>
  <v-app v-if="appReady">
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app floating bottom>
      <v-list>
        <v-list-item v-for="(item, i) in internalMenuItems" :key="i" :to="item.url" router exact color="primary">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider v-if="externalMenuItems.length > 0" />

      <v-list v-if="externalMenuItems.length > 0">
        <v-list-item v-for="(item, i) in externalMenuItems" :key="i" color="primary" @click="window.open(item.url)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <app-bar :clipped="clipped" @toggle-drawer="drawer = !drawer" />

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
  <app-loading-indicator v-else />
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

import AppBar from '~/components/AppBar.vue';
import AppLoadingIndicator from '~/components/AppLoadingIndicator.vue';

interface MenuItem {
  icon: string;
  title: string;
  url: string;
  external?: boolean;
}

export default Vue.extend({
  components: {
    AppBar,
    AppLoadingIndicator,
  },
  data: () => ({
    window,
    clipped: true,
    drawer: false,
    fixed: false,
    menuItems: [
      {
        icon: 'mdi-home',
        title: 'About Me',
        url: '/',
      },
      {
        icon: 'mdi-download',
        title: 'Downloads',
        url: '/downloads',
      },
      {
        icon: 'mdi-github',
        title: 'Open Source',
        url: 'https://github.com/isair',
        external: true,
      },
      {
        icon: 'mdi-post',
        title: 'Blog',
        url: 'https://medium.com/@isair',
        external: true,
      },
    ] as MenuItem[],
  }),
  computed: {
    ...mapState(['appReady']),
    internalMenuItems() {
      return this.menuItems.filter((item) => !item.external);
    },
    externalMenuItems() {
      return this.menuItems.filter((item) => item.external);
    },
  },
  created() {
    (this as any).$vuetify.theme.dark = true;
    this.prepareApp();
  },
  methods: {
    ...mapActions(['prepareApp']),
  },
});
</script>

<style>
.my-app.v-application .primary--text {
  color: var(--v-primary-base) !important;
}
</style>
