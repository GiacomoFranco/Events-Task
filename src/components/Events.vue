<script setup>
import EventCard from './EventCard.vue';
import EmptyList from './EmptyList.vue';
import EventsMock from '../mocks/mock-data.json';
import { filterByTab } from '@/utils/filter';

const props = defineProps(['filter']);
</script>

<template>
  <div class="events">
    <template v-if="EventsMock && EventsMock.events.length">
      <EventCard v-for="event in filterByTab(filter, EventsMock.events)" :event="event" />
    </template>
    <template v-else>
      <EmptyList />
    </template>
  </div>
</template>

<style lang="scss">
.events {
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}
</style>
