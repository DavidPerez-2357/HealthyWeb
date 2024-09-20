const RecipeCard = ({ recipe }) => {
    return (
        <div className="bg-white w-full h-[250px] cursor-pointer shadow-gray-300 rounded-lg shadow-md overflow-hidden group">
            <div className='overflow-hidden h-2/3 w-full'>
                <img src={recipe.image} alt={recipe.name}
                     className="object-cover rounded-t-lg h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-150"/>
            </div>
            <h2 className="p-3 border-2 border-t-0 z-10 bg-white flex justify-center items-center text-primary-700 text-lg text-center font-bold rounded-b-lg border-primary-500 h-1/3">{recipe.name}</h2>
        </div>
    );
};

export default RecipeCard;