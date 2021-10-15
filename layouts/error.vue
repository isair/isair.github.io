<template>
  <v-app dark>
    <div class="d-flex pa-2 flex-column fill-height justify-center align-center">
      <h1>
        {{ errorMessage }}
      </h1>
      <NuxtLink to="/"> Home page </NuxtLink>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    errorMessage() {
      switch (this.error.statusCode) {
        case 404:
          return 'Page not found';
        default:
          return 'Oops! Something went wrong';
      }
    },
  },
};
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

.my-app.v-application .primary--text {
  color: var(--v-primary-base) !important;
}
</style>
