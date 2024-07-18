export class ApiService{
    constructor(){

    }
    async getAllMeals(){
        try {
            $('.loader').removeClass('d-none');
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Error fetching data from Random Meal:', error);
        }
    }
    async searchMealByName(name){
        try {
            $('.loader').removeClass('d-none');
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data from Search meal by name:', error);
        }
    }
    async searchMealByFirstLetter(letter){
        try {
            $('.loader').removeClass('d-none');

            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data from Search meal by first letter:', error);
        }
    }
    async getMealListForAllCategories(){
        try {
            $('.loader').removeClass('d-none');

            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data from Meals Category:', error);
        }
    }
    async filterByCategory(category){
        try {
            $('.loader').removeClass('d-none');

            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data from Filter Meals Category:', error);
        }
    }
    async getAreaList(){
        try {
            $('.loader').removeClass('d-none');

            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data from Area list:', error);
        }
    }
    async filterByArea(area){
        try {
            $('.loader').removeClass('d-none');

            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data from Filter by Area:', error);
        }
    }
    async getIngredientList(){
        try {
            $('.loader').removeClass('d-none');

            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data from Ingredient list:', error);
        }
    }
    async filterByIngredient(ingredient){
        try {
            $('.loader').removeClass('d-none');

            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data from Filter by Ingredient:', error);
        }

    }
    async filterById(id){
        try {
            $('.loader').removeClass('d-none');

            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data from Filter by Id:', error);
        }

    }

}