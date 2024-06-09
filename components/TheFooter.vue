<template>
  <footer>
    <div class="content-wrapper">
      <div class="top-bar">
        <NuxtImg
          provider="cloudinary"
          src="v1717951758/steele_rail_band/logos/footer-logo_b101hs.jpg"
          alt="Steele Rail Band logo"
          class="footer-logo"
        />
        <a
          href="https://www.facebook.com/steelerailband"
          noreferrer
          target="_blank"
          class="social-icon"
        >
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            aria-hidden="true"
            class="icon"
          />
          <span class="sr-only">Facebook</span>
        </a>
        <ul>
          <li class="navlink">
            <RouterLink to="/shows">Shows</RouterLink>
          </li>
          <li class="navlink">
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li class="navlink">
            <RouterLink to="/gallery">Gallery</RouterLink>
          </li>
          <li class="navlink">
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </div>

      <div class="bottom-bar">
        <p>
          &copy; {{ new Date().getFullYear() }} All Rights Reserved - Steele
          Rail Band
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style lang="scss">
footer {
  background-color: var(--banner-color);
  padding: 2rem 0 0;

  @media screen and (max-width: 1024px) {
    border-top: 1px solid rgba(255, 255, 255, 0.533);
  }
}

footer .content-wrapper {
  text-align: center;

  .footer-logo {
    height: 120px;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 2rem 0 1rem;
  }

  .top-bar {
    padding-bottom: 1rem;
    font-weight: 300;
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .social-icon {
      margin-top: 1rem;
      color: #fff;
    }
    .icon {
      color: #fff;
      font-size: 2rem;
    }
  }

  .bottom-bar {
    background-color: rgb(54, 54, 54);
    padding: 1rem 0 1rem;

    p {
      font-weight: 300;
      font-family: Roboto;
      font-size: 12px;
      letter-spacing: 1px;
      color: white;
      @media screen and (max-width: 768px) {
        font-size: 10px !important;
      }
    }
  }
}

footer .navlink {
  font-size: 14px !important;
  font-weight: 300;
  letter-spacing: 2px;
  opacity: 0.7;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 10px !important;
  }

  a {
    padding: 10px 25px !important;

    @media screen and (max-width: 430px) {
      padding: 10px 15px !important;
    }
  }
}
</style>
