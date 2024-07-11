<template>
    <div>
      <h1>Meals in {{ $route.params.name }}</h1>
      <CategoryDetail :category="$route.params.name" />
    </div>
  </template>
  
  <script>
  import CategoryDetail from '../components/CategoryDetail.vue';
  
  export default {
    components: {
      CategoryDetail,
    },
  };
  </script>
  