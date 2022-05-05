<template>
  <div class="home">
    <TheForm />
  </div>
</template>

<script>
// @ is an alias to /src
import TheForm from '@/components/TheForm.vue'

export default {
  name: 'HomeView',
  components: {
    TheForm
  }
}
</script>
