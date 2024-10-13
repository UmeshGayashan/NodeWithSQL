const { text } = require('express');
const pool = require('./database');
const { categoryExists,createCategoryInDB,getCategoriesInDB,updateCategoryInDB,deleteCategoryInDB } = require('../repositories/categoryRepository');

const getCategories = async () => { // This is async because it waits for the DB query
    try {
        const categories = await getCategoriesInDB(); // Await the DB query
        return categories;
    } catch (error) {
        throw error;
    }
};


const createCategory = async (name) => {
    try {
        const exists = await categoryExists(name); // Check if the category already exists

        if (exists) {
            throw new Error('Category already exists');
        }

        const newCategory = await createCategoryInDB(name); // Create the category
        return newCategory;
        
    } catch (error) {
        throw error;
    }
}

const updateCategory = async (id, name) => {
    try {
        const exists = await categoryExists(name); // Check if the category already exists

        if (exists) {
            throw new Error('Category already exists');
        }

        const updatedCategory = await updateCategoryInDB(id, name); // Update the category
        return updatedCategory;
        
    } catch (error) {
        throw error;
    }
}

const deleteCategory = async (id) => {
    try {
        const deletedCategory = await deleteCategoryInDB(id); // Delete the category
        return deletedCategory;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
};