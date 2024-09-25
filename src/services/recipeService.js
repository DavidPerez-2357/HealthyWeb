import {formatIngredient, groupIngredientsByType} from "./ingredientService.js";

const app_id = '4a4dbfb9';
const app_key = '646d3a8f9b4166071e1e7bc2240f4f54';

export async function getRecipes() {
    // Get from URL param named search
    const search = new URLSearchParams(window.location.search).get('search');

    const url = 'https://api.edamam.com/api/recipes/v2';

    const data = await ajax(url, {
        'type': 'public',
        'app_id': app_id,
        'app_key': app_key,
        'health': 'vegetarian',
        'AcceptLanguage': 'es',
        'mealType': 'Lunch',
        'q': search || 'salad'
    });

    return data.hits.map((recipe) => formatRecipe(recipe.recipe));
}

export async function getInformationRecipe(id) {
    const url = `https://api.edamam.com/api/recipes/v2/${id}`;

    const data = await ajax(url, {
        'type': 'public',
        'app_id': app_id,
        'app_key': app_key,
    });

    const recipe = formatRecipe(data.recipe);
    recipe.ingredients = data.recipe.ingredients.map((ingredient) => formatIngredient(ingredient));
    recipe.ingredients = groupIngredientsByType(recipe.ingredients);
    return recipe;
}

function formatRecipe(recipe) {
    // Extract id from uri
    const id = recipe.uri.split('_')[1];

    return {
        id: id,
        name: recipe.label,
        image: recipe.image,
        ingredients: recipe.ingredients,
        calories: recipe.calories,
        totalTime: recipe.totalTime,
        url: recipe.url,
    };
}

async function ajax(url, parameters) {
    // Convertir el objeto body a un string que se envie en la url
    return fetch(url + '?' + new URLSearchParams(parameters))
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}