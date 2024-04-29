<template>
  <div class="page-wrapper">
    <PageHeading>Gallery</PageHeading>

    <div class="view-container">
      <SelectorTabs
        :active-tab="activeTab"
        :options="tabOptions"
        @tab-change="(val) => (activeTab = val)"
      />
      <section v-show="activeTab === Tabs.Photo" class="photos">
        <div class="row">
          <ul class="image-gallery">
            <li v-for="image in showImages">
              <img :src="image.url" alt="" />
            </li>
          </ul>
        </div>
      </section>

      <section v-show="activeTab === Tabs.Video" class="videos">
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
import { type Tables } from "@/types";

const supabase = useSupabaseClient();

const title = ref("Steele Rail Band - Gallery");
const description = ref("Browse Steele Rail Band photos and videos.");
const showImages = ref<Tables<"show_images">[]>([]);
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
  {
    title: "American Band",
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fposts%2Fpfbid0iEBA6Pw7tPrtQ8nbqw7VDyvmfsECSc8BAE8B6sbAh6kg4LiaG5g9kEWTorrn3byjl&show_text=true&width=500",
  },
  {
    title: "Down In Mississippi",
    url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F546211810900402%2F&show_text=false&width=267&t=0",
  },
  {
    title: "Born to be Wild",
    url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fklutzwd%2Fvideos%2F1428913524660170%2F&show_text=false&width=267&t=0",
  },
  {
    title: "Need You Tonight",
    url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fkimberly.bollan%2Fvideos%2F3626160614325358%2F&show_text=false&width=267&t=0",
  },
  // {
  //   title: "Stop Draggin' My Heart",
  //   url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F939100403817257%2F&show_text=false&width=267&t=0",
  // },
  // {
  //   title: "Seven Nation Army",
  //   url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F675182124640035%2F&show_text=false&width=267&t=0",
  // },
  {
    title: "The Middle",
    url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsteelerailband%2Fvideos%2F6424770004236787%2F&show_text=false&width=267&t=0",
  },
];

enum Tabs {
  Photo = "photos",
  Video = "videos",
}
const { activeTab } = useTabs(Tabs.Photo);

const tabOptions = [
  {
    id: Tabs.Photo,
    label: "Photos",
  },
  {
    id: Tabs.Video,
    label: "Videos",
  },
];

async function getImages() {
  const { data: show_images, error } = await supabase
    .from("show_images")
    .select("*");
  if (!error) {
    showImages.value = show_images;
  }
}

onMounted(() => {
  getImages();
});

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

.photos {
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
}
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  & > li {
    width: 250px;
    height: 250px;

    @media screen and (max-width: 768px) {
      width: 200px;
      height: 200px;
    }

    @media screen and (max-width: 540px) {
      width: 150px;
      height: 150px;
    }

    img {
      object-fit: cover;
      object-position: top;
      width: 100%;
      height: 100%;
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
