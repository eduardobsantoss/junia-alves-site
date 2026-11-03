// Conteúdo do site. Para trocar textos, links e itens das listas, edite aqui; o layout fica nos componentes.

export const KIWIFY = 'https://pay.kiwify.com.br/6UQoaHd'
export const INSTAGRAM = 'https://www.instagram.com/juniaalvespsi/'
export const CRP = 'CRP 00/00000'

export const nav = [
  ['#sobre', 'Sobre'],
  ['#temas', 'Como posso ajudar'],
  ['#atendimento', 'Atendimento'],
  ['#programa', 'Programa'],
  ['#duvidas', 'Dúvidas'],
  ['#contato', 'Contato'],
]

export const heroMeta = ['Atendimento online', 'Presencial em Cidade/UF', 'Adultos']

// a <em> no meio do texto (palavra manuscrita) fica entre "antes" e "depois"
export const manifesto = {
  antes: 'Terapia não é sobre ter todas as respostas. É sobre criar espaço para as perguntas certas, olhar para a sua história com mais gentileza e encontrar, no seu ritmo, novas formas de',
  destaque: 'viver',
  depois: 'o que importa.',
}

export const creds = [
  { valor: '+8', count: 8, legenda: 'anos de experiência clínica' },
  { valor: 'TCC', legenda: 'Abordagem Cognitivo-Comportamental' },
  { valor: '+1.200', count: 1200, legenda: 'sessões realizadas' },
]

// foto: card com imagem no lugar do número grande
export const temas = [
  { titulo: 'Ansiedade', texto: 'Quando a mente não desliga, o corpo sente e o futuro parece pesar mais do que o presente.' },
  { titulo: 'Autoestima', texto: 'Reconstruir a relação consigo, reconhecer seu valor e lidar com a autocrítica.' },
  { titulo: 'Relacionamentos', texto: 'Vínculos afetivos, familiares e profissionais, limites e comunicação.', foto: { src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=900&q=80', alt: 'Duas mãos se aproximando' } },
  { titulo: 'Luto e perdas', texto: 'Um espaço para atravessar a dor da ausência e ressignificar o que fica.' },
  { titulo: 'Transições de vida', texto: 'Mudanças de carreira, maternidade, término, nova cidade. Fases que pedem cuidado.' },
  { titulo: 'Autoconhecimento', texto: 'Entender seus padrões, desejos e limites para fazer escolhas mais conscientes.' },
]

export const passos = [
  { titulo: 'Primeiro contato', texto: 'Você me chama pelo WhatsApp e tiramos dúvidas sobre horários, valores e formato.' },
  { titulo: 'Sessão de acolhimento', texto: 'Um primeiro encontro para nos conhecermos e entendermos o que te trouxe até aqui.' },
  { titulo: 'Processo terapêutico', texto: 'Sessões semanais de 50 minutos, com objetivos construídos juntos ao longo do caminho.' },
  { titulo: 'No seu ritmo', texto: 'Revisitamos o processo periodicamente, respeitando suas conquistas e necessidades.' },
]

export const modos = [
  {
    tipo: 'Online', titulo: 'Do conforto da sua casa',
    foto: { src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80', alt: 'Sala clara com plantas e luz natural' },
    itens: ['Videochamada em plataforma segura', 'Para todo o Brasil e brasileiros no exterior', 'Horários flexíveis, inclusive à noite'],
  },
  {
    tipo: 'Presencial', titulo: 'Um espaço só seu',
    foto: { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80', alt: 'Poltrona em ambiente tranquilo' },
    itens: ['Consultório reservado em Bairro, Cidade/UF', 'Ambiente acolhedor e com sigilo garantido', 'Fácil acesso e estacionamento próximo'],
  },
]

export const programa = {
  texto: 'Um caminho guiado para reconhecer, acolher e expressar o que você sente, sem se cobrar por isso. Para fazer no seu ritmo, de onde estiver.',
  itens: ['Conteúdos em vídeo para assistir quando quiser', 'Exercícios práticos para levar para o dia a dia', 'Acesso pelo celular ou computador'],
}

export const duvidas = [
  { p: 'Preciso estar em crise para começar terapia?', r: 'Não. A terapia é um espaço de cuidado e autoconhecimento, e pode ser buscada em qualquer momento da vida, não apenas em situações difíceis.' },
  { p: 'Como funciona a terapia online?', r: 'As sessões acontecem por videochamada, em plataforma segura. Basta um lugar reservado, fone de ouvido e uma boa conexão.' },
  { p: 'Quanto tempo dura cada sessão?', r: 'Cada sessão tem 50 minutos e, em geral, acontece uma vez por semana. A frequência pode ser ajustada conforme o momento do processo.' },
  { p: 'Você atende por convênio?', r: 'O atendimento é particular, mas emito recibo para que você solicite reembolso junto ao seu plano de saúde, quando houver essa cobertura.' },
  { p: 'O que eu falo fica entre nós?', r: 'Sim. O sigilo é um dever ético da psicologia, garantido pelo Código de Ética Profissional do Psicólogo.' },
]

export const canais = [
  { icone: 'whats', rotulo: 'WhatsApp', valor: '(00) 00000-0000', href: '#contato' },
  { icone: 'insta', rotulo: 'Instagram', valor: '@juniaalvespsi', href: INSTAGRAM, externo: true },
  { icone: 'mail', rotulo: 'E-mail', valor: 'contato@juniaalves.com.br', href: '#contato' },
  { icone: 'pin', rotulo: 'Consultório', valor: 'Bairro, Cidade/UF', href: '#contato' },
]
