<template>
    <div class="meal-detail">
      <img :src="meal.strMealThumb" :alt="meal.strMeal">
      <h1>{{ meal.strMeal }}</h1>
      <p>{{ meal.strInstructions }}</p>
      <a :href="meal.strYoutube" target="_blank">Watch on YouTube</a>
    </div>
  </template>
  
  <script>
  import { getMealDetail } from '../services/api';
  
  export default {
    data() {
      return {
        meal: {},
      };
    },
    mounted() {
      getMealDetail(this.$route.params.id).then(response => {
        this.meal = response.data.meals[0];
      });
    },
  };
  </script>
  
  <style>
  .meal-detail {
    text-align: center;
  }
  .meal-detail img {
    max-width: 100%;
  }
  </style>
  