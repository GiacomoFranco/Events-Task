<template>
  <div class="user-profile">
    <div class="user-profile__image">
      <img src="@/assets/images/user-image.webp" alt="">
    </div>
    <p class="user-profile__name">Organization Name</p>
  </div>
</template>
<style lang="scss">
.user-profile {
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &__image {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    &__image {
      margin-right: 2rem;
    }

    &__name {
      display: none;
    }
  }
}
</style>
