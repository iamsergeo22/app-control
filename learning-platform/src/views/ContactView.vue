<template>
  <div class="home">
    <ContactPage />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactPage from "@/components/UI/ContactPage.vue"

export default {
  name: 'HomeView',
  components: {
    ContactPage
  }
}
</script>
