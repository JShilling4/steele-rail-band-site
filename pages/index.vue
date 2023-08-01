<template>
  <div class="wrapper">
    <img class="logo" src="@/assets/images/logo.jpg" alt="" />

    <ul class="navlink-container">
      <li class="navlink">
        <RouterLink to="/shows" class="navlink-text">Shows</RouterLink>
      </li>
      <li class="navlink">
        <RouterLink to="/gallery" class="navlink-text">Gallery</RouterLink>
      </li>
      <li class="navlink">
        <RouterLink to="/about" class="navlink-text">About</RouterLink>
      </li>
      <li class="navlink">
        <RouterLink to="/contact" class="navlink-text">Contact</RouterLink>
      </li>
      <li class="navlink fb">
        <a
          href="https://www.facebook.com/steelerailband"
          noreferrer
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const title = ref("Steele Rail Band");
const description = ref("");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  height: 100%;
  height: 100vh;
}

.logo {
  margin-bottom: 6rem;

  @media screen and (max-width: 1024px) {
    /* height: 400px; */
  }
}

.navlink-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .navlink-text {
    @media screen and (max-width: 1024px) {
      font-size: 24px;
      padding: 0 2rem;
    }
  }
}
</style>
