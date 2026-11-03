import { temas } from '../content.js'
import { Arrow } from './icons.jsx'

const num = i => String(i + 1).padStart(2, '0')

function Tema({ t, i }) {
  if (t.foto) return (
    <article className="tema ph-card">
      <div className="ph"><img src={t.foto.src} alt={t.foto.alt} loading="lazy" /></div>
      <span className="n">{num(i)}</span>
      <div className="cap"><h3>{t.titulo}</h3><p>{t.texto}</p></div>
    </article>
  )
  return (
    <article className="tema">
      <span className="ghost" aria-hidden="true">{num(i)}</span><span className="n">{num(i)}</span>
      <div><h3>{t.titulo}</h3><p>{t.texto}</p></div>
    </article>
  )
}

export default function Temas() {
  return (
    <section className="temas ctx-a" id="temas">
      <div className="head g wrap">
        <h2>Como posso <span className="script">te ajudar</span></h2>
        <p>Algumas das questões que mais chegam ao consultório. Se a sua não estiver aqui, tudo bem: a gente conversa sobre ela.</p>
      </div>
      <div className="track" id="track">
        {temas.map((t, i) => <Tema key={t.titulo} t={t} i={i} />)}
        <article className="tema cta-card">
          <span className="n" style={{ color: 'inherit', opacity: 0.7 }}>{num(temas.length)}</span>
          <div><h3>Algo que <span className="script">não tem nome</span></h3><p>Às vezes só sabemos que algo não vai bem. Isso já é motivo suficiente para começar.</p></div>
          <a className="btn" href="#contato">Vamos conversar <span className="arr"><Arrow /></span></a>
        </article>
      </div>
      <p className="swipe" aria-hidden="true">Arraste para o lado</p>
      <div className="progress" aria-hidden="true"><i id="prog" /></div>
    </section>
  )
}
