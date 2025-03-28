<template>
  <header class="outer-wrapper">
    <nav class="wrapper">
      <RouterLink class="logo" to="/">
        <NuxtImg
          provider="cloudinary"
          src="v1717951758/steele_rail_band/logos/footer-logo_b101hs.jpg"
          class="logo"
        />
        <span class="sr-only">Home</span>
      </RouterLink>
      <ul v-if="showMenu" class="navlink-container">
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
      <font-awesome-icon
        :icon="['fas', 'bars']"
        class="menu-toggle"
        @click="toggleMenu"
      />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const showMenu = ref(true);
const windowWidth = ref(window.innerWidth);

const route = useRoute();

watch(
  () => route.path,
  () => {
    if (windowWidth.value <= 1024) showMenu.value = false;
  },
  { immediate: true },
);

onMounted((): void => {
  window.addEventListener("resize", onResize);
  if (windowWidth.value <= 1024) showMenu.value = false;
});

onUnmounted((): void => {
  window.removeEventListener("resize", onResize);
});

function onResize(): void {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value >= 1025) {
    showMenu.value = true;
  } else {
    showMenu.value = false;
  }
}

function toggleMenu(): void {
  showMenu.value = !showMenu.value;
}
</script>

<style lang="scss" scoped>
.outer-wrapper {
  background-color: var(--bg-primary);
}

.wrapper {
  position: relative;
  width: 100%;
  z-index: 100;
  margin: 0 auto;
  padding: 1rem 3rem 1rem 2rem;
  background-color: var(--bg-primary);

  @media screen and (max-width: 1200px) {
    padding: 0.5rem 1rem 0 1.5rem;
  }
}

.logo {
  height: 125px;

  @media screen and (max-width: 1024px) {
    height: 100px;
  }
  @media screen and (max-width: 430px) {
    height: 65px;
  }
}

nav {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.navlink-container {
  margin-top: -3rem;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 6rem;
    background-color: var(--banner-color);
    right: 0;
    padding: 1rem 0;
    height: unset;
    width: 10rem;
    display: block;
    border: 1px solid var(--color-primary-bright);
  }
  @media screen and (max-width: 430px) {
    /* top: 3.95rem; */
    width: 12rem;
    display: block;
  }

  .navlink a {
    font-size: 30px;

    @media screen and (max-width: 1200px) {
      font-size: 24px;
      padding: 1rem 2rem;
    }
    @media screen and (max-width: 1024px) {
      font-size: 22px;
      padding: 1rem 1.5rem;
    }
  }
  .navlink.fb {
    @media screen and (max-width: 1024px) {
      padding: 1rem 0 0;
    }
  }
}

.router-link-active {
  color: var(--color-primary-bright) !important;
}

.menu-toggle {
  display: none;
  position: absolute;
  right: 2rem;
  top: 1rem;
  opacity: 0.8;
  font-size: 2rem;
  color: var(--color-secondary);

  @media screen and (max-width: 1024px) {
    display: block;
  }
  @media screen and (max-width: 430px) {
    right: 20px;
  }
}
</style>
