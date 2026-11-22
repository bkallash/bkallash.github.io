const en = {
  name: 'Bayan Kallash',
  role: 'AI Engineer',
  status: 'Available for remote roles and freelance projects',

  ui: {
    skip: 'Skip to content',
    nav: 'Main',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    switchTo: 'عربي',
    cv: 'CV',
    downloadCv: 'Download CV',
  },

  nav: { contact: 'Contact' },

  home: {
    title: 'Bayan Kallash · AI Engineer',
    line: 'I build AI features, RAG, and evaluated multi‑agent workflows, along with the web apps and system design behind them.',
    selected: 'Selected projects',
    allProjects: 'See all projects',
  },

  work: {
    title: 'Projects',
    capsTitle: 'What I build',
    featuredTitle: 'Featured',
    intro: 'AI products and web applications built for real use, spanning document reading, RAG, multi-agent workflows, and dependable backends.',
    capabilities: {
      ai: { name: 'Product AI features', line: 'Document reading and source-cited answers built directly into products.' },
      agents: { name: 'Multi-agent workflows and evaluation', line: 'Focused AI agents measured and refined against clear test sets.' },
      web: { name: 'Full-stack web apps', line: 'Backends, APIs, and user interfaces built cleanly for production.' },
      systems: { name: 'System design', line: 'Reliable architecture with job queues, failure recovery, streaming, and tools shared across clients.' },
    },
    minorTitle: 'Smaller builds',
    minor: {
      form: 'Create a form through chat, then review replies with tone analysis and alerts for unusual answers.',
      cinematch: 'Movie and TV recommendations with a chat assistant.',
      receiptsnap: 'Expense tool that reads receipts and checks each one against company policy.',
    },
    code: 'Code',
    live: 'Live',
  },

  caseStudy: {
    folio: 'Part of Folio, built for Itqan Consulting',
    inDev: 'In development',
    how: 'How it works',
    person: 'Human step',
    results: 'Results',
    screens: 'Screens',
    stack: 'Stack',
    next: 'Next project',
  },

  projects: {
    'invoice-ocr': {
      title: 'Invoice OCR',
      summary: 'Turns scanned supplier invoices into a checked VAT workbook.',
      problem: 'A tax firm typed scanned supplier invoices into a 15-column VAT sheet by hand, spending about 6 hours per batch.',
      outcome: 'A batch now finishes in 15 minutes or less, and a person only reviews what the system flags.',
      rule: 'A value is printed on the invoice, or it stays empty.',
      flow: [
        { step: 'Upload', text: 'A customer’s scanned PDF goes in, keeping every page tied to its page number.' },
        { step: 'Read', text: 'The system reads each page across 14 document types and links every value to its printed text.' },
        { step: 'Group', text: 'Pages join into single invoices using page numbers, totals, and party details.' },
        { step: 'Check', text: 'Checks run on VAT numbers, totals, duplicates, dates, and branch names.' },
        { step: 'Review', text: 'A person resolves only the items flagged by the checks.', person: true },
        { step: 'Export', text: 'Outputs an Excel workbook with complete invoices on one sheet and incomplete ones on another.' },
      ],
      results: [
        { value: '5.7h', label: 'saved per batch', note: 'Down from about 6 hours by hand to 15 min or less' },
        { value: '24×', label: 'faster than manual entry', note: 'At minimum, on the same batch' },
        { value: '3', label: 'error types caught', note: 'Duplicates, wrong VAT math, and conflicting details' },
      ],
      captions: [
        'A stamp covers part of the supplier’s VAT number, so the system flags it for review. All invoices shown are fictional samples.',
        'Every extracted field links back to the printed text and page it came from.',
        'The Excel export: complete invoices on one sheet, incomplete ones on another, with each doubtful cell marked.',
      ],
    },
    'zakat-chat': {
      title: 'Zakat Chat',
      summary: 'Answers Saudi tax questions in Arabic, citing the exact article behind every point.',
      problem: 'Saudi tax rules live inside long Arabic regulations. A general chatbot answers with confidence and cites nothing.',
      outcome: 'This chat answers in Arabic from 634 articles across 10 regulations and cites the page behind every point.',
      rule: 'Every point cites the article it rests on.',
      flow: [
        { step: 'Ask', text: 'The adviser asks a question in plain Arabic inside a private chat.' },
        { step: 'Search', text: 'The system navigates each regulation’s chapters and articles, then reads matching articles in full.' },
        { step: 'Check amendments', text: 'The system checks related amendments too and marks any repealed text.' },
        { step: 'Answer', text: 'Returns a short ruling, the reasoning behind it, and a citation for every point.' },
        { step: 'Verify', text: 'Every citation opens the article’s exact wording, regulation, and page.', person: true },
      ],
      results: [
        { value: '634', label: 'citable articles', note: 'Each linked to its regulation, page, and edition' },
        { value: '10', label: 'regulations covered', note: 'VAT, Zakat, income tax, excise, real estate, and customs' },
        { value: '6', label: 'search tools', note: 'One shared toolset for the chat and any MCP client' },
      ],
      captions: [
        'Hovering over a citation shows the article’s exact wording, regulation, and page.',
        'Start screen with suggested questions.',
        'A citation opened in full to show the verbatim article text.',
      ],
    },
    fluentia: {
      title: 'Fluentia',
      summary: 'An English writing coach where seven specialist AI reviewers grade each draft.',
      problem: 'B1–C1 English learners often write below their level. Grading everything in one pass produces soft scores, so the same mistakes keep returning.',
      outcome: 'Fluentia splits the review across seven focused agents and tracks the mistakes that repeat.',
      rule: 'Feedback stays honest, even when it’s unflattering.',
      flow: [
        { step: 'Write', text: 'The learner writes for a realistic scenario with a defined reader, tone, and word count.', person: true },
        { step: 'Review', text: 'Seven agents read the draft at once: grammar, vocabulary, register, tone, fluency, coherence, and task.' },
        { step: 'Judge', text: 'Each category gets a score from 1 to 10. One serious mistake holds the score down.' },
        { step: 'Track', text: 'A mistake seen 5 times in the last 30 pieces becomes a named habit to fix.' },
        { step: 'Report', text: 'Line-by-line fixes, a corrected version, and practice targeted at those habits.' },
      ],
      results: [
        { value: '3.7s', label: 'for a full review', note: 'Down from 30–60 s before' },
        { value: '8/8', label: 'live runs finish all 7 categories', note: 'About 1 in 3 failed before the fix' },
        { value: '20', label: 'eval cases', note: 'Planted mistakes, scored by category' },
      ],
      captions: [
        'The writing screen, shown with a demo account and a sample draft.',
        'Learner dashboard with recommended scenarios.',
        'The scenario library.',
      ],
    },
  },

  about: {
    title: 'About',
    bio: [
      'I’m Bayan, an AI engineer building product AI features, RAG, and multi‑agent workflows that teams can test and trust in production.',
      'I pair that work with full-stack web development and system design, covering APIs, interfaces, job queues, and failure recovery. I start with the business problem, communicate clearly, own the outcome, and ship on schedule.',
    ],
    education: 'Education',
    degree: 'B.Sc. Software Development, Islamic University of Gaza',
    courses: 'Also: Advanced Web Development Bootcamp (UCASTI) · SPOCS Agentic AI course',
    built: 'Built with',
    also: 'Also use',
  },

  contact: {
    line: 'Tell me about the role you’re hiring for or the project you have in mind.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    whatsappValue: 'Send a message',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    upwork: 'Upwork',
    upworkValue: 'Hire me',
  },
};

export default en;
