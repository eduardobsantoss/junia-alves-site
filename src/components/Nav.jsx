import { useEffect, useRef } from 'react'
import { nav } from '../content.js'
import { Arrow, Icone, Moon, Sun } from './icons.jsx'

const setTheme = v => {
  document.documentElement.dataset.v = v
  document.querySelector('meta[name=theme-color]').content = v === 'bordo' ? '#4A0B0D' : '#F3ECE4'
  try { localStorage.setItem('ja-tema', v) } catch (e) {}
}

export default function Nav() {
  const ref = useRef(null)

  // a barra assume as cores da seção que está por baixo dela, fica sólida ao rolar e some ao descer
  useEffect(() => {
    const el = ref.current
    let last = 0
    const ctx = () => {
      const s = document.elementsFromPoint(innerWidth / 2, 90).find(e => e.matches && e.matches('section'))
      if (!s) return
      const b = s.classList.contains('ctx-b')
      el.classList.toggle('ctx-b', b)
      el.classList.toggle('ctx-a', !b)
    }
    el.classList.add('ctx-a')
    el.style.background = 'transparent'
    const onScroll = () => {
      const y = scrollY
      el.classList.toggle('solid', y > 80)
      el.style.background = y > 80 ? '' : 'transparent'
      el.classList.toggle('hide', y > last && y > innerHeight)
      last = y
      ctx()
    }
    addEventListener('scroll', onScroll, { passive: true })
    ctx()
    return () => removeEventListener('scroll', onScroll)
  }, [])

  // troca de tema: círculo que se expande a partir do botão (View Transitions), com fallback instantâneo
  const toggleTheme = e => {
    const btn = e.currentTarget
    const next = document.documentElement.dataset.v === 'bordo' ? 'creme' : 'bordo'
    if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) { setTheme(next); return }
    const r = btn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2
    const R = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    const guard = setTimeout(() => setTheme(next), 250) // se a transição não rodar, troca mesmo assim
    document.startViewTransition(() => { clearTimeout(guard); setTheme(next) }).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${R}px at ${x}px ${y}px)`] },
        { duration: 700, easing: 'cubic-bezier(.2,0,0,1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
  }

  return (
    <header className="nav" id="nav" ref={ref}>
      <div className="row g wrap">
        <a className="brand" href="#top" aria-label="Júnia Alves, início">
          <Icone />
          <span className="nm">júnia alves</span>
        </a>
        <nav className="links" aria-label="Seções">
          {nav.map(([href, txt]) => <a key={href} href={href}>{txt}</a>)}
        </nav>
        <div className="acts">
          <button className="theme" id="themeBtn" type="button" aria-label="Alternar tema claro e escuro" onClick={toggleTheme}><Moon /><Sun /></button>
          <a className="btn" href="#contato"><span className="t">Agendar conversa</span><span className="arr"><Arrow /></span></a>
        </div>
      </div>
    </header>
  )
}
