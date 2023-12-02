<template>
  <div class="page-wrapper">
    <PageHeading>About The Band</PageHeading>
    <p class="copy">
      <span class="accent-red">Steele Rail</span>
      <span>&nbsp;is a versatile country band that covers&nbsp;</span>
      <span class="accent-red">music</span>
      <span>&nbsp;spanning several decades. In addition to&nbsp;</span>
      <span class="accent-red">country</span
      ><span>, we add some southern</span> <span class="accent-red">rock</span
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
            <img
              src="@/assets/images/ken-1.jpg"
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
            <p class="member-name"><span>Justin</span> Guitar</p>
          </div>
          <div class="member-container">
            <img
              src="@/assets/images/jim-1.jpg"
              alt="Jim on banjo and keyboard - Steele Rail Band"
              class="member-image"
            />
            <p class="member-name"><span>Jim</span> Keys/Banjo/Mandolin</p>
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
  background-image: url("/assets/images/page-bg.jpg");
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
