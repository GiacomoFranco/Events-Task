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
  border-bottom: 1px solid var(--l-gray);
  min-width: 11.1rem;

  &.active {
    border-bottom: 3px solid var(--m-blue);
  }
}
</style>
