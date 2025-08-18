<template>
  <v-app v-if="appReady">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app aria-label="Primary Navigation">
      <v-list-item two-line class="drawer-header">
        <v-list-item-avatar size="40">
          <v-img src="/icon.png" alt="Baris Sencan" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Baris Sencan</v-list-item-title>
          <v-list-item-subtitle>Engineering Leader</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
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

    <app-bar :clipped="clipped" :label="appBarLabel" :sub-label="appBarSubLabel" @toggle-drawer="drawer = !drawer" />

    <v-main id="main-content">
      <v-container :class="['page-container', { 'overlap-banner': isHome }]" fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app class="justify-center">
      <div class="text-caption" style="opacity: 0.8">
        © {{ new Date().getFullYear() }} Baris Sencan ·
        <a href="mailto:baris@writeme.com" class="footer-link">Contact</a>
      </div>
    </v-footer>
  </v-app>
  <v-app v-else>
    <a href="#main-content" class="skip-link">Skip to content</a>
    <app-loading-indicator />
  </v-app>
</template>

<script lang="ts">
// @ts-nocheck
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
    clipped: false,
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
    isHome(): boolean {
      return this.$route && this.$route.path === '/';
    },
    internalMenuItems() {
      return this.menuItems.filter((item: MenuItem) => !item.external);
    },
    externalMenuItems() {
      return this.menuItems.filter((item: MenuItem) => item.external);
    },
  },
  created() {
    if (this.$vuetify && this.$vuetify.breakpoint && this.$vuetify.breakpoint.mdAndUp) {
      this.drawer = true;
    }
    this.prepareApp();
  },
  methods: {
    ...mapActions(['prepareApp']),
  },
});
</script>

<style>
html,
.v-application,
.v-toolbar {
  background-color: var(--v-background-base) !important;
}

.v-expansion-panel {
  background-color: var(--v-panel-base) !important;
}

.v-navigation-drawer__content {
  background-color: var(--v-drawer-base) !important;
}

.v-list {
  padding-top: 0;
  padding-bottom: 0;
}

.my-app.v-application .primary--text {
  color: var(--v-primary-base) !important;
}

.page-container {
  max-width: 1100px;
  padding-top: 0;
}

.skip-link {
  position: absolute;
  left: 8px;
  top: -40px;
  background: #ffffff;
  color: #000000;
  padding: 8px 12px;
  border-radius: 6px;
  text-decoration: none;
  z-index: 10000;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 8px;
}

.footer-link {
  color: var(--v-primary-base);
  text-decoration: underline;
}

.drawer-header {
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
