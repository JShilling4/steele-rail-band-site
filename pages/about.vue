<template>
  <div class="page-wrapper">
    <PageHeading>About The Band</PageHeading>
    <div class="content-wrapper">
      <div class="content-container">
        <p class="copy">
          The Steele Rail Band is a variety band covering music that spans
          several decades in the style of country, southern rock, alternative,
          classic rock and blues. We've put together a show with an emphasis on
          dancing, singing along and just having a great time. We are available
          to play venues of all sizes including fairs/festivals, campgrounds,
          clubs/bars, casinos & private parties.
        </p>
        <div class="member-images">
          <div class="member-container">
            <img
              src="@/assets/images/ken-2.jpg"
              alt="Ken on lead & backup vocals - Steele Rail Band"
              class="member-image"
            />
            <p class="member-name"><span>Ken</span> Lead Vocals</p>
          </div>
          <div class="member-container">
            <img
              src="@/assets/images/amber-1.jpg"
              alt="Amber on lead vocals - Steele Rail Band"
              class="member-image"
            />
            <p class="member-name"><span>Amber</span> Lead Vocals</p>
          </div>
          <div class="member-container">
            <img
              src="@/assets/images/randy-1.jpg"
              alt="Randy on bass & backup vocals - Steele Rail Band"
              class="member-image"
            />
            <p class="member-name"><span>Randy</span> Bass/Vocals</p>
          </div>
          <div class="member-container">
            <img
              src="@/assets/images/mike-1.jpg"
              alt="Mike on drums & vocals - Steele Rail Band"
              class="member-image"
            />
            <p class="member-name"><span>Mike</span> Drums/Vocals</p>
          </div>
          <div class="member-container">
            <img
              src="@/assets/images/justin-1.jpg"
              alt="Justin on lead guitar - Steele Rail Band"
              class="member-image"
            />
            <p class="member-name"><span>Justin</span> Lead Guitar</p>
          </div>
          <div class="member-container">
            <img
              src="@/assets/images/kevin-1.jpg"
              alt="Kevin on rhythm guitar - Steele Rail Band"
              class="member-image"
            />
            <p class="member-name"><span>Kevin</span> Rhythm Guitar</p>
          </div>
          <div class="member-container">
            <img
              src="@/assets/images/jim-1.jpg"
              alt="Jim on banjo and keyboard - Steele Rail Band"
              class="member-image"
            />
            <p class="member-name"><span>Jim</span> Keyboard/Banjo</p>
          </div>
          <div class="member-container">
            <img
              src="@/assets/images/brent-1.jpg"
              alt="Brent on sound & vocals - Steele Rail Band"
              class="member-image"
            />
            <p class="member-name"><span>Brent</span> Sound Engineer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import PageHeading from "@/components/PageHeading.vue";

const title = ref("Steele Rail Band - About");
const description = ref("");

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
.content-wrapper {
  background-image: url("/assets/images/page-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 4rem 0;
  @media screen and (max-width: 1024px) {
    background: none;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
}
.content-container {
  max-width: 1400px;
  margin: 0 auto;
}

.copy {
  font-family: Roboto, sans-serif;
  margin: 0 auto;
  max-width: 85%;
  line-height: 2;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 3rem;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    max-width: initial;
  }
  @media screen and (max-width: 540px) {
    font-size: 16px;
    max-width: initial;
  }
}

.member-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 90%;
  margin: 0 auto;
  border-radius: 40px;
}
.member-container {
  margin: 2rem 1rem;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }

  .member-image {
    border-radius: 10px;
    border: 2px solid var(--color-secondary);
    height: 300px;
    width: 250px;
  }
  .member-name {
    margin-top: 1rem;
    text-align: center;
    span {
      font-family: "Yesteryear";
      font-size: 28px;
      color: var(--color-primary-bright);
      background-color: var(--bg-black);
      border-radius: 10px;
      padding: 10px;
      width: 5.5rem;
      display: inline-block;
    }
  }
}
</style>
