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
              <p class="title">The Middle</p>
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
              <p class="title">Gunpowder & Lead</p>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F299489032548846%2F&show_text=false&width=267&t=0"
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
              <p class="title">Down In Mississippi</p>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F546211810900402%2F&show_text=false&width=267&t=0"
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
              <p class="title">Tush</p>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F1523048004766110%2F&show_text=false&width=267&t=0"
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
              <p class="title">Drink In My Hand</p>
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
              <p class="title">Heart On Fire</p>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F1028770155237605%2F&show_text=false&width=267&t=0"
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
              <p class="title">Stop Draggin' My Heart</p>
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
            <li>
              <p class="title">Seven Nation Army</p>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F675182124640035%2F&show_text=false&width=267&t=0"
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
              <p class="title">Play That Funky Music</p>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F754867566414024%2F&show_text=false&width=267&t=0"
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
const imageCount = 13;

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

  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
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
  flex-wrap: wrap;
  gap: 10px;
}

.image-gallery > li {
  width: 16%;

  @media screen and (max-width: 1024px) {
    width: 23%;
  }
  @media screen and (max-width: 768px) {
    width: 30%;
  }

  @media screen and (max-width: 540px) {
    width: 48%;
  }
}

.image-gallery li img {
  object-fit: cover;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-radius: 5px;
}

.video-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .title {
    margin-bottom: 4px;
  }
}

.video-gallery > li {
  flex-basis: 270px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
}

.video-gallery li iframe {
  object-fit: cover;
  max-width: 100%;
  height: 476px;
  vertical-align: middle;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    height: 400px;
  }
}
</style>
