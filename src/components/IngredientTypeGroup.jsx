
const IngredientTypeGroup = ({ type, ingredients }) => {
    const ingredientTypeImages = {
        '/food_types/broccoli.png': [
            'Vegetable',
            'Vegetables',
            'Canned vegetables',
        ],
        '/food_types/strawberry.png': [
            'Fruit',
            'Fruits',
            'Canned fruit',
        ],
        '/food_types/salt.png': [
            'Condiments and sauces',
        ],
        '/food_types/meat.png': [
            'Meat',
            'Poultry',
            'Plant-based protein',
        ],
        '/food_types/bottle.png': [
            'Beverages',
            'Oils',
            '100% juice',
            'Liquors and cocktails',
            'Water',
            'Wines',
            'Canned soup',
        ],
        '/food_types/milk.png': [
            'Milk',
            'Dairy',
            'Yogurt',
            'Cheese',
        ],
        '/food_types/candy.png': [
            'Sugar',
            'Sugars',
            'Chocolate',
            'Sugar syrups',
            'Candy',
            'Sweetened beverages',
        ],
        '/food_types/bread.png': [
            'Bread',
            'Bakery products',
            'Quick breads and pastries',
            'Bread, rolls and tortillas',
        ],
        '/food_types/hat_robe.png': [
            'Grains',
            'Cereals',
            'Rice',
            'Pasta',
            'Eggs',
            'Pastries',
        ],
    };

    const typeBorderColors = {
        '/food_types/broccoli.png': 'border-broccoli',
        '/food_types/strawberry.png': 'border-strawberry',
        '/food_types/salt.png': 'border-condiments',
        '/food_types/meat.png': 'border-meat',
        '/food_types/cutlery.png': 'border-gray-500',
        '/food_types/bottle.png': 'border-bottle',
        '/food_types/milk.png': 'border-milk',
        '/food_types/candy.png': 'border-candy',
        '/food_types/bread.png': 'border-bread',
        '/food_types/hat_robe.png': 'border-hat_robe',
    }

    const typeHoverBgColors = {
        '/food_types/broccoli.png': 'hover:bg-broccoli',
        '/food_types/strawberry.png': 'hover:bg-strawberry',
        '/food_types/salt.png': 'hover:bg-condiments',
        '/food_types/meat.png': 'hover:bg-meat',
        '/food_types/cutlery.png': 'hover:bg-gray-500',
        '/food_types/bottle.png': 'hover:bg-bottle',
        '/food_types/milk.png': 'hover:bg-milk',
        '/food_types/candy.png': 'hover:bg-candy',
        '/food_types/bread.png': 'hover:bg-bread',
        '/food_types/hat_robe.png': 'hover:bg-hat_robe',
    }

    let typeImage = Object.keys(ingredientTypeImages).find((key) => ingredientTypeImages[key].includes(type));
    const otherTypeImage = '/food_types/cutlery.png';

    if (!typeImage) {
        typeImage = otherTypeImage;
    }

    const typeColor = typeBorderColors[typeImage] || 'border-[#000000]';
    console.log(typeColor);

    return (
        <div className={`mb-5 sm:pt-5 pt-24 flex flex-col justify-center sm:pl-28 min-h-28 w-full relative bg-white border-2 rounded-lg p-5 group ${typeColor} ${typeHoverBgColors[typeImage]} transition`}>
            <div className={`rounded-full p-5 bg-white border-2 ${typeColor} absolute sm:-left-10 -top-10 sm:top-1/2 transform sm:-translate-y-1/2 left-1/2 sm:-translate-x-0 -translate-x-1/2`}>
                <img src={[typeImage]} alt={type} className='w-20 h-20'/>
            </div>

            <h3 className='text-2xl mb-1 font-bold sm:text-left text-center w-full group-hover:text-white'>{type}</h3>
            <ul className='list-disc ml-5 text-gray-700 group-hover:text-white'>
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