import { CRP, heroMeta } from '../content.js'
import { Arrow, Monitor, Mono, Pin } from './icons.jsx'

export default function Hero() {
  return (
    <section className="hero ctx-a grain g">
      <div className="in wrap">
        <Mono id="heroMono" />
        <div className="txt">
          <p className="eyebrow h-fade">{`Psicóloga clínica · ${CRP}`}</p>
          <h1 className="split">Um lugar seguro para você <span className="script">se escutar</span></h1>
          <p className="lead h-fade">Psicoterapia para adultos, online e presencial. Um processo construído no seu tempo, com acolhimento, ética e uma escuta sem julgamentos.</p>
          <div className="cta h-fade">
            <a className="btn" href="#contato">Agendar primeira conversa <span className="arr"><Arrow /></span></a>
            <a className="btn ghost" href="#sobre">Conhecer meu trabalho</a>
          </div>
          <div className="meta h-fade">{heroMeta.map(m => <span key={m}>{m}</span>)}</div>
        </div>
        <div className="vis">
          <div className="arch ph" id="heroPh"><img id="heroImg" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1100&q=80" alt="Ambiente claro e acolhedor com planta e poltrona" /></div>
          <div className="chip-card c1 h-pop"><i><Monitor /></i><span><b>Sessões online</b>De qualquer lugar do Brasil</span></div>
          <div className="chip-card c2 h-pop"><i><Pin /></i><span><b>Consultório</b>Espaço reservado e tranquilo</span></div>
        </div>
      </div>
    </section>
  )
}
