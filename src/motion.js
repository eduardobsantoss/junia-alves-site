// Todas as animações do site. Ficam num lugar só, na ordem da página, porque o ScrollTrigger
// calcula as posições na ordem de criação: a seção fixada dos temas precisa existir antes das seções abaixo dela.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

// quebra o texto em palavras com máscara, para cada palavra subir de dentro da linha
const split = sel => document.querySelectorAll(sel).forEach(el => {
  if (el.dataset.split) return
  el.dataset.split = '1'
  const walk = n => [...n.childNodes].forEach(c => {
    if (c.nodeType === 3) {
      const f = document.createDocumentFragment()
      c.textContent.split(/(\s+)/).forEach(w => {
        if (!w) return
        if (/^\s+$/.test(w)) { f.append(w); return }
        const o = document.createElement('span')
        o.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:top;padding:.12em .06em .18em;margin:-.12em -.06em -.18em'
        const i = document.createElement('span')
        i.className = 'wi'; i.style.display = 'inline-block'; i.textContent = w
        o.append(i); f.append(o)
      })
      c.replaceWith(f)
    } else walk(c)
  })
  walk(el)
})

// depois que a palavra sobe, a máscara sai: a fonte manuscrita tem hastes e pontas que passam da caixa da palavra
const unmask = { onComplete() { this.targets().forEach(t => { t.parentElement.style.overflow = 'visible' }) } }

export function initMotion() {
  document.querySelectorAll('.ph img').forEach(i => i.addEventListener('error', () => { i.style.visibility = 'hidden' }))

  const m = document.getElementById('manifesto')
  const words = [...m.querySelectorAll('.w')]
  const STATIC = document.documentElement.classList.contains('static')
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce || STATIC) {
    words.forEach(w => w.classList.add('on'))
    return () => {}
  }

  const lenis = new Lenis({ lerp: 0.085 })
  lenis.on('scroll', ScrollTrigger.update)
  const raf = t => lenis.raf(t * 1000)
  gsap.ticker.add(raf)
  gsap.ticker.lagSmoothing(0)
  const onAnchor = e => {
    const t = document.querySelector(e.currentTarget.getAttribute('href'))
    if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -20 }) }
  }
  const anchors = [...document.querySelectorAll('a[href^="#"]')]
  anchors.forEach(a => a.addEventListener('click', onAnchor))

  split('.split'); split('.split2'); split('.split3'); split('.split4')

  const ctx = gsap.context(() => {
    // entrada
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
    tl.from('#heroPh', { clipPath: 'inset(100% 0 0 0 round 300px 300px 28px 28px)', duration: 1.8, ease: 'expo.inOut' })
      .from('#heroImg', { scale: 1.4, duration: 2.4 }, 0)
      .from('.hero .wi', { yPercent: 120, duration: 1.3, stagger: 0.07, ...unmask }, 0.3)
      .from('.h-fade', { y: 26, opacity: 0, duration: 1, stagger: 0.1 }, 0.7)
      .from('.h-pop', { y: 40, opacity: 0, scale: 0.9, duration: 1.1, stagger: 0.12 }, 1.1)
      .from('.nav .row>*', { y: -30, opacity: 0, duration: 1, stagger: 0.08 }, 0.3)
      .fromTo('#heroMono path', { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 2.6, stagger: 0.35, ease: 'power2.inOut' }, 0.2)
    gsap.to('#heroImg', { scale: 1.12, yPercent: 6, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
    gsap.to('.hero .txt', { yPercent: -14, opacity: 0.25, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
    gsap.to('.chip-card.c1', { y: -80, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
    gsap.to('.chip-card.c2', { y: -160, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })

    // manifesto acende palavra a palavra
    ScrollTrigger.create({ trigger: m, start: 'top 80%', end: 'bottom 40%', scrub: true, onUpdate: s => { const n = Math.round(s.progress * words.length); words.forEach((w, i) => w.classList.toggle('on', i < n)) } })

    // sobre
    gsap.from('.sobre .photo', { clipPath: 'inset(0 0 100% 0 round 28px)', duration: 1.6, ease: 'expo.inOut', scrollTrigger: { trigger: '.sobre', start: 'top 70%' } })
    gsap.from('.sobre .wi', { yPercent: 120, duration: 1.2, stagger: 0.06, ease: 'expo.out', ...unmask, scrollTrigger: { trigger: '.sobre h2', start: 'top 85%' } })
    gsap.from('.sobre .copy>p,.creds li', { y: 30, opacity: 0, duration: 1, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: '.sobre h2', start: 'top 75%' } })
    gsap.to('#badgeRing', { rotate: 360, ease: 'none', scrollTrigger: { trigger: '.sobre', start: 'top bottom', end: 'bottom top', scrub: true } })
    document.querySelectorAll('[data-count]').forEach(el => {
      const n = +el.dataset.count, o = { v: 0 }
      gsap.to(o, { v: n, duration: 2, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%' }, onUpdate: () => { el.textContent = '+' + Math.round(o.v).toLocaleString('pt-BR') } })
    })

    document.querySelectorAll('[data-parallax]').forEach(el => {
      const v = +el.dataset.parallax, img = el.querySelector('img')
      gsap.set(img, { scale: 1.15 })
      gsap.fromTo(img, { yPercent: -v }, { yPercent: v, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } })
    })

    // temas: rolagem horizontal fixada (desktop); carrossel de arrastar no celular e em telas baixas
    const mm = gsap.matchMedia()
    mm.add('(min-width:761px) and (min-height:560px)', () => {
      const track = document.getElementById('track')
      const dist = () => track.scrollWidth - innerWidth
      gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: '.temas', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1, onUpdate: s => gsap.set('#prog', { scaleX: s.progress }) } })
    })
    gsap.from('.temas .head>*', { y: 40, opacity: 0, duration: 1.1, stagger: 0.1, ease: 'expo.out', scrollTrigger: { trigger: '.temas', start: 'top 75%' } })

    // passos: linha percorre e os itens aparecem
    gsap.to('#stepsBar', { scaleX: 1, scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#steps', start: 'top 80%', end: 'top 35%', scrub: true } })
    gsap.from('.step', { y: 40, opacity: 0, duration: 1, stagger: 0.14, ease: 'expo.out', scrollTrigger: { trigger: '#steps', start: 'top 80%' } })
    gsap.from('.passos .head>*', { y: 40, opacity: 0, duration: 1.1, stagger: 0.1, ease: 'expo.out', scrollTrigger: { trigger: '.passos', start: 'top 75%' } })

    // faixa: abre como janela
    gsap.from('#band', { clipPath: 'inset(0 8% 0 8% round 48px)', ease: 'none', scrollTrigger: { trigger: '#band', start: 'top bottom', end: 'top 20%', scrub: true } })
    gsap.fromTo('#bandPh', { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '#band', start: 'top bottom', end: 'bottom top', scrub: true } })
    gsap.from('.band .wi', { yPercent: 120, duration: 1.3, stagger: 0.08, ease: 'expo.out', ...unmask, scrollTrigger: { trigger: '#band', start: 'top 45%' } })
    gsap.from('.band .by', { opacity: 0, y: 20, duration: 1, scrollTrigger: { trigger: '#band', start: 'top 35%' } })

    gsap.from('.atend .head>*', { y: 40, opacity: 0, duration: 1.1, stagger: 0.1, ease: 'expo.out', scrollTrigger: { trigger: '.atend', start: 'top 75%' } })
    gsap.from('.modo', { y: 80, opacity: 0, duration: 1.2, stagger: 0.15, ease: 'expo.out', scrollTrigger: { trigger: '.modos', start: 'top 85%' } })

    // programa
    gsap.from('.prog .card', { clipPath: 'inset(8% 6% 8% 6% round 60px)', ease: 'none', scrollTrigger: { trigger: '.prog', start: 'top bottom', end: 'top 35%', scrub: true } })
    gsap.from('.prog .wi', { yPercent: 120, duration: 1.2, stagger: 0.07, ease: 'expo.out', ...unmask, scrollTrigger: { trigger: '.prog h2', start: 'top 85%' } })
    gsap.from('.prog .copy>p,.prog li,.prog .buy', { y: 30, opacity: 0, duration: 1, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: '.prog h2', start: 'top 78%' } })
    gsap.fromTo('#cover', { rotate: -14, y: 80, rotateY: -18 }, { rotate: -4, y: 0, rotateY: 0, ease: 'none', scrollTrigger: { trigger: '.prog', start: 'top bottom', end: 'center center', scrub: true } })
    gsap.from('.cover-wrap .chip-card', { y: 40, opacity: 0, scale: 0.9, duration: 1.1, stagger: 0.15, ease: 'expo.out', scrollTrigger: { trigger: '.cover-wrap', start: 'top 70%' } })
    gsap.fromTo('#programa .card>.mono path,#cover .mono path', { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', stagger: 0.1, scrollTrigger: { trigger: '.prog', start: 'top 80%', end: 'center 40%', scrub: true } })
    gsap.from('.qa', { y: 30, opacity: 0, duration: 1, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: '.faq', start: 'top 70%' } })

    // contato
    gsap.fromTo('#footMono path', { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, stagger: 0.15, ease: 'none', scrollTrigger: { trigger: '.contato', start: 'top 80%', end: 'top 10%', scrub: true } })
    gsap.from('.contato .big', { y: 60, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.contato', start: 'top 70%' } })
    gsap.from('.channel', { y: 50, opacity: 0, duration: 1, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: '.channels', start: 'top 90%' } })
    gsap.from('#footLogo', { clipPath: 'inset(0 100% 0 0)', duration: 1.8, ease: 'expo.inOut', scrollTrigger: { trigger: 'footer', start: 'top 85%' } })
  })

  const refresh = () => ScrollTrigger.refresh()
  addEventListener('load', refresh)
  if (document.fonts) document.fonts.ready.then(refresh)

  return () => {
    ctx.revert()
    removeEventListener('load', refresh)
    anchors.forEach(a => a.removeEventListener('click', onAnchor))
    gsap.ticker.remove(raf)
    lenis.destroy()
  }
}
