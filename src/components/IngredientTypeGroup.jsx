
const IngredientTypeGroup = ({ type, ingredients }) => {
    const ingredientTypeImages = {
        '/food_types/broccoli.png': [
            'Vegetable',
            'Vegetables',
        ],
        '/food_types/strawberry.png': [
            'Fruit',
            'Fruits',
        ],
        '/food_types/salt.png': [
            'Condiments and sauces',
        ],
        '/food_types/meat.png': [
            'Meat',
            'Poultry',
        ],
    };

    const typeImage = Object.keys(ingredientTypeImages).find((key) => ingredientTypeImages[key].includes(type));

    return (
        <div className='mb-5'>
            <img src={[typeImage]} alt={type} className='w-5 h-5'/>
            <h3 className='text-2xl font-bold'>{type}</h3>
            <ul className='list-disc ml-5'>
                {ingredients.map((ingredient, index) => (
                    <div key={index}>
                        <li>{ingredient.name}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default IngredientTypeGroup;