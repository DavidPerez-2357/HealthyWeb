import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {useParams} from "react-router-dom";
import RecipeHeader from "../components/RecipeHeader.jsx";
import {getInformationRecipe} from "../services/recipeService.js";
import Loading from "../components/Loading.jsx";
import Error from "../components/Error.jsx";
import IngredientTypeGroup from "../components/IngredientTypeGroup.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

function Recipe () {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Función asíncrona dentro de useEffect
        const fetchData = async () => {
            try {
                console.log('Fetching data...');
                const recipe = await getInformationRecipe(id);  // Llamada a la función asíncrona
                setData(recipe);  // Almacena los datos obtenidos en el estado
                setLoading(false); // Marca que ha terminado la carga
            } catch (err) {
                setError(err); // En caso de error, lo almacenamos
                setLoading(false);
            }
        };

        fetchData(); // Ejecutamos la función asíncrona
    }, []); // Array vacío para que solo se ejecute una vez al montar el componente

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <Error message={error.message}/>;
    }

    console.log(data)

    return (
        <>
            <RecipeHeader>{data.name}</RecipeHeader>

            <main className='main_content'>
                <div className='md:w-1/2'>
                    <SectionTitle>Ingredients</SectionTitle>
                    {Object.entries(data.ingredients).map(([type, ingredients]) => (
                        <IngredientTypeGroup key={type} type={type} ingredients={ingredients}/>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Recipe;