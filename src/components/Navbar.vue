<template>
    <nav class="navbar">
      <div class="logo">
        <img src="@/assets/logom.png" alt="Logo" class="logo-image">
        <span class="site-name">Mealapp</span>
      </div>
      <div class="menu">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Category</RouterLink>
        <RouterLink to="/detail">Detail</RouterLink>
      </div>
    </nav>
  </template>
  
  <script setup>
  // No specific script is needed for this simple navbar
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #f8f9fa;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo-image {
    height: 40px; /* Adjust size as needed */
    margin-right: 0.5rem;
  }
  
  .site-name {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .menu {
    display: flex;
    gap: 1rem;
  }
  
  .menu a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
  }
  
  .menu a:hover {
    text-decoration: underline;
  }
  </style>
  