
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

export async function getRecipes() {
    // Get from URL param named search
    const search = new URLSearchParams(window.location.search).get('search');

    const data = await ajax('https://api.edamam.com/api/recipes/v2', {
        'type': 'public',
        'app_id': '4a4dbfb9',
        'app_key': '646d3a8f9b4166071e1e7bc2240f4f54',
        'health': 'vegetarian',
        'AcceptLanguage': 'es',
        'mealType': 'Lunch',
        'q': search || 'salad'
    });

    return data.hits.map((recipe) => formatRecipe(recipe.recipe));
}

function formatRecipe(recipe) {
    return {
        id: recipe.uri,
        name: recipe.label,
        image: recipe.image,
        ingredients: recipe.ingredientLines,
        calories: recipe.calories,
        totalTime: recipe.totalTime,
        url: recipe.url,
    };
}