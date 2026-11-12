export const SEO_CONTENT: Record<string, {
  title: string;
  description: string;
  howToSteps: string[];
  tips: string[];
  faqs: { question: string; answer: string }[];
}> = {
  wordcounter: {
    title: "Free Real-Time Word & Character Counter",
    description: "An essential writing productivity tool for students, authors, journalists, and content creators. Instantly analyze word counts, character density (with and without spaces), paragraph volume, and estimated reading/speaking times.",
    howToSteps: [
      "Type directly or paste your text into the input workspace.",
      "Metrics update in real-time without requiring any button clicks or page refreshes.",
      "Review the estimated silent reading time and spoken presentation duration.",
      "Click 'Copy Text' or 'Clear' when finished."
    ],
    tips: [
      "Most academic essays require standard 250 words per double-spaced page.",
      "The average person speaks at approximately 125 to 150 words per minute during presentations.",
      "Google search meta descriptions perform best between 150 to 160 characters."
    ],
    faqs: [
      {
        question: "Is there a limit on how many words I can paste?",
        answer: "No. The NEXORA AI Word Counter can handle full-length book manuscripts, master theses, and lengthy legal agreements with zero performance lag."
      },
      {
        question: "Is my text private and secure?",
        answer: "Yes. All word counting and analytical calculations occur entirely within your local browser memory. No text is ever uploaded or saved to remote databases."
      }
    ]
  },

  caseconverter: {
    title: "Instant Text Case Converter & Casing Formatter",
    description: "Cleanly convert any text into sentence case, lowercase, UPPERCASE, Title Case, camelCase, or snake_case in one click. Designed for copywriters, social media managers, and software developers.",
    howToSteps: [
      "Paste your text into the text area.",
      "Click your target transformation button (e.g. UPPER CASE, Title Case, camelCase).",
      "Your text converts instantly in place.",
      "Click 'Copy Converted Text' to use in your document or codebase."
    ],
    tips: [
      "Use Title Case for blog headlines, email subjects, and presentation titles for maximum readability.",
      "camelCase and snake_case are ideal for programming variables, API payloads, and database fields.",
      "Sentence case is best for repairing accidental CAPS LOCK typing mistakes."
    ],
    faqs: [
      {
        question: "Can I convert text that contains numbers and special symbols?",
        answer: "Yes. The converter smartly preserves numbers and punctuation while transforming alphanumeric character cases cleanly."
      }
    ]
  },

  qrcode: {
    title: "Free High-Resolution QR Code Generator (Never Expires)",
    description: "Create custom, scan-ready QR codes for website URLs, Wi-Fi passwords, contact cards, text notes, and business links. Generated locally in your browser with zero scan limits, no redirects, and no hidden subscriptions.",
    howToSteps: [
      "Enter your destination website link, Wi-Fi credentials, or text into the input field.",
      "Select your desired output resolution (up to 500x500 pixels for crisp printing).",
      "Preview the generated QR code instantly on the right-hand canvas.",
      "Click 'Download PNG' to save your permanent, high-contrast QR code image."
    ],
    tips: [
      "Always test your QR code with at least two different smartphone cameras before printing on flyers or packaging.",
      "Ensure high contrast between the QR pattern and the background for fast scanning in low light."
    ],
    faqs: [
      {
        question: "Do these QR codes expire after 14 or 30 days?",
        answer: "No! Unlike commercial QR services that use expiring redirect links to charge monthly fees, NEXORA AI encodes your exact data directly into the QR matrix (Static QR). It will work forever."
      }
    ]
  },

  password: {
    title: "Cryptographically Secure Password & Hash Generator",
    description: "Protect your online banking, email, crypto wallets, and SaaS accounts from brute-force dictionary attacks. Generates high-entropy random keys utilizing the browser's native window.crypto Web Cryptography API.",
    howToSteps: [
      "Select your target password length using the intuitive slider (we recommend 16+ characters).",
      "Toggle character sets (Uppercase, Lowercase, Numbers, and Special Symbols).",
      "Review the real-time Security Entropy meter.",
      "Click 'Copy' to securely copy your new password."
    ],
    tips: [
      "A 16-character password with mixed symbols takes modern quantum/GPU clusters trillions of years to brute force.",
      "Never reuse the same password across multiple platforms."
    ],
    faqs: [
      {
        question: "Are generated passwords sent to your server or logged?",
        answer: "Never. Passwords are generated strictly client-side using JavaScript's window.crypto.getRandomValues(). No network requests are made."
      }
    ]
  },

  prompt: {
    title: "AI Prompt Enhancer & Master Prompt Architecture",
    description: "Transform vague, single-line inputs into rigorous, high-yield system prompts for ChatGPT (GPT-4o), Claude 3.5 Sonnet, and Midjourney.",
    howToSteps: [
      "Select your target AI persona (e.g. Senior Software Engineer, Copywriter, Trader).",
      "Choose the desired tone and delivery style.",
      "Enter your raw core concept or command into the input box.",
      "Click 'Enhance Prompt' and instantly copy the engineered master prompt."
    ],
    tips: [
      "Always define clear constraints: Tell the AI what NOT to do to save tokens and prevent common hallucinations."
    ],
    faqs: [
      {
        question: "Why should I use structured prompting?",
        answer: "A structured prompt provides deep context and specific behavioral guardrails, resulting in significantly higher quality, actionable code, and zero conversational fluff."
      }
    ]
  },

  crypto: {
    title: "Cryptocurrency Profit, Loss & Leverage ROI Calculator",
    description: "Accurately compute net returns, target exits, and Return on Equity (ROE) across spot and leveraged futures positions for Binance, Bybit, and OKX.",
    howToSteps: [
      "Select whether your trade is a LONG (Buy) or SHORT (Sell) position.",
      "Enter your specific entry price and your projected take-profit exit price.",
      "Input your base collateral and choose your leverage multiplier.",
      "Review your real-time Net Profit and ROI percentage."
    ],
    tips: [
      "Always account for funding rates and exchange taker fees when trading on 10x leverage or higher."
    ],
    faqs: [
      {
        question: "How is ROE (Return on Equity) calculated?",
        answer: "ROE (%) is calculated as: [(Exit Price - Entry Price) / Entry Price] * Leverage Multiplier * 100 for long positions."
      }
    ]
  },

  youtube: {
    title: "YouTube SEO Tag Extractor & Viral Title Generator",
    description: "Maximize your video's search ranking and Click-Through Rate (CTR) using our algorithmic title and tag generator.",
    howToSteps: [
      "Enter your primary video keyword or topic into the search bar.",
      "Select your content niche and click 'Generate Viral SEO Bundle'.",
      "Click 'Copy All Tags' to paste into YouTube Studio."
    ],
    tips: [
      "Place your main target keyword within the first 30 characters of your YouTube video title."
    ],
    faqs: [
      {
        question: "Do tags still matter for YouTube video ranking?",
        answer: "While titles and thumbnails drive CTR, tags remain essential for YouTube's search engine to understand synonyms and category context."
      }
    ]
  },

  summary: {
    title: "AI Quick Text, Article & Research Summarizer",
    description: "Condense lengthy documentation, research papers, and online articles into clear, executive-level summaries.",
    howToSteps: [
      "Paste your text, article draft, or document into the large text area.",
      "Click 'Analyze & Extract Summary' to execute rapid structural extraction.",
      "Review your word metrics and copy the key takeaway points."
    ],
    tips: [
      "Use the reading time metric to optimize blog posts and newsletter articles."
    ],
    faqs: [
      {
        question: "What is the average human reading speed used for calculation?",
        answer: "Our reading time calculator is calibrated to the standard adult comprehension speed of 200 to 250 words per minute."
      }
    ]
  }
};
