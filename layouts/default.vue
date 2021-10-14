<template>
  <v-app v-if="appReady">
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app floating bottom>
      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.external ? undefined : item.url"
          router
          exact
          color="primary"
          @click="item.external ? window.open(item.url) : undefined"
        >
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
      {
        icon: 'mdi-arrow-down',
        title: 'Downloads',
        url: '/downloads',
      },
    ] as MenuItem[],
  }),
  computed: {
    ...mapState(['appReady']),
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