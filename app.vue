<template>
  <div class="app">
    <TheHeader v-if="currentRoute.path !== '/'" />
    <NuxtPage />
    <!-- <TheFooter /> -->
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const currentRoute = router.currentRoute;
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}

html {
  background-color: var(--bg-black);
}

body {
  font-family: Verdana, sans-serif;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  color: #fff;
  text-decoration: none;
}

.app {
  background-color: var(--bg-primary);
}

.page-wrapper {
  margin: 0 auto;
  color: #fff;
  padding: 2rem 2rem;

  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
  @media screen and (max-width: 556px) {
    padding: 0 2rem 4rem;
  }
  @media screen and (max-width: 430px) {
    padding: 0 1.5rem 2rem;
  }
}

.body-wrapper {
  min-height: 100vh;
  background: radial-gradient(
    var(--bg-secondary),
    var(--bg-secondary),
    var(--bg-primary)
  );
  background-size: cover;
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) var(--banner-color);
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background: var(--banner-color);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--color-primary);
  outline: 1px solid slategrey;
  border-radius: 10px;
}

.view-container {
  padding: 2rem 0;
  background-color: var(--color-primary);
}

.navlink-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .fa-facebook {
    font-size: 3rem;
    color: var(--color-primary-bright);
  }

  .navlink {
    font-family: "Yesteryear", sans-serif;
    position: relative;
    height: 100%;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 38px;
    text-align: right;
    cursor: pointer;

    a:not(.fb a) {
      display: inline-block;
      padding: 10px 35px;
      opacity: 1;
      color: var(--color-secondary);
      transition: opacity 0.3s;

      @media screen and (max-width: 768px) {
        padding: 15px 35px;
      }
      @media screen and (max-width: 430px) {
        padding: 15px 15px;
      }

      &:hover {
        color: var(--color-primary-bright);
      }
    }

    &.fb {
      font-size: 25px;
      padding: 10px 35px;
    }
  }
}
</style>
