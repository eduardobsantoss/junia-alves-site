import { Fragment } from 'react'
import { manifesto } from '../content.js'
import { Icone } from './icons.jsx'

// cada palavra vira um <span class="w"> para acender uma a uma com a rolagem
const palavras = txt => txt.split(' ').map((w, i) => <Fragment key={i}>{i > 0 && ' '}<span className="w">{w}</span></Fragment>)

export default function Manifesto() {
  return (
    <section className="manif ctx-a g">
      <div className="wrap">
        <p className="eyebrow">Sobre a terapia</p>
        <p id="manifesto">{palavras(manifesto.antes)} <em className="w">{manifesto.destaque}</em> {palavras(manifesto.depois)}</p>
        <div className="sign"><Icone />Júnia Alves · Psicóloga</div>
      </div>
    </section>
  )
}
