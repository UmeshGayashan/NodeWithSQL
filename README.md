# Node Express with SQL(PostgreSQL)

## Overview
This is a Node.js and PostgreSQL-based API for managing products and categories. It allows users to perform CRUD operations on products and categories, including searching products by name (with partial or exact matching). The API is built using Express, PostgreSQL, and several other dependencies for database interaction and API routing.

#### Followed a layered architecture or MVC (Model-View-Controller) design pattern, which is common for backend applications, especially those dealing with RESTful APIs and databases.

# 1. Routes Layer

### This layer defines the API endpoints and maps them to the corresponding controllers. Routes are defined to handle different HTTP methods like GET, POST, PUT, and DELETE.

# 2. Controller Layer (Controllers)

### This layer handles HTTP requests and returns responses. It interacts with the services layer to handle the business logic and the repositories to perform database operations.
- Receives a request (e.g., creating or fetching products).
- Calls the relevant service functions to process business logic.
- Returns appropriate HTTP responses (e.g., 200 OK, 404 Not Found, 500 Internal Server Error).

# 3. Service Layer (Services)

### The service layer contains business logic. It processes data received from the controller and interacts with the repository to execute database queries. The service layer ensures that complex tasks like validation, business rules, and aggregating data are handled separately from the controller.
- Validates and processes the product-related data.
- Decides which repository method to call for specific actions.
- Handles any business logic (e.g., formatting, validation, etc.).

# 4. Data Access Layer (Repositories)

### The repository layer directly interacts with the database. It contains the SQL queries and database-specific logic, abstracting the database layer from the rest of the application. This separation makes it easier to modify the database queries or switch databases if needed.
- Contains functions to query the PostgreSQL database (e.g., fetching, creating, updating, or deleting products).
- Executes SQL commands (like SELECT, INSERT, DELETE, etc.).

The PostgreSQL database consists of two main tables:

Product Table (product)
- Column Name	Data Type	Description
- id	SERIAL	Primary key, auto-incremented.
- name	TEXT	Name of the product.
- description	TEXT	(Optional) Description of the product.
- price	NUMERIC	Price of the product.
- currency	TEXT	Currency of the price (default: 'LKR').
- quantity	INTEGER	Stock quantity of the product (default: 0).
- active	BOOLEAN	Whether the product is active (default: true).
- category_id	INTEGER	Foreign key referencing the category table.

Category Table (category)
- Column Name	Data Type	Description
- id	SERIAL	Primary key, auto-incremented.
- name	TEXT	Name of the category.
- active	BOOLEAN	Whether the category is active (default: true).
  
# Dependencies
- Express: Web framework for building the RESTful API.
- PostgreSQL: Database for storing products and categories.
- pg: PostgreSQL client for Node.js.
- nodemon: Development tool that automatically restarts the server on file changes.
- dotenv: Loads environment variables from a .env file.
  
# Usage of Dependencies
- Express is used to set up routes and handle HTTP requests and responses.
- pg is used to interact with the PostgreSQL database for querying and inserting data.
- nodemon helps in development by automatically restarting the server on changes.
- dotenv is used to securely store database credentials and other environment variables.

The API will be running on http://localhost:3000.

# Operations
- Create a Product: Add a new product to the database, specifying its name, price, and category.
- Search for Products: Search products by their name with either exact matching or partial matching.
- Update a Product: Update product details such as its price, quantity, etc.
- Delete a Product: Remove a product by its ID.
- Create a Category: Add a new category to the database.
- Delete a Category: Remove a category if it is not linked to any products.

## Search Products:

### Set method to GET and URL to http://localhost:3000/products/search?name=Laptop&isExact=true.

# Conclusion
- This project is a simple product management API built using Node.js and PostgreSQL. It supports CRUD operations on both products and categories, with an additional feature of searching products by name. You can use Postman or any API client to test its functionality.
