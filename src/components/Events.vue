<script setup>
import EventCard from './EventCard.vue';
</script>

<template>
  <div class="events">
    <EventCard v-for="value in [1, 2, 3, 4, 1, 2, 3, 4]" />
  </div>
</template>

<style>
.events {
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
}
</style>
