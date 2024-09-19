import './App.css';
import InfoCard from './components/InfoCard';
import IndexHeader from './components/IndexHeader.jsx';

function App() {
  return (
    <>
        <IndexHeader>¡ÚNETE A LA REVOLUCIÓN VERDE!</IndexHeader>

        <section className='container mx-auto p-5 mt-5'>
            <InfoCard title="Mejora tu salud paso a paso">
              Dar el primer paso hacia una vida más saludable puede parecer abrumador, pero no tiene que serlo.
              En esta sección, te guiamos a través de un enfoque gradual y manejable para incorporar hábitos
              saludables en tu rutina diaria. Desde simples ajustes en tu dieta hasta estrategias para mantener
              un equilibrio entre la alimentación y el bienestar general, te proporcionamos consejos prácticos
              y accesibles para que puedas hacer cambios sostenibles y positivos en tu vida. Aquí, descubrirás
              cómo pequeños cambios pueden generar grandes beneficios y cómo cada paso cuenta en tu camino
              hacia una salud óptima. ¡Comienza hoy y transforma tu bienestar de manera simple y efectiva!
            </InfoCard>
        </section>
    </>
  )
}

export default App
