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
    <section class="overview">
      <EventsOverview />
    </section>
    <section class="content">
      <slot />
    </section>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style lang="scss">
header {
  height: 7.2rem;
  box-shadow: 4px 0px 12px 0px #60606033;
  padding: .8rem 3.2rem;
  background-color: var(--m-white);
}

main {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  flex-grow: 1;
  padding: 3.2rem;
  background-color: var(--m-background);

  section.overview {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  section.content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
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
