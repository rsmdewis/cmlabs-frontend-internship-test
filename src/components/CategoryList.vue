<template>
  <div class="category-list">
    <div v-for="category in categories" :key="category.idCategory" class="category-item">
      <router-link :to="`/category/${category.strCategory}`" class="category-link">
        <img :src="category.strCategoryThumb" :alt="category.strCategory" class="category-image">
        <div class="category-name">{{ category.strCategory }}</div>
      </router-link>
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

<style scoped>
.category-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
  margin: 0 auto;
  padding: 20px;
}

.category-item {
  width: 200px;
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.1); /* Batas gelap */
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s; /* Efek transisi */
}

.category-item:hover {
  transform: scale(1.05); /* Efek perbesaran saat hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Efek bayangan saat hover */
}

.category-link {
  display: block;
  text-decoration: none;
  color: inherit;
  position: relative;
}

.category-image {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.category-name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
