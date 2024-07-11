<template>
    <div class="category-list">
      <div v-for="category in categories" :key="category.idCategory" class="category-item">
        <img :src="category.strCategoryThumb" :alt="category.strCategory">
        <h3>{{ category.strCategory }}</h3>
        <router-link :to="`/category/${category.strCategory}`">View Meals</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { getCategories } from '../services/api';
  
  export default {
    data() {
      return {
        categories: [],
      };
    },
    mounted() {
      getCategories().then(response => {
        this.categories = response.data.categories;
      });
    },
  };
  </script>
  
  <style>
  .category-list {
    display: flex;
    flex-wrap: wrap;
  }
  .category-item {
    margin: 10px;
    text-align: center;
  }
  </style>
  