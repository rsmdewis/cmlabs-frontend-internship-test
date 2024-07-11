import axios from 'axios';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
const API_BASE_CATEGORY = `${API_BASE_URL}/filter.php?c={category-name}`;
const API_BASE_DETAIL = `${API_BASE_URL}/lookup.php?i={meal-id}`;

export const getCategories = () => axios.get(`${API_BASE_URL}/categories.php`);
export const getMealsByCategory = (category) => axios.get(`${API_BASE_CATEGORY.replace('{category-name}', category)}`);
export const getMealDetail = (id) => axios.get(`${API_BASE_DETAIL.replace('{meal-id}', id)}`);
