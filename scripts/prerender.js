// Pré-renderização: coloca o HTML do site dentro do dist/index.html, para o conteúdo chegar pronto
// ao Google e às prévias de link (WhatsApp, Instagram) sem depender do JavaScript.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const html = readFileSync('dist/index.html', 'utf-8')
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
if (!html.includes('<!--app-->')) throw new Error('marcador <!--app--> não encontrado em dist/index.html')
writeFileSync('dist/index.html', html.replace('<!--app-->', render()))
rmSync('dist-ssr', { recursive: true, force: true })
console.log('pré-renderizado: dist/index.html')
