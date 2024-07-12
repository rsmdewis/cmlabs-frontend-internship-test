<template>
  <div class="meal-detail">
    <h1>{{ meal.strMeal }}</h1>
    <div class="meal-image">
      <img :src="meal.strMealThumb" :alt="meal.strMeal">
    </div>
    <div class="meal-info">
      <div class="meal-ingredients">
        <h2>Ingredients:</h2>
        <ul>
          <li v-for="(ingredient, index) in ingredients" :key="index">
            {{ ingredient }} - {{ measures[index] }}
          </li>
        </ul>
      </div>
      <div class="meal-instructions">
        <h2>Instructions:</h2>
        <p>{{ meal.strInstructions }}</p>
      </div>
    </div>
    <div class="meal-video">
      <h2>Tutorial</h2>
      <iframe width="640" height="360" :src="embedYoutubeUrl" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import { getMealDetail } from '../services/api';

export default {
  data() {
    return {
      meal: {},
      ingredients: [],
      measures: [],
    };
  },
  mounted() {
    getMealDetail(this.$route.params.id).then(response => {
      this.meal = response.data.meals[0];
      // Extract ingredients and measures
      this.ingredients = this.extractIngredients(response.data.meals[0]);
      this.measures = this.extractMeasures(response.data.meals[0]);
    });
  },
  computed: {
    embedYoutubeUrl() {
      if (this.meal.strYoutube) {
        // Extract video ID from YouTube URL
        const videoId = this.meal.strYoutube.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
      } else {
        return null;
      }
    },
  },
  methods: {
    extractIngredients(meal) {
      let ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient) {
          ingredients.push(ingredient);
        }
      }
      return ingredients;
    },
    extractMeasures(meal) {
      let measures = [];
      for (let i = 1; i <= 20; i++) {
        const measure = meal[`strMeasure${i}`];
        if (measure) {
          measures.push(measure);
        }
      }
      return measures;
    },
  },
};
</script>

<style scoped>
.meal-detail {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dua kolom */
  gap: 20px;
  margin: 20px auto;
  max-width: 1200px;
}

.meal-image {
  grid-column: 1 / 2; /* Menempatkan gambar di kolom pertama */
}

.meal-info {
  grid-column: 2 / 3; /* Menempatkan informasi di kolom kedua */
}

.meal-ingredients {
  margin-bottom: 20px;
}

.meal-ingredients ul {
  list-style-type: none;
  padding: 0;
}

.meal-ingredients li {
  margin-bottom: 5px;
}

.meal-video {
  grid-column: 1 / -1; /* Memanjangkan video di seluruh lebar */
  text-align: center;
}

.meal-video h3 {
  margin-bottom: 10px;
}

.meal-video iframe {
  width: 100%; /* Memenuhi lebar parent */
  height: 500px; /* Tinggi video */
}
</style>
