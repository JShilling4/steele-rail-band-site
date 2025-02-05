<template>
  <div class="wrapper">
    <NuxtImg
      provider="cloudinary"
      src="v1738789762/logo-nohat_xg5znc.jpg"
      width="720"
      height="462"
      class="logo"
      preload
      alt="Steele Rail Band logo"
      fetchpriority="high"
    />

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
          <font-awesome-icon :icon="['fab', 'facebook']" aria-hidden="true" />
          <span class="sr-only">Facebook</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const title = ref("Steele Rail Band");
const description = ref(
  "The Steele Rail Band is a variety band that covers music spanning several decades in many different styles - such as country, southern rock, alternative, classic rock and blues.",
);

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
  max-width: 100%;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
  @media screen and (max-width: 768px) {
    height: 240px;
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
    @media screen and (max-width: 470px) {
      font-size: 20px;
      padding: 0 1rem;
    }
  }
  .navlink.fb {
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      padding: 10px;
    }
  }
}
</style>
