export function groupIngredientsByType(ingredients) {
    // Create an object with the ingredients grouped by type (key)
    return ingredients.reduce((acc, ingredient) => {
        if (!acc[ingredient.type]) {
            acc[ingredient.type] = [];
        }

        acc[ingredient.type].push(ingredient);

        return acc;
    }, {});
}

export function  formatIngredient(ingredient) {
    // Capitalize first letter of type
    ingredient.foodCategory = ingredient.foodCategory.charAt(0).toUpperCase() + ingredient.foodCategory.slice(1);

    return {
        quantity: ingredient.quantity,
        name: ingredient.text,
        type: ingredient.foodCategory
    };
}