<template>
  <div class="page-wrapper">
    <PageHeading>Gallery</PageHeading>
    <div class="view-container">
      <section class="photos">
        <h2>Photos</h2>
        <div class="row">
          <ul class="image-gallery">
            <li v-for="n in imageCount">
              <img :src="`/images/band-${n}.jpg`" alt="" />
            </li>
          </ul>
        </div>
      </section>
      <section class="videos">
        <h2>Videos</h2>
        <div class="row"></div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref("Steele Rail Band - Gallery");
const description = ref("Browse Steele Rail Band photos and videos.");
const imageCount = 7;

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
section {
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1530px;
  &.photos {
    border: 2px solid var(--color-secondary);
    background-color: var(--banner-color);
  }
  &.videos {
    border: 2px solid var(--color-secondary);
    background-color: var(--banner-color);
    color: var(--color-primary);

    .column {
      flex: 33%;
      max-width: 400px;
    }

    @media screen and (max-width: 1024px) {
      .column {
        flex: 50%;
        max-width: 50%;
      }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
      .column {
        flex: 100%;
        max-width: 100%;
      }
    }
  }
}
h2 {
  font-weight: 500;
  color: var(--color-primary-bright);
  margin: 0 0 2rem;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    height: 3px;
    width: 6rem;
    left: 0;
    bottom: -10px;
    background-color: var(--color-secondary);
  }
}
/* .row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
} */

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-gallery > li {
  flex-basis: 200px;
}

.image-gallery li img {
  object-fit: cover;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-radius: 5px;
}

image-gallery::after {
  content: "";
  flex-basis: 200px;
}
</style>
