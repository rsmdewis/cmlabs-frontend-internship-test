<template>
    <div class="meal-list">
      <div v-for="meal in meals" :key="meal.idMeal" class="meal-item">
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
        <h3>{{ meal.strMeal }}</h3>
        <router-link :to="`/meal/${meal.idMeal}`">View Details</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { getMealsByCategory } from '../services/api';
  
  export default {
    props: ['category'],
    data() {
      return {
        meals: [],
      };
    },
    mounted() {
      getMealsByCategory(this.category).then(response => {
        this.meals = response.data.meals;
      });
    },
  };
  </script>
  
  <style>
  .meal-list {
    display: flex;
    flex-wrap: wrap;
  }
  .meal-item {
    margin: 10px;
    text-align: center;
  }
  </style>
  