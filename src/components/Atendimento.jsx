import { modos } from '../content.js'

export default function Atendimento() {
  return (
    <section className="atend ctx-a g" id="atendimento">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Atendimento</p>
          <h2>Onde você <span className="script">estiver</span></h2>
          <p>A terapia online tem a mesma qualidade e o mesmo sigilo do presencial. Você escolhe o formato que faz mais sentido para a sua rotina.</p>
        </div>
        <div className="modos">
          {modos.map(m => (
            <article className="modo" key={m.tipo}>
              <div className="ph" data-parallax="6"><img src={m.foto.src} alt={m.foto.alt} loading="lazy" /></div>
              <div className="b"><h3><small>{m.tipo}</small>{m.titulo}</h3><ul>{m.itens.map(it => <li key={it}>{it}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
