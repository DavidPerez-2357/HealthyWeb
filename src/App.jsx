import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import InfoCard from './components/InfoCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InfoCard title="Mejora tu salud paso a paso">
          Dar el primer paso hacia una vida más saludable puede parecer abrumador, pero no tiene que serlo.
          En esta sección, te guiamos a través de un enfoque gradual y manejable para incorporar hábitos
          saludables en tu rutina diaria. Desde simples ajustes en tu dieta hasta estrategias para mantener
          un equilibrio entre la alimentación y el bienestar general, te proporcionamos consejos prácticos
          y accesibles para que puedas hacer cambios sostenibles y positivos en tu vida. Aquí, descubrirás
          cómo pequeños cambios pueden generar grandes beneficios y cómo cada paso cuenta en tu camino
          hacia una salud óptima. ¡Comienza hoy y transforma tu bienestar de manera simple y efectiva!
        </InfoCard>
    </>
  )
}

export default App
