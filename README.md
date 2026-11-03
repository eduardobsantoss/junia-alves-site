# Júnia Alves · site

Site da psicóloga Júnia Alves em React + Vite, com animações em GSAP (ScrollTrigger) e rolagem suave com Lenis.

```bash
npm install      # uma vez
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera dist/ com o HTML já pré-renderizado
```

## Onde mexer

- `src/content.js`: textos, listas, links (Kiwify, Instagram) e o CRP.
- `src/components/`: uma seção por arquivo, na ordem da página.
- `src/styles.css`: todo o visual. Os dois temas (creme e bordô) saem das variáveis no topo.
- `src/motion.js`: todas as animações, na ordem da página.
- `public/bordo/` e `public/creme/`: links que abrem o site já num tema.

Na URL, `?v=bordo` ou `?v=creme` força um tema, e `?static` desliga as animações e mostra tudo no estado final.

## Publicação

Cada push na `main` publica no GitHub Pages pelo workflow `.github/workflows/deploy.yml`.
