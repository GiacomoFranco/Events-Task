<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
function getAriaCurrent(path) {
  return route === path ? 'page' : null
}

</script>
<template>
  <nav>
    <RouterLink to="/" activeClass="active" :aria-current="getAriaCurrent('/')">All</RouterLink>
    <RouterLink to="/upcoming" activeClass="active" :aria-current="getAriaCurrent('/upcoming')">Upcoming</RouterLink>
    <RouterLink to="/past-events" activeClass="active" :aria-current="getAriaCurrent('/past-events')">Past Events
    </RouterLink>
    <RouterLink to="/my-events" activeClass="active" :aria-current="getAriaCurrent('/my-events')">MyEvents</RouterLink>
  </nav>
</template>

<style lang="scss">
a {
  display: inline-block;
  border-bottom: 1px solid var(--l-gray);
  padding: 0 1.3rem;
  margin-bottom: 1rem;
  text-align: center;

  &.active {
    border-bottom: 3px solid var(--m-blue);
    z-index: 1;
    position: relative;
  }
}
</style>
