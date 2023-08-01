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
        <div class="row">
          <ul class="video-gallery">
            <li>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F6424770004236787%2F&show_text=false&width=267&t=0"
                width="267"
                height="476"
                style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
              ></iframe>
            </li>
            <li>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F827821695284020%2F&show_text=false&width=267&t=0"
                width="267"
                height="476"
                style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
              ></iframe>
            </li>
            <li>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F2281168242093724%2F&show_text=false&width=267&t=0"
                width="267"
                height="476"
                style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
              ></iframe>
            </li>
            <li>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F939100403817257%2F&show_text=false&width=267&t=0"
                width="267"
                height="476"
                style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
              ></iframe>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref("Steele Rail Band - Gallery");
const description = ref("Browse Steele Rail Band photos and videos.");
const imageCount = 12;

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
  max-width: 95%;

  @media screen and (max-width: 1200px) {
  }
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

.image-gallery {
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  gap: 10px;
}

.image-gallery > li {
  width: 175px;
  flex-grow: 1;
}

.image-gallery li img {
  object-fit: cover;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-radius: 5px;
}

/* image-gallery::after {
  content: "";
  flex-basis: 200px;
} */

.video-gallery {
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  gap: 10px;
}

.video-gallery > li {
  flex-basis: 270px;
}

.video-gallery li iframe {
  object-fit: cover;
  max-width: 100%;
  height: 476px;
  vertical-align: middle;
  border-radius: 5px;
}
</style>
