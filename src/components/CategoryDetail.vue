<template>
  <div class="meal-list">
    
    <div v-for="meal in meals" :key="meal.idMeal" class="meal-item">
      <img :src="meal.strMealThumb" :alt="meal.strMeal">
      <h3>{{ meal.strMeal }}</h3>
      <router-link :to="`/meal/${meal.idMeal}`" class="view-details-link">View Details</router-link>
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

<style scoped>
.meal-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Empat item per baris */
  gap: 20px;
  justify-items: center;
  margin: 20px auto;
  max-width: 1200px; /* Lebar maksimum kontainer */
}

.meal-item {
  text-align: center;
}

.meal-item img {
  max-width: 100%; /* Maksimum lebar gambar sesuai dengan lebar div parent */
  height: auto; /* Tinggi gambar menyesuaikan proporsi */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Bayangan halus */
}

.meal-item h3 {
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 0.9rem; /* Ukuran huruf nama makanan lebih kecil */
}

.view-details-link {
  display: inline-block;
  text-decoration: none;
  color: #007bff; /* Warna biru seperti tautan */
  transition: color 0.3s ease; /* Transisi perubahan warna saat hover */
}

.view-details-link:hover {
  color: #0056b3; /* Warna biru lebih gelap saat hover */
}
</style>
