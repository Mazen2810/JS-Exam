import { ApiService } from "./ApiService.js";
export class Display {
    constructor() {

    }
    async displayDetails(id) {
        const apiService = new ApiService();
        const response = await apiService.filterById(id);
        let meals = response.meals;

        let ingredientList = ``
        for (let i = 1; i <= 20; i++) {
            let measure = meals[0][`strMeasure${i}`];
            let ingredient = meals[0][`strIngredient${i}`];
            if (measure && ingredient) {
                ingredientList += `<li class="alert alert-info m-2 p-1">${measure} ${ingredient}</li>`;
            }

        }
        let tagsList = meals[0].strTags
        let tags = ``;
        if (tagsList != null) {
            tagsList = meals[0].strTags.split(',')

            for (let i = 0; i < tagsList.length; i++) {
                tags += `<li class="alert alert-danger m-2 p-1"> ${tagsList[i]}</li> `;
            }
        } else {
            tags = `<p>No Tags Available</p>`;
        }

        let firstDisplay = `
        <div class="col-md-4">
                        <img src="${meals[0].strMealThumb}" alt="" class="w-100 rounded-3">
                        <h2 class="text-white">${meals[0].strMeal}</h2>
                    </div>
                    <div class="col-md-8 ">
                        <h2>Instructions</h2>
                        <p>${meals[0].strInstructions}</p>
                        <h3 class="text-start"> <span>Area : </span> ${meals[0].strArea}</h3>
                        <h3 class="text-start"> <span>Category : </span> ${meals[0].strCategory}</h3>
                        <h3 class="text-start"> Recipes :</h3>
                        <ul class="d-flex g-3 flex-wrap">
                           ${ingredientList}
                        </ul>
                        <h3 class="text-start">Tags :</h3>
                        <ul class="d-flex g-3 flex-wrap">
                           ${tags}
                        </ul>
                        <a href="${meals[0].strSource}" target="_blank" class="btn btn-success">Source</a>
                        <a href="${meals[0].strYoutube}"  target="_blank" class="btn btn-danger">Youtube</a>
                    </div>
        
        `;

        document.getElementById('firstDisplay').innerHTML = firstDisplay;
    }

    async displayFirstPage() {
        const apiService = new ApiService();
        const response = await apiService.getAllMeals();
        let meals = response.meals;
        let firstDisplay = ``;
        for (let i = 0; i < meals.length; i++) {
            firstDisplay += `
                    <div class="position col-md-3" >
                        <img src="${meals[i].strMealThumb}" alt="">
                        <div class="display-selector details-screen text-center" id-data="${meals[i].idMeal}">
                            <p class="fw-bolder fs-3 text-black">${meals[i].strMeal}</p>
                        </div>
                    </div>

`
        }
        document.getElementById('firstDisplay').innerHTML = firstDisplay;
    }
    async displaySearchByName(name) {
        const apiService = new ApiService();
        const response = await apiService.searchMealByName(name)
        let meals = response.meals;
        let result = meals.slice(0, 20);

        let searchDisplay = ``;
        for (let i = 0; i < result.length; i++) {
            searchDisplay += `
                    <div class="position col-md-3" >
                        <img src="${result[i].strMealThumb}" alt="">
                        <div class="display-selector details-screen text-center" id-data="${meals[i].idMeal}">
                            <p class="fw-bolder fs-3 text-black">${result[i].strMeal}</p>
                        </div>
                    </div>

`
        }
        document.getElementById('searchByNameDisplay').innerHTML = searchDisplay;

    }
    async displaySearchByLetter(Letter) {
        const apiService = new ApiService();
        const response = await apiService.searchMealByFirstLetter(Letter)
        let meals = response.meals;
        let searchDisplay = ``;
        for (let i = 0; i < meals.length; i++) {
            searchDisplay += `
                    <div class="position col-md-3" >
                        <img src="${meals[i].strMealThumb}" alt="">
                        <div class="display-selector details-screen text-center" id-data="${meals[i].idMeal}">
                            <p class="fw-bolder fs-3 text-black">${meals[i].strMeal}</p>
                        </div>
                    </div>

`
        }
        document.getElementById('searchByNameDisplay').innerHTML = searchDisplay;

    }
    async displayAllCategories() {
        const apiService = new ApiService();
        const response = await apiService.getMealListForAllCategories();
        let categories = (response.categories);
        let categoriesDisplay = ``
        for (let i = 0; i < categories.length; i++) {
            categoriesDisplay += `
                    <div class="position col-md-3" >
                        <img src="${categories[i].strCategoryThumb}" alt="">
                        <div class="category-selector details-screen text-center" category-meals="${categories[i].strCategory}">
                            <h5 class="fw-bolder fs-3 text-black">${categories[i].strCategory}</h5>
                            <p class="text-black">${categories[i].strCategoryDescription.split(' ').slice(0, 20).join(' ')}</p>
                        </div>
                    </div>
`
        }
        document.getElementById('firstDisplay').innerHTML = categoriesDisplay;
    }
    async displayCategory(category) {
        const apiService = new ApiService();
        const response = await apiService.filterByCategory(category);
        let meals = response.meals;
        let categoryMeals = ``
        for (let i = 0; i < meals.length; i++) {
            categoryMeals += `
                <div class="position col-md-3 category-selector" >
                    <img src="${meals[i].strMealThumb}" alt="">
                    <div class="display-selector details-screen text-center" id-data="${meals[i].idMeal}">
                        <p class="fw-bolder fs-3 text-black">${meals[i].strMeal}</p>
                    </div>
                </div>

`
        }
        document.getElementById('firstDisplay').innerHTML = categoryMeals;
    }
    async displayAllAreas() {
        const apiService = new ApiService();
        const response = await apiService.getAreaList();
        let areas = (response.meals);
        let AreasDisplay = ``
        for (let i = 0; i < areas.length; i++) {
            AreasDisplay += `
                    <div class="position col-md-3" >
                        <div class="area-selector rounded-2 text-center cursor-pointer" area="${areas[i].strArea}">
                            <i class="fa-solid fa-house-laptop fa-4x"></i>
                            <h3 class="text-white">${areas[i].strArea}</h3>
                        </div>
                    </div>
`
        }
        document.getElementById('firstDisplay').innerHTML = AreasDisplay;
    }
    async displayArea(area) {
        const apiService = new ApiService();
        const response = await apiService.filterByArea(area);
        let meals = response.meals;
        let result = meals.slice(0, 20);
        let areaMeals = ``
        for (let i = 0; i < result.length; i++) {
            areaMeals += `
                <div class="position col-md-3 category-selector" >
                    <img src="${meals[i].strMealThumb}" alt="">
                    <div class="display-selector details-screen text-center" id-data="${meals[i].idMeal}">
                        <p class="fw-bolder fs-3 text-black">${meals[i].strMeal}</p>
                    </div>
                </div>

`
        }
        document.getElementById('firstDisplay').innerHTML = areaMeals;
    }
    async displayAllIngredients() {
        const apiService = new ApiService();
        const response = await apiService.getIngredientList();
        let ingredients = (response.meals);
        let result = ingredients.slice(0, 20);
        let ingredientDisplay = ``
        for (let i = 0; i < result.length; i++) {
            ingredientDisplay += `
                    <div class="position col-md-3" >
                        <div class="ingredient-selector rounded-2 text-center cursor-pointer" ingredient="${result[i].strIngredient}">
                            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                            <h3 class="text-white">${result[i].strIngredient}</h3>
                             <p class="text-white">${result[i].strDescription.split(' ').slice(0, 20).join(' ')}</p>
                        </div>
                    </div>
`
        }
        document.getElementById('firstDisplay').innerHTML = ingredientDisplay;
    }
    async displayIngredient(ingredient) {
        const apiService = new ApiService();
        const response = await apiService.filterByIngredient(ingredient);
        let meals = response.meals;
        let result = meals.slice(0, 20);
        let ingredientMeals = ``
        for (let i = 0; i < result.length; i++) {
            ingredientMeals += `
                <div class="position col-md-3 category-selector" >
                    <img src="${meals[i].strMealThumb}" alt="">
                    <div class="display-selector details-screen text-center" id-data="${meals[i].idMeal}">
                        <p class="fw-bolder fs-3 text-black">${meals[i].strMeal}</p>
                    </div>
                </div>

`
        }
        document.getElementById('firstDisplay').innerHTML = ingredientMeals;
    }
    displayContactSection(){
        let contactSection = `
         <div class="container w-75 py-4 text-center">
            <div class="row gy-4" id="firstDisplay">
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="Enter Your Name" id="inputName">
                    <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">

                        Special characters and numbers not allowed
                
                    </div>
                </div>
                <div class="col-md-6">
                    <input type="email" class="form-control" placeholder="Enter Your Email" id="inputEmail">
                    <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">

                        Email not valid *exemple@yyy.zzz

                
                    </div>
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="Enter Your Phone" id="inputPhone">
                    <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">

                        Enter valid Phone Number

                
                    </div>
                </div>
                <div class="col-md-6">
                    <input type="number" class="form-control" placeholder="Enter Your Age" id="inputAge">
                    <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">

                        Enter valid age
                
                    </div>
                </div>
                <div class="col-md-6">
                    <input type="password" class="form-control" placeholder="Enter Your Password" id="inputPassword">
                    <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">

                        Enter valid password *Minimum eight characters, at least one letter and one number:*

                
                    </div>
                </div>
                <div class="col-md-6">
                    <input type="password" class="form-control " placeholder="Re-enter your Password" id="reInputPassword">
                    <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">

                       Passwords are not match!
                
                    </div>
                </div>
                 <button class="btn btn-outline-danger px-2 mt-3 m-auto w-25" disabled="true" id="submitBtn">Submit</button>
            </div>
           
        </div>
        `
        document.getElementById('content').innerHTML = contactSection;
    }
}
