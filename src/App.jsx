import { useEffect, useLayoutEffect } from 'react'
import { initMotion } from './motion.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import Sobre from './components/Sobre.jsx'
import Temas from './components/Temas.jsx'
import Passos from './components/Passos.jsx'
import Faixa from './components/Faixa.jsx'
import Atendimento from './components/Atendimento.jsx'
import Programa from './components/Programa.jsx'
import Duvidas from './components/Duvidas.jsx'
import Contato from './components/Contato.jsx'

// no navegador roda antes da primeira pintura; no pré-render (servidor) não roda
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function App() {
  useIsoLayoutEffect(() => {
    const cleanup = initMotion()
    document.documentElement.classList.add('ready') // libera o topo, já no estado inicial da animação
    return cleanup
  }, [])

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Manifesto />
        <Sobre />
        <Temas />
        <Passos />
        <Faixa />
        <Atendimento />
        <Programa />
        <Duvidas />
        <Contato />
      </main>
    </>
  )
}
