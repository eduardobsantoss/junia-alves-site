import { passos } from '../content.js'

export default function Passos() {
  return (
    <section className="passos ctx-b grain g">
      <div className="wrap">
        <div className="head">
          <h2>Como <span className="script">funciona</span></h2>
          <p>Começar terapia pode gerar dúvidas. Por isso, o caminho é simples, transparente e respeita o seu tempo.</p>
        </div>
        <div className="steps" id="steps">
          <i className="bar" id="stepsBar" />
          {passos.map((p, i) => (
            <div className="step" key={p.titulo}><span className="dia" /><p className="k">{String(i + 1).padStart(2, '0')}</p><h3>{p.titulo}</h3><p>{p.texto}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
