// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // document head injections
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        {
          property: "og:title",
          content: "Ride The Rail | Steele Rail Band",
        },
        {
          property: "og:url",
          content: "https://www.steelerailband.com",
        },
        {
          property: "og:site_name",
          content: "Steele Rail Band",
        },
        {
          property: "og:image",
          content: "https://www.steelerailband.com/og-image.jpg",
        },
        {
          name: "description",
          content:
            "The Steele Rail Band is a variety band that covers music spanning several decades in many different styles - such as country, southern rock, alternative, classic rock and blues.",
        },
        {
          name: "keywords",
          content: "music, band, country, rock, blues, indiana, dancing",
        },
      ],
      script: [],
      style: [],
      link: [
        {
          rel: "canonical",
          href: "https://www.steelerailband.com",
        },
      ],
      title: "Steele Rail Band | Ride The Rail",
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: "Javascript is required" },
      ],
    },
  },
  css: [
    "assets/sass/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  ssr: false,
});
