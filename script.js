// Dummy user credentials (In a real app, use a secure method)
const users = [
    { username: "admin", password: "admin123" }
  ];
  
  // Dummy product data
  const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 199.99, description: "A high-end smartphone with all the features you need.", image: "phone vivo x200.jpg" },
    { id: 2, name: "Laptop", category: "electronics", price: 999.99, description: "A powerful laptop for work and play.", image: "hp zbook power.jpg" },
    { id: 3, name: "Blender", category: "home", price: 49.99, description: "A perfect blender for your kitchen needs.", image: "butterfly blender.jpg" },
    { id: 4, name: "Washing Machine", category: "home", price: 299.99, description: "A smart washing machine with advanced features.", image: "samsung wm.jpg" },
    { id: 5, name: "T-shirt", category: "fashion", price: 19.99, description: "A comfortable cotton t-shirt.", image: "t shirt (2).jpg" },
    { id: 6, name: "Jeans", category: "fashion", price: 49.99, description: "Stylish jeans for any occasion.", image: "jeans.jpg" }
  ];
  
  // Function to handle the login process
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("loginError");
  
    // Check if the username and password match any in the users array
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      // Hide login section and show product section
      document.getElementById("login").style.display = "none";
      document.getElementById("products").style.display = "block";
      displayProducts("all"); // Display all products initially
    } else {
      // Show error message
      loginError.textContent = "Invalid username or password.";
    }
  });
  
  // Function to display products based on selected category
  function displayProducts(category) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear existing products
  
    // Filter products based on selected category
    const filteredProducts = category === "all" ? products : products.filter(product => product.category === category);
  
    filteredProducts.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="description">${product.description}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button class="add-to-cart">Add to Cart</button>
      `;
      
      productList.appendChild(productDiv);
    });
  }
  
  // Event listener for category selection
  document.getElementById("category").addEventListener("change", function(event) {
    const selectedCategory = event.target.value;
    displayProducts(selectedCategory);
  });
  