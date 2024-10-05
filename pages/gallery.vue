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
            <li v-for="image in showImages" :key="image.id">
              <img :src="image.url" alt="" >
            </li>
          </ul>
        </div>
      </section>

      <section v-show="activeTab === Tabs.Video" class="videos">
        <div class="row">
          <ul class="video-gallery">
            <li v-for="video in videos" :key="video.title">
              <iframe
                :src="video.url"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              />
              <p class="title">{{ video.title }}</p>
            </li>
            <li/>
            <li/>
            <li/>
            <li/>
            <li/>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tables } from "@/types";

const supabase = useSupabaseClient();

const title = ref("Steele Rail Band - Gallery");
const description = ref("Browse Steele Rail Band photos and videos.");
const showImages = ref<Tables<"show_images">[]>([]);
const videos = [
  {
    title: "Strawberry Wine",
    url: "https://www.youtube.com/embed/Bp1EiUNBl3w?si=G3Ha3UxjOJotBMYF",
  },
  {
    title: "Whitehouse Road",
    url: "https://www.youtube.com/embed/Rw4-zGXdw7k?si=649WeUehpIdsNQNH",
  },
  {
    title: "American Band",
    url: "https://www.youtube.com/embed/DN--XwKvQlE?si=XnFGtEPeXQxirU3M",
  },
  {
    title: "Born to be Wild",
    url: "https://www.youtube.com/embed/mTMkzYXETYY?si=nm9yaOT1z_VgrFKr",
  },
  {
    title: "Need You Tonight",
    url: "https://www.youtube.com/embed/-j4w7tdd_IQ?si=jahZQNJxzGzMmfLz",
  },
];

enum Tabs {
  Photo = "photos",
  Video = "videos",
}
const { activeTab } = useTabs(Tabs.Photo);
const loadingImages = ref(false);
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
  loadingImages.value = true;
  const { data: show_images, error } = await supabase
    .from("show_images")
    .select("*");
  if (!error) {
    showImages.value = show_images;
    loadingImages.value = false;
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
