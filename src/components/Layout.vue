<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import EventsOverview from './EventsOverview.vue'
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <EventsOverview />
    <slot />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style>
header {
  height: 7.2rem;
  box-shadow: 4px 0px 12px 0px #60606033;
  padding: .8rem 3.2rem;
  background-color: var(--m-white);
}

main {
  flex-grow: 1;
  padding: 3.2rem;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7.6rem;
  padding: 2rem 0;
  background-color: var(--s-background);
}
</style>
