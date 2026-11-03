import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const root = document.getElementById('root')
// no build o HTML já vem pré-renderizado e o React só "assume" a página; em dev ele monta do zero
if (root.firstElementChild) hydrateRoot(root, <App />)
else createRoot(root).render(<App />)
