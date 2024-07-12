<template>
    <div>
      <nav class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span> > </span>
        <router-link :to="{ path: '/category/' + category }">{{ category }}</router-link>
      </nav>
      <h2>{{ category }}</h2>
      <div class="meal-list">
        <div v-for="meal in meals" :key="meal.idMeal" class="meal-item">
          <img :src="meal.strMealThumb" :alt="meal.strMeal">
          <h3>{{ meal.strMeal }}</h3>
          <router-link :to="`/meal/${meal.idMeal}`" class="view-details-link">View Details</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { getMealsByCategory } from '../services/api';
  
  const route = useRoute();
  const category = route.params.category;
  const meals = ref([]);
  
  onMounted(() => {
    getMealsByCategory(category).then(response => {
      meals.value = response.data.meals;
    });
  });
  </script>
  
  <style scoped>
  /* Gaya untuk breadcrumb dan gaya lainnya */
  .breadcrumb {
    padding: 0.5rem 1rem;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
  }
  
  .breadcrumb span {
    margin: 0 0.5rem;
  }
  
  .breadcrumb a {
    color: #007bff;
    text-decoration: none;
  }
  
  .breadcrumb a:hover {
    text-decoration: underline;
  }
  
  .meal-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-items: center;
    margin: 20px auto;
    max-width: 1200px;
  }
  
  .meal-item {
    text-align: center;
  }
  
  .meal-item img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .meal-item h3 {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 0.9rem;
  }
  
  .view-details-link {
    display: inline-block;
    text-decoration: none;
    color: #007bff;
    transition: color 0.3s ease;
  }
  
  .view-details-link:hover {
    color: #0056b3;
  }
  </style>
  