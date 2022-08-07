// target : 
// 1. Create Category
// 2. Create Product based on selected Category
// 3. edit Product
// 4. remove Product
// 5. save products in local Storage
// -> storage class for handle application methods
// -> productview class
// -> categoryview class
// -> main and app class

import CategoryView from "./CategoryView.js" 
import ProductView from "./ProductView.js" 

document.addEventListener("DOMContentLoaded", () => {
  CategoryView.setApp() 
  ProductView.setApp() 
  CategoryView.createCategoriesList() 
  ProductView.createProductsList(ProductView.products) 
}) 