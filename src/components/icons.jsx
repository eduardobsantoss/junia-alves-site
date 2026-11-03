// Ícones em linha e o monograma JA (redesenhado a partir do story da IDV).
import iconeCreme from '../assets/img/icone-creme.png'
import iconeBordo from '../assets/img/icone-bordo.png'

const line = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }

export const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" {...line}><path d="M7 17 17 7M8 7h9v9" /></svg>
)

export const Monitor = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.6" {...line}><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
)

export const Pin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.6" {...line}><path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
)

export const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.6" {...line}><path d="M5 12l5 5L20 7" /></svg>
)

export const Phone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.6" {...line}><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></svg>
)

export const Lock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" strokeWidth="1.8" {...line}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
)

export const Moon = () => (
  <svg className="moon" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.7" {...line}><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" /></svg>
)

export const Sun = () => (
  <svg className="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
)

const canal = {
  whats: <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.6" {...line}><path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.6z" /></svg>,
  insta: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>,
  mail: <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.6" {...line}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>,
  pin: <Pin />,
}
export const CanalIcon = ({ nome }) => canal[nome]

// pathLength="1" deixa a animação de "desenhar" a linha independente do tamanho real do traço
export const Mono = ({ id }) => (
  <svg className="mono" id={id} viewBox="0 0 1125 2000" aria-hidden="true">
    <path pathLength="1" d="M340 0V1110" />
    <path pathLength="1" d="M62 1180c0 78 66 140 148 140 30 0 52-7 72-18" />
    <path pathLength="1" d="M25 2000 562 600l548 1400" />
  </svg>
)

// o símbolo nas duas cores; o CSS mostra o que contrasta com a seção
export const Icone = () => (
  <>
    <img className="lg-c" src={iconeCreme} alt="" />
    <img className="lg-b" src={iconeBordo} alt="" />
  </>
)
