<template>
  <nav>
    <RouterLink to="/all" activeClass="active">All</RouterLink>
    <RouterLink to="/upcoming" activeClass="active">Upcoming</RouterLink>
    <RouterLink to="/past-events" activeClass="active">Past Events</RouterLink>
    <RouterLink to="/my-events" activeClass="active">My Events</RouterLink>
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
