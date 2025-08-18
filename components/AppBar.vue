<template>
  <v-app-bar
    :clipped-left="clipped"
    app
    dark
    prominent
    elevate-on-scroll
    shrink-on-scroll
    fade-img-on-scroll
    :height="$vuetify && $vuetify.breakpoint.mdAndUp ? 200 : undefined"
    src="/img/banner.jpg"
    :style="{ '--banner-left': `${$vuetify.application.left}px` }"
  >
    <template #img="{ props }">
      <v-img cover transition="fade-transition" position="center center" v-bind="props" />
    </template>

    <v-app-bar-nav-icon
      v-if="!noDrawer"
      aria-label="toggle navigation menu"
      class="v-xs-none v-sm-block"
      @click.stop="$emit('toggle-drawer')"
    />

    <v-spacer />

    <slot />

    <div class="appbar-actions v-xs-none v-sm-flex">
      <v-btn icon aria-label="GitHub" @click="open('https://github.com/isair')">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon aria-label="LinkedIn" @click="open('https://www.linkedin.com/in/barissencan')">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn icon aria-label="Email" @click="open('mailto:baris@writeme.com')">
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    label: {
      type: String,
      default: '',
    },
    clipped: {
      type: Boolean,
      default: false,
    },
    noDrawer: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    open(url: string) {
      window.open(url, '_blank');
    },
  },
});
</script>

<style scoped>
.v-app-bar .v-app-bar__image {
  left: var(--banner-left, 0) !important;
  width: calc(100% - var(--banner-left, 0)) !important;
}

.v-app-bar {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
}

.appbar-actions :deep(.v-btn) {
  color: white;
}

.v-app-bar .v-toolbar__content {
  padding-left: 24px !important;
  padding-right: 24px !important;
  max-width: none !important;
  margin: 0 !important;
  box-sizing: border-box !important;
  position: relative !important;
}

.appbar-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
