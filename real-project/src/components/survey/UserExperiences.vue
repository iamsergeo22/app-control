/* eslint-disable vue/valid-v-else */
<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperience">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading....</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences Found. Please try to add some surbey</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },

  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },

  methods: {
    loadExperience() {
      this.isLoading = true;
      //it is a method that allows us to send data to server as well
      fetch('https://vue-http-demo-f6be9-default-rtdb.firebaseio.com/surveys.json').then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((data) => {
        this.isLoading = false;
        const results = [];
        for (const id in data) {
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating,
          });
          
        }


        this.results = results;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
        this.error = 'Failed to fetch data - please try again later';

      });
    }
  },
  //Mounted
  mounted() {
    this.loadExperience();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>