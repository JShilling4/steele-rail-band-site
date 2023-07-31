<template>
  <header class="outer-wrapper">
    <nav class="wrapper">
      <RouterLink class="logo" to="/">
        <img class="logo" src="@/assets/images/logo.jpg" alt="" />
      </RouterLink>
      <ul v-if="showMenu" class="navlink-container">
        <li class="navlink">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="navlink">
          <RouterLink to="/shows">Shows</RouterLink>
        </li>
        <li class="navlink">
          <RouterLink to="/gallery">Gallery</RouterLink>
        </li>
        <li class="navlink">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li class="navlink">
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
        <li class="navlink fb">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </li>
      </ul>
      <i class="fas fa-bars menu-toggle" @click="toggleMenu"></i>
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
    if (windowWidth.value <= 768) showMenu.value = false;
  },
  { immediate: true },
);

onMounted((): void => {
  window.addEventListener("resize", onResize);
  if (windowWidth.value <= 768) showMenu.value = false;
});

onUnmounted((): void => {
  window.removeEventListener("resize", onResize);
});

function onResize(): void {
  windowWidth.value = window.innerWidth;
  windowWidth.value >= 769 ? (showMenu.value = true) : (showMenu.value = false);
}

function toggleMenu(): void {
  showMenu.value = !showMenu.value;
}
</script>

<style lang="scss" scoped>
.outer-wrapper {
  background-color: var(--bg-black);
}

.wrapper {
  position: relative;
  width: 100%;
  z-index: 100;
  margin: 0 auto;
  padding: 0 3rem 0 1rem;
  background-color: var(--bg-black);
}

.logo {
  height: 200px;
}

nav {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.menu-toggle {
  display: none;
  position: absolute;
  right: 2rem;
  opacity: 0.8;
  font-size: 2rem;
  color: var(--color-primary);

  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 430px) {
    right: 15px;
    font-size: 1.5rem;
  }
}
</style>
