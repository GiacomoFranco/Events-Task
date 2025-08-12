<script setup>
import HeaderComponent from './Header.vue'
import EventsOverview from './EventsOverview.vue'
</script>

<template>
  <HeaderComponent />
  <EventsOverview />
  <slot />
</template>
