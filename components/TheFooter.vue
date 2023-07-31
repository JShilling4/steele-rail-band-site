<template>
  <footer>
    <div class="content-wrapper">
      <div class="top-bar">
        <a
          href="https://www.facebook.com/profile.php?id=100082719523304"
          target="_blank"
        >
          <i class="fab fa-facebook icon"></i>
        </a>
        <ul>
          <li class="navlink">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="navlink"><a @click="scrollTo('about')">About</a></li>
          <li class="navlink">
            <RouterLink to="/gallery">Gallery</RouterLink>
          </li>
          <li class="navlink">
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
        <p>Booking/Info: <span>redcabin44@gmail.com</span></p>
      </div>

      <div class="bottom-bar">
        <p>
          &copy; {{ new Date().getFullYear() }} All Rights Reserved - Whiskey
          Midnight
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

async function scrollTo(section: string): Promise<void> {
  if (route.name === "home") {
    window.location.hash = "";
    window.location.hash = `#${section}Section`;
  } else {
    await router.push("/");
    window.location.hash = "";
    window.location.hash = `#${section}Section`;
    router.replace("/");
  }
}
</script>

<style lang="scss">
footer {
  background-color: var(--banner-color);
  padding: 2rem 0 0;
  border-top: 2px solid var(--color-secondary);
}

.content-wrapper {
  text-align: center;

  .icon {
    color: var(--color-primary);
    font-size: 1.75rem;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 1rem 0 1rem;
  }

  .top-bar {
    padding-bottom: 1rem;
    p {
      margin-bottom: 1rem;
      font-weight: 500;
      font-size: 12px;
      color: var(--color-primary-faded);
      span {
        color: var(--orange-faded);
      }
    }
  }

  .bottom-bar {
    background-color: var(--color-secondary);
    padding: 1rem 0 1rem;
    color: var(--color-primary-faded);

    p {
      /* margin-bottom: 1rem; */
      font-weight: 500;
      font-size: 12px;

      span {
        color: var(--orange);
      }
    }
  }
}

footer .navlink {
  font-size: 14px !important;
  letter-spacing: 0.5px !important;

  a {
    padding: 10px 25px !important;

    @media screen and (max-width: 430px) {
      padding: 10px 15px !important;
    }
  }
}
</style>
