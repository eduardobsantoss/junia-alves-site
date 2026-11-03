import { useState } from 'react'
import { duvidas } from '../content.js'

export default function Duvidas() {
  const [aberta, setAberta] = useState(0) // só uma pergunta aberta por vez; -1 fecha todas

  return (
    <section className="faq ctx-b grain g" id="duvidas">
      <div className="in wrap">
        <div className="side">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2>Antes de <span className="script">começar</span></h2>
          <p>Não encontrou o que procurava? Me chame no WhatsApp e respondo com carinho.</p>
        </div>
        <div className="list">
          {duvidas.map((d, i) => (
            <div className={i === aberta ? 'qa open' : 'qa'} key={d.p}>
              <button aria-expanded={i === aberta} onClick={() => setAberta(i === aberta ? -1 : i)}>{d.p}<span className="pm">+</span></button>
              <div className="ans"><div><p>{d.r}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
