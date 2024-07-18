import { Display } from "./ui.js";
// Close the list 
function closeSideNav(){
    $('.nav-tab').animate({ width: '0', margin: '0 -50px 0 0 ' }, 500)
    $('.closeIcon').addClass('d-none')
    $('.openIcon').removeClass('d-none');
    $('.nav-tab ul li').each(function (i) {
        $('.nav-tab ul li').delay(100 * i).slideUp(100);
    });
    $('.nav-footer').hide(100);
}
$('.closeIcon').click(function () {
    closeSideNav()
})

// Open the list 
$('.openIcon').click(function () {
    $('.nav-tab').removeClass('d-none').animate({ width: '257px', margin: '0 0 0 0 ' }, 500)
    $(this).addClass('d-none')
    $('.closeIcon').removeClass('d-none');
    $('.nav-tab ul li').each(function (i) {
        $(this).delay(100 * i).slideDown(100);
    })
    $('.nav-footer').show(100);
})

// Function to display loader and hide data
function showLoader(){
    $('.loader').removeClass('d-none');
    $('.content').addClass('d-none');
    $('.searchContent').addClass('d-none');
    $('.searchInputs').addClass('d-none');
}

// Function to hide loader and display data
 function hideLoader(){
    $('.loader').addClass('d-none');
    $('.content').removeClass('d-none');
}
//display homePage
async function displayHomePage() {
    const display = new Display();
    await display.displayFirstPage();
    $('.loader').addClass('d-none');
}
displayHomePage();


// search section
$('.search').click(function (event) {
    event.preventDefault();
    $('.content').addClass('d-none');
    $('.searchInputs').removeClass('d-none');
    closeSideNav()
})
// show search by name
async function displaySearchByNames(name) {
    const display = new Display();
    await display.displaySearchByName(name);
    $('.loader').addClass('d-none');
    $('.searchContent').removeClass('d-none');
}
$('.searchByName').keyup(function () {
    const inputValue = $(this).val();
    $('.loader').removeClass('d-none');
    $('.searchContent').addClass('d-none');
    displaySearchByNames(inputValue);
    $('.content').addClass('d-none');
})
//show search by first letter only
async function displaySearchByLetter(letter) {
    const display = new Display();
    await display.displaySearchByLetter(letter);
    $('.loader').addClass('d-none');
    $('.searchContent').removeClass('d-none');
}
$('.searchByLetter').keyup(function () {
    const inputValue = $(this).val();
    $('.loader').removeClass('d-none');
    $('.searchContent').addClass('d-none');
    displaySearchByLetter(inputValue);
    $('.content').addClass('d-none');
})



//show details

async function displaySearchById(id) {
    const display = new Display();
    await display.displayDetails(id);
    hideLoader()
}

$(document).on('click', '.display-selector', async function () {
    const id = $(this).attr('id-data');
    showLoader()
    await displaySearchById(id);
})



//show categories

async function showCategories() {
    const display = new Display();
    await display.displayAllCategories();
    hideLoader()
}

$(document).on('click', '.categories', async function () {
    closeSideNav()
    event.preventDefault();
    showLoader()
    await showCategories();
});

async function displayCategoryMeals(category) {
    const display = new Display();
    await display.displayCategory(category);
    hideLoader()
}

$(document).on('click', '.category-selector', async function () {
    const category = $(this).attr('category-meals');
    showLoader()
    await displayCategoryMeals(category);
})


// show meals by area
async function showAreas() {
    const display = new Display();
    await display.displayAllAreas();
    hideLoader()
}

$(document).on('click', '.area', async function () {
    closeSideNav()
    event.preventDefault();
    showLoader()
    await showAreas();
});

async function displayAreaMeals(area) {
    const display = new Display();
    await display.displayArea(area);
    hideLoader()

}

$(document).on('click', '.area-selector', async function () {
    const area = $(this).attr('area');
    showLoader()
    await displayAreaMeals(area);
})

// show meals by Ingredients

async function showIngredients() {
    const display = new Display();
    await display.displayAllIngredients();
    hideLoader()
}

$(document).on('click', '.ingredients', async function () {
    closeSideNav()
    event.preventDefault();
    showLoader()
    await showIngredients();
});

async function displayIngredientMeals(ingredient) {
    const display = new Display();
    await display.displayIngredient(ingredient);
    hideLoader()
}

$(document).on('click', '.ingredient-selector', async function () {
    const ingredient = $(this).attr('ingredient');
    showLoader()
    await displayIngredientMeals(ingredient);
})

// show contact section

function displayContact() {
    const display = new Display();
    display.displayContactSection();
}

$(document).on('click', '.contact-us', function () {
    closeSideNav()
    event.preventDefault();
    displayContact();



    //Data validation

    let inputValid = document.querySelectorAll('.form-control');
    for (let i = 0; i < inputValid.length; i++) {
        inputValid[i].addEventListener('change', function (e) {
            validInput(e.target.id, e.target.value);
            SubmitButtonEnable();
        })
       
    }

    //check for rePassword
    rePasswordCheck();
    function rePasswordCheck() {
        let reInputPassword = document.getElementById('reInputPassword')
        let inputPassword = document.getElementById('inputPassword')
        reInputPassword.addEventListener('change', function (e) {
            if (e.target.value === inputPassword.value) {
                reInputPassword.classList.add('is-valid');
                reInputPassword.classList.remove('is-invalid');
                reInputPassword.nextElementSibling.classList.replace('d-block', 'd-none');
            } else {
                reInputPassword.classList.add('is-invalid');
                reInputPassword.classList.remove('is-valid');
                reInputPassword.nextElementSibling.classList.replace('d-none', 'd-block');
            }
        });
    }
    

    //check validation
    function validInput(id, value) {
        let regex = {
            inputEmail: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            inputPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            reInputPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            inputName: /^[a-zA-Z ]{3,25}$/,
            inputPhone: /^01\d{9}$/,
            inputAge: /^([1-9][0-9]?)$/
        }
        let elm = document.getElementById(id);
        let nextElm = elm.nextElementSibling;
        let inputPassword = document.getElementById('inputPassword')
        let reInputPassword = document.getElementById('reInputPassword')
        if (regex[id].test(value)) {
            elm.classList.add('is-valid');
            elm.classList.remove('is-invalid');
            nextElm.classList.replace('d-block', 'd-none');
            return true;
        } else {
            elm.classList.add('is-invalid');
            elm.classList.remove('is-valid');
            nextElm.classList.replace('d-none', 'd-block');
            return false;
        }

    }


// Enable the submit button
    function SubmitButtonEnable(){
        let validInputs = document.querySelectorAll('.is-valid');
        let submitBtn = document.getElementById('submitBtn');
        if(validInputs.length === 6){
            submitBtn.disabled = false;
        }else{
            submitBtn.disabled = true;
        }
    }

});








