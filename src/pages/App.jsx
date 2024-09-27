import '../styles/App.css';
import InfoCard from '../components/InfoCard.jsx';
import IndexHeader from '../components/IndexHeader.jsx';
import SectionTitle from "../components/SectionTitle.jsx";
import RecipeCard from '../components/RecipeCard.jsx';
import {getRecipes} from "../services/recipeService.js";
import Loading from "../components/Loading.jsx";
import Error from "../components/Error.jsx";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const search = new URLSearchParams(window.location.search).get('search') || '';

    const handleKeyDown = (event) => {
        console.log('Key pressed:', event.key);
        if (event.key === 'Enter') {
            console.log('Enter key pressed');
            const inputValue = event.target.value;

            // Crear una nueva URL con el parámetro 'search'
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('search', encodeURIComponent(inputValue));

            // Actualizar la URL sin recargar la página (si deseas evitar la recarga completa)
            window.history.pushState({}, '', currentUrl);

            // Recargar la página si es necesario
            window.location.reload();
        }
    };

    useEffect(() => {
        // Función asíncrona dentro de useEffect
        const fetchData = async () => {
            try {
                const recipes = await getRecipes();  // Llamada a la función asíncrona
                setData(recipes);  // Almacena los datos obtenidos en el estado
                setLoading(false); // Marca que ha terminado la carga
            } catch (err) {
                setError(err); // En caso de error, lo almacenamos
                setLoading(false);
            }
        };

        fetchData(); // Ejecutamos la función asíncrona
    }, []); // Array vacío para que solo se ejecute una vez al montar el componente

    useEffect(() => {
        const input = document.getElementById('searchInput');
        if (input) {
            input.addEventListener('focus', handleKeyDown);
        }

        return () => {
            if (input) {
                input.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, []);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <Error message={error.message}/>;
    }

  return (
    <>
        <IndexHeader>JOIN THE GREEN REVOLUTION!</IndexHeader>

        <main className='main_content'>
            <InfoCard title="Improve your health step by step">
                Taking the first step toward a healthier life can seem overwhelming, but it doesn't have to be.
                In this section, we guide you through a gradual and manageable approach to incorporating healthy
                habits into your daily routine. From simple tweaks to your diet to strategies to maintain a balance
                between food and overall well-being, we provide you with practical and accessible tips so you can make
                sustainable, positive changes in your life. Here, you'll discover how small changes can yield big benefits
                and how every step counts on your path to optimal health. Get started today and transform your well-being
                simply and effectively!
            </InfoCard>

            <section className='mt-20'>
                <div className='flex justify-between items-center'>
                    <SectionTitle>Discover healthy and delicious recipes</SectionTitle>
                    <input onKeyDown={handleKeyDown} defaultValue={search} type="text" id='searchInput' placeholder="Search for recipes" className="border-2 h-10 p-2 border-primary-500 rounded-lg"/>
                </div>

                {data && data.length > 0 ? (
                    <div className={'gap-6 grid'}
                         style={{gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
                        {data.map((recipe) => (
                        <Link to={`/recipe/${recipe.id}?search=${search}`} key={recipe.id}>
                            <RecipeCard recipe={recipe}/>
                        </Link>
                        ))}
                    </div>
                ) : (
                    <Error title='No recipes found' message='Try searching for another recipe' className={'max-h-max'}/>
                )}

            </section>
        </main>
    </>
    )
}

export default App
