import { creds } from '../content.js'
import { Icone } from './icons.jsx'

export default function Sobre() {
  return (
    <section className="sobre ctx-b grain g" id="sobre">
      <div className="in wrap">
        <div className="pwrap">
          <div className="photo ph ph-empty"><div className="ph-label"><b>Foto da Júnia</b><span>Retrato para a seção Sobre</span></div></div>
          <div className="badge" aria-hidden="true">
            <svg viewBox="0 0 150 150" id="badgeRing"><defs><path id="circ" d="M75 75m-58 0a58 58 0 1 1 116 0a58 58 0 1 1-116 0" /></defs><text><textPath href="#circ">acolhimento · escuta · cuidado · </textPath></text></svg>
            <Icone />
          </div>
        </div>
        <div className="copy">
          <p className="eyebrow">Prazer, sou a Júnia</p>
          <h2 className="split2">Uma escuta atenta para a sua <span className="script">história</span></h2>
          <p>Sou psicóloga clínica e acompanho adultos que desejam compreender melhor suas emoções, seus vínculos e as escolhas que fazem no dia a dia. Acredito que cada pessoa carrega uma história única, e que o cuidado começa quando ela encontra espaço para ser contada.</p>
          <p>No consultório e no online, meu compromisso é oferecer um ambiente seguro, ético e humano, onde você possa se sentir à vontade para ser quem é, sem pressa e sem julgamentos.</p>
          <ul className="creds">
            {creds.map(c => <li key={c.legenda}><b data-count={c.count}>{c.valor}</b><span>{c.legenda}</span></li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
