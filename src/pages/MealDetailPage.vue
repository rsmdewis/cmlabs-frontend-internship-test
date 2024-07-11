<template>
    <div>
      <MealDetail :mealId="$route.params.id" />
    </div>
  </template>
  
  <script>
  import MealDetail from '../components/MealDetail.vue';
  
  export default {
    components: {
      MealDetail,
    },
  };
  </script>
  