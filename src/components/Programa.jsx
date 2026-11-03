import { KIWIFY, programa } from '../content.js'
import iconeCreme from '../assets/img/icone-creme.png'
import { Arrow, Check, Lock, Mono, Phone } from './icons.jsx'

export default function Programa() {
  return (
    <section className="prog ctx-a g" id="programa">
      <div className="wrap">
        <div className="card ctx-b grain">
          <Mono />
          <div className="copy">
            <p className="eyebrow">Programa online</p>
            <h2 className="split4">Emoções sem <span className="script">culpa</span></h2>
            <p>{programa.texto}</p>
            <ul>{programa.itens.map(it => <li key={it}>{it}</li>)}</ul>
            <div className="buy">
              <a className="btn" href={KIWIFY} target="_blank" rel="noopener">Quero conhecer o programa <span className="arr"><Arrow /></span></a>
              <small><Lock />Pagamento seguro pela Kiwify</small>
            </div>
          </div>
          <div className="cover-wrap">
            <a className="cover" id="cover" href={KIWIFY} target="_blank" rel="noopener" aria-label="Programa Emoções sem Culpa">
              <Mono />
              <span className="lb">Programa</span>
              <span className="tt">Emoções sem<span>culpa</span></span>
              <span className="au"><img src={iconeCreme} alt="" />Júnia Alves · Psicóloga</span>
            </a>
            <div className="chip-card p1"><i><Check /></i><span><b>Acesso imediato</b>Comece hoje mesmo</span></div>
            <div className="chip-card p2"><i><Phone /></i><span><b>100% online</b>No seu tempo</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
