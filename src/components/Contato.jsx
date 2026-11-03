import { canais, CRP } from '../content.js'
import logoCreme from '../assets/img/logo-creme.png'
import logoBordo from '../assets/img/logo-bordo.png'
import { Arrow, CanalIcon, Mono } from './icons.jsx'

export default function Contato() {
  return (
    <section className="contato ctx-a g" id="contato">
      <Mono id="footMono" />
      <div className="wrap" style={{ position: 'relative' }}>
        <h2 className="big">Vamos <span className="script">conversar?</span></h2>
        <p className="sub">Dar o primeiro passo pode parecer difícil. Mande uma mensagem, sem compromisso, e eu te explico como podemos começar.</p>
        <div className="cta"><a className="btn" href="#contato">Chamar no WhatsApp <span className="arr"><Arrow /></span></a></div>
        <div className="channels">
          {canais.map(c => (
            <a className="channel" href={c.href} key={c.rotulo} {...(c.externo ? { target: '_blank', rel: 'noopener' } : {})}>
              <span className="t"><span className="ic"><CanalIcon nome={c.icone} /></span></span>
              <span><small>{c.rotulo}</small><b>{c.valor}</b></span>
            </a>
          ))}
        </div>
      </div>
      <footer>
        <div className="wrap">
          <div className="logo" id="footLogo"><img className="lg-c" src={logoCreme} alt="Júnia Alves, Psicóloga" /><img className="lg-b" src={logoBordo} alt="Júnia Alves, Psicóloga" /></div>
          <div className="bot">
            <span>{`© 2026 Júnia Alves · Psicóloga · ${CRP}`}</span>
            <span className="cvv">Este site não oferece atendimento de urgência. Em caso de crise, ligue <b>188</b> (CVV) ou procure o serviço de saúde mais próximo.</span>
          </div>
        </div>
      </footer>
    </section>
  )
}
