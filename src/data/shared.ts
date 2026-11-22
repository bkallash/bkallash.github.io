// Facts that don't change between languages: links, slugs, images, stacks.

export const links = {
  email: 'bayankallash@gmail.com',
  whatsapp: 'https://wa.me/970599756244',
  linkedin: 'https://www.linkedin.com/in/bayankallash',
  github: 'https://github.com/bkallash',
  upwork: 'https://www.upwork.com/freelancers/~0121e51312ace6f2ac',
  cv: '/cv/Bayan_Kallash_CV.pdf',
};

export const featured = [
  {
    slug: 'invoice-ocr',
    folio: true,
    shots: ['invoice-flag', 'invoice-review', 'invoice-excel'],
    stack: ['Vision LLM', 'FastAPI', 'PostgreSQL', 'OpenRouter', 'Excel export'],
  },
  {
    slug: 'zakat-chat',
    folio: true,
    shots: ['regchat-answer', 'regchat-start', 'regchat-quote'],
    stack: ['PageIndex', 'OpenRouter', 'FastAPI', 'React + TypeScript', 'MCP server', 'SSE streaming'],
  },
  {
    slug: 'fluentia',
    inDev: true,
    shots: ['fluentia-desk', 'fluentia-dashboard', 'fluentia-scenarios'],
    stack: ['Laravel', 'React + Inertia', 'TypeScript', 'Gemini', 'Eval set'],
  },
] as const;

export type Slug = (typeof featured)[number]['slug'];

export const capabilities: { key: 'ai' | 'agents' | 'web' | 'systems'; projects: Slug[] }[] = [
  { key: 'ai', projects: ['invoice-ocr', 'zakat-chat'] },
  { key: 'agents', projects: ['fluentia'] },
  { key: 'web', projects: ['fluentia', 'invoice-ocr'] },
  { key: 'systems', projects: ['invoice-ocr', 'zakat-chat'] },
];

export const minor = [
  {
    key: 'form',
    name: 'Form Generator',
    stack: ['Laravel', 'Livewire', 'Gemini'],
    code: 'https://github.com/bkallash/form-generator',
    live: 'https://formgenerator.me/',
  },
  { key: 'cinematch', name: 'CineMatch', stack: ['Python', 'FastAPI', 'Embeddings'], code: 'https://github.com/bkallash/cinematch' },
  { key: 'receiptsnap', name: 'ReceiptSnap', stack: ['Laravel', 'React', 'OCR'], code: 'https://github.com/bkallash/receipt-snap' },
] as const;

export const skills = {
  built: ['Python', 'FastAPI', 'Laravel', 'React / TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Gemini', 'OpenRouter', 'MCP', 'OCR / vision LLMs', 'RAG', 'Multi-agent', 'Evals'],
  also: ['Claude & OpenAI APIs', 'LangGraph', 'pgvector', 'vLLM / Ollama', 'Hugging Face'],
};
