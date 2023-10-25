<template>
  <div class="page-wrapper">
    <PageHeading>Contact Us</PageHeading>
    <div class="content-wrapper">
      <div class="container">
        <p class="copy">
          If you have questions, comments, feedback or would like to discuss
          booking us at your venue or private event, please send us a message
          here and we will get back to you as soon as we are able.
        </p>
        <div class="content">
          <form name="contacts-form" class="contactForm" method="POST" netlify>
            <input type="hidden" name="form-name" value="contacts-form" />
            <InputGroup>
              <FormLabel>Name</FormLabel>
              <TextInput v-model="contactForm.name" name="name" required />
            </InputGroup>
            <InputGroup>
              <FormLabel>Email or phone number</FormLabel>
              <TextInput v-model="contactForm.email" name="email" required />
            </InputGroup>
            <InputGroup>
              <FormLabel>Message</FormLabel>
              <TextBox v-model="contactForm.message" name="message" required />
            </InputGroup>

            <AppButton type="submit" class="primary">Send Message</AppButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";
import InputGroup from "@/components/InputGroup.vue";
import FormLabel from "@/components/FormLabel.vue";
import TextInput from "@/components/TextInput.vue";
import TextBox from "@/components/TextBox.vue";
import AppButton from "@/components/AppButton.vue";
import { ref } from "vue";

const contactForm = ref({
  name: null,
  email: null,
  message: null,
});

const title = ref("Steele Rail Band - Contact");
const description = ref(
  "Contact Steele Rail Band using this form or the provided email address for questions, booking and information.",
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
  padding: 4rem 0;
  @media screen and (max-width: 1024px) {
    background: none;
    padding: 2rem 0;
  }
}
.container {
  max-width: var(--wrapper-width);
  margin: 0 auto;

  .copy {
    font-family: Roboto;
    margin: 0 auto 2rem;
    line-height: 1.75;
    font-size: 19px;
    letter-spacing: 0.9px;
    color: var(--copy-white-faded);
    padding: 0 8rem 4rem;

    @media screen and (max-width: 1200px) {
      width: 70%;
      padding: 0 1rem;
    }

    @media screen and (max-width: 556px) {
      width: 100%;
      font-size: 15px;
    }

    span {
      color: var(--color-primary);
      font-weight: 500;
    }
  }
}

.heading-container {
  text-align: center;
}

.content {
  display: flex;
  margin-top: 1rem;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  .contactForm {
    width: 100%;
    padding: 0 8rem 4rem;
    @media screen and (max-width: 1200px) {
      width: 70%;
      order: 2;
      padding: 0 1rem;
    }
    @media screen and (max-width: 556px) {
      width: 100%;
    }
  }
}

.page-wrapper {
  @media screen and (max-width: 1024px) {
    padding-bottom: 4rem;
  }
}

.hidden {
  display: none;
}
</style>
