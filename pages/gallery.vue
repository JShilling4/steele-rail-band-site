<template>
  <div class="page-wrapper">
    <PageHeading>Gallery</PageHeading>

    <div class="view-container">
      <div class="tabs-container">
        <div
          :class="['tab', { '--active': activeTab === 'photos' }]"
          @click="activeTab = 'photos'"
        >
          Photos
        </div>
        <div
          :class="['tab', { '--active': activeTab === 'videos' }]"
          @click="activeTab = 'videos'"
        >
          Videos
        </div>
      </div>

      <section v-if="activeTab === 'photos'" class="photos">
        <div class="row">
          <ul class="image-gallery">
            <li v-for="n in imageCount">
              <img :src="`/images/band-${n}.jpg`" alt="" />
            </li>
          </ul>
        </div>
      </section>

      <section v-if="activeTab === 'videos'" class="videos">
        <div class="row">
          <ul class="video-gallery">
            <li v-for="video in fbVideos">
              <iframe
                :src="video.url"
                width="267"
                height="476"
                style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
              ></iframe>
              <p class="title">{{ video.title }}</p>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref("Steele Rail Band - Gallery");
const description = ref("Browse Steele Rail Band photos and videos.");
const imageCount = 28;
const fbVideos = [
  {
    title: "Strawberry Wine",
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fposts%2Fpfbid02CNS8QG6qexMR7FCe3cyRULkWZ4mHhRiBFx1cNkiku6A6XsPzZQNLUvJqXZzFUX2ql&show_text=true&width=500",
  },
  {
    title: "Drink In My Hand",
    url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F2281168242093724%2F&show_text=false&width=267&t=0",
  },
  {
    title: "Heart On Fire",
    url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F1028770155237605%2F&show_text=false&width=267&t=0",
  },
  {
    title: "Play That Funky Music",
    url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F754867566414024%2F&show_text=false&width=267&t=0",
  },
  {
    title: "Whitehouse Road",
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fposts%2Fpfbid0tXENoAy9dzzEc9DUvbAyPs99Nn6bgjwsgJcboeKfn7tiK9BYmmjkoFZ3UfUVEC6pl&show_text=true&width=500",
  },
  // {
  //   title: "Gunpowder & Lead",
  //   url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F299489032548846%2F&show_text=false&width=267&t=0",
  // },
  {
    title: "Down In Mississippi",
    url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F546211810900402%2F&show_text=false&width=267&t=0",
  },
  // {
  //   title: "Tush",
  //   url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F1523048004766110%2F&show_text=false&width=267&t=0",
  // },

  {
    title: "Stop Draggin' My Heart",
    url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F939100403817257%2F&show_text=false&width=267&t=0",
  },
  // {
  //   title: "Seven Nation Army",
  //   url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F675182124640035%2F&show_text=false&width=267&t=0",
  // },
  {
    title: "The Middle",
    url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F6424770004236787%2F&show_text=false&width=267&t=0",
  },
];

const activeTab = ref("videos");

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

.tabs-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 4rem 0;

  .tab {
    font-family: Roboto;
    font-size: 20px;
    color: white;
    font-weight: 700;
    letter-spacing: 2px;
    border-radius: 10px;
    padding: 1rem;
    border: 1px solid white;
    cursor: pointer;

    &.--active {
      background-color: white;
      color: black;
    }

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  & > li {
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

    img {
      object-fit: cover;
      max-width: 100%;
      border-radius: 5px;
    }
  }
}

.video-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  .title {
    margin-bottom: 4px;
    padding: 10px;
    border-bottom: 1px solid white;
  }

  & > li {
    flex-basis: 270px;
    @media screen and (max-width: 768px) {
      width: 200px;
    }

    iframe {
      object-fit: cover;
      max-width: 100%;
      height: 476px;
      vertical-align: middle;
      border-radius: 5px;
      @media screen and (max-width: 768px) {
        height: 400px;
      }
    }
  }
}
</style>
