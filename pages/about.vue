<template>
  <div class="page-wrapper">
    <PageHeading>About The Band</PageHeading>
    <p class="copy">
      <span class="accent-red">Steele Rail</span>
      <span
        >&nbsp;is a <span class="accent-red">variety</span> band that
        covers&nbsp;</span
      >
      <span class="accent-red">music</span>
      <span>&nbsp;spanning several decades. We play&nbsp;</span>
      <span class="accent-red">country</span><span>, southern&nbsp;</span>
      <span class="accent-red">rock</span
      ><span>, alternative, classic rock and&nbsp;</span>
      <span class="accent-red">blues</span>. <span>If you feel like</span>
      <span class="accent-red">&nbsp;dancing</span
      ><span>, singing along or just enjoying the music and&nbsp;</span>
      <span class="accent-red">atmosphere</span
      ><span
        >, we've put together a show that has you covered. We play venues of all
        sizes including fairs/festivals, campgrounds, clubs/bars, casinos &
        private parties.</span
      >
    </p>
    <div class="content-wrapper">
      <div class="content-container">
        <div class="member-images">
          <div class="member-container">
            <NuxtImg
              provider="cloudinary"
              src="v1717951762/steele_rail_band/members/ken-1_q9yg1n.jpg"
              class="member-image"
              alt="Ken on lead & backup vocals - Steele Rail Band"
            />
            <p class="member-name"><span>Ken</span> Lead Vocals</p>
          </div>
          <div class="member-container">
            <NuxtImg
              provider="cloudinary"
              src="v1717951755/steele_rail_band/members/amber-1_anuaoc.jpg"
              class="member-image"
              alt="Amber on lead vocals - Steele Rail Band"
            />
            <p class="member-name"><span>Amber</span> Lead Vocals</p>
          </div>
          <div class="member-container">
            <NuxtImg
              provider="cloudinary"
              src="v1717951765/steele_rail_band/members/randy-1_ilvn8y.jpg"
              class="member-image"
              alt="Randy on bass & backup vocals - Steele Rail Band"
            />
            <p class="member-name"><span>Randy</span> Bass/Vocals</p>
          </div>
          <div class="member-container">
            <NuxtImg
              provider="cloudinary"
              src="v1717951763/steele_rail_band/members/mike-1_qxbftt.jpg"
              class="member-image"
              alt="Mike on drums & vocals - Steele Rail Band"
            />
            <p class="member-name"><span>Mike</span> Drums/Vocals</p>
          </div>
          <div class="member-container">
            <NuxtImg
              provider="cloudinary"
              src="v1717951760/steele_rail_band/members/justin-1_kixjl7.jpg"
              class="member-image"
              alt="Justin on lead guitar - Steele Rail Band"
            />
            <p class="member-name"><span>Justin</span> Lead Guitar</p>
          </div>
          <div class="member-container">
            <NuxtImg
              provider="cloudinary"
              src="v1717951759/steele_rail_band/members/jim-1_yqsdxn.jpg"
              class="member-image"
              alt="Jim on keys, banjo and keyboard - Steele Rail Band"
            />
            <p class="member-name"><span>Jim</span> Keys/Banjo/Mandolin</p>
          </div>
          <div class="member-container">
            <NuxtImg
              provider="cloudinary"
              src="v1717951756/steele_rail_band/members/brent-1_srlkft.jpg"
              class="member-image"
              alt="Brent, sound engineer for Steele Rail Band"
            />
            <p class="member-name"><span>Brent</span> Sound Engineer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref("Steele Rail Band - About");
const description = ref(
  "About the Steele Rail Band. Member lineup and other band information.",
);

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
  background-image: url("https://res.cloudinary.com/damqu5egp/image/upload/v1717951765/steele_rail_band/backgrounds/page-bg_mjzrxz.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 2rem 0;

  @media screen and (max-width: 1024px) {
    background: none;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
}
.content-container {
  max-width: 1400px;
  margin: 0 auto;
}

.copy {
  font-family: Roboto, sans-serif;
  max-width: 1400px;
  line-height: 2;
  letter-spacing: 0.9px;
  font-size: 20px;
  font-weight: 300;
  margin: 2rem auto 3rem;
  padding: 0 4rem;
  text-align: center;
  padding: 2rem 0;

  span:not(.accent-red) {
    animation: fadein 4.5s cubic-bezier(0.69, 0.21, 0.84, 0.72);
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    max-width: initial;
    margin-bottom: 0;
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
  gap: 15px;
  margin: 0 auto 3rem;
  border-radius: 40px;
}
.member-container {
  margin: 2rem 1rem 4rem;
  height: 300px;
  width: 250px;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 3rem;
  }

  .member-image {
    border-radius: 10px;
    border: 2px solid var(--color-secondary);
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    object-position: top;
  }
  .member-name {
    margin-top: 1rem;

    @media screen and (max-width: 768px) {
      margin-top: 0;
    }
    span {
      font-family: "Yesteryear";
      font-size: 28px;
      color: var(--color-primary-bright);
      background-color: var(--bg-black);
      border-radius: 10px;
      padding: 5px 10px;
      display: inline-block;
    }
  }
}

.accent-red {
  display: inline-block;
  font-weight: bold;
  color: var(--color-primary-bright);
  animation: shrink 3.5s cubic-bezier(0.69, 0.21, 0.84, 0.72);
}

@keyframes shrink {
  0% {
    transform: scale(2.5) translateY(-5px);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
