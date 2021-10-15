<template>
  <v-app-bar
    :clipped-left="clipped"
    app
    dark
    prominent
    elevate-on-scroll
    shrink-on-scroll
    fade-img-on-scroll
    src="/img/banner.jpg"
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

    <v-app-bar-title>
      <span v-if="label">
        {{ label }}
      </span>
    </v-app-bar-title>

    <v-spacer />

    <slot />
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
});
</script>
