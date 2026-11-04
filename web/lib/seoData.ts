export const SEO_CONTENT: Record<string, {
  title: string;
  description: string;
  howToSteps: string[];
  tips: string[];
  faqs: { question: string; answer: string }[];
}> = {
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
      "Ensure high contrast between the QR pattern and the background for fast scanning in low light.",
      "For long URLs, consider using clean shortlinks to make the QR matrix less dense and easier to scan from a distance."
    ],
    faqs: [
      {
        question: "Do these QR codes expire after 14 or 30 days?",
        answer: "No! Unlike commercial QR services that use expiring redirect links to charge monthly fees, NEXORA AI encodes your exact data directly into the QR matrix (Static QR). It will work forever."
      },
      {
        question: "Is there a limit on how many QR codes I can create?",
        answer: "There are zero limits. You can generate unlimited QR codes completely free."
      },
      {
        question: "Can I use these QR codes for commercial products and menus?",
        answer: "Yes, all generated QR codes are 100% royalty-free for personal and commercial use."
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
      "Click 'Copy' to securely copy your new password without it ever touching a remote server."
    ],
    tips: [
      "A 16-character password with mixed symbols takes modern quantum/GPU clusters trillions of years to brute force.",
      "Never reuse the same password across multiple platforms, especially primary email and financial accounts.",
      "Store your generated passwords inside an encrypted password manager (like Bitwarden or 1Password)."
    ],
    faqs: [
      {
        question: "Are generated passwords sent to your server or logged?",
        answer: "Never. Passwords are generated strictly client-side using JavaScript's window.crypto.getRandomValues(). No network requests are made, guaranteeing zero server-side exposure."
      },
      {
        question: "What makes a password truly secure?",
        answer: "True security comes from length and high mathematical entropy (unpredictability). Avoid using dictionary words, pet names, or birth years."
      }
    ]
  },

  prompt: {
    title: "AI Prompt Enhancer & Master Prompt Architecture",
    description: "The NEXORA AI Prompt Enhancer is a free utility designed to transform vague, single-line inputs into rigorous, high-yield system prompts. Designed for LLMs including OpenAI ChatGPT (GPT-4o), Anthropic Claude 3.5 Sonnet, and Midjourney v6.",
    howToSteps: [
      "Select your target AI persona (e.g. Senior Software Engineer, Copywriter, Trader).",
      "Choose the desired tone and delivery style to eliminate typical conversational AI filler.",
      "Enter your raw core concept or command into the input box.",
      "Click 'Enhance Prompt' and instantly copy the engineered master prompt."
    ],
    tips: [
      "Always define clear constraints: Tell the AI what NOT to do to save tokens and prevent common hallucinations.",
      "Few-shot examples increase output accuracy by over 40% when prompting for structured data or code."
    ],
    faqs: [
      {
        question: "Why should I use structured prompting instead of simple questions?",
        answer: "A structured prompt provides deep context and specific behavioral guardrails, resulting in significantly higher quality, actionable code, and zero conversational fluff."
      }
    ]
  },

  crypto: {
    title: "Cryptocurrency Profit, Loss & Leverage ROI Calculator",
    description: "Accurately compute net returns, target exits, and Return on Equity (ROE) across spot and leveraged futures positions. Built for traders on Binance, Bybit, OKX, and Coinbase.",
    howToSteps: [
      "Select whether your trade is a LONG (Buy) or SHORT (Sell) position.",
      "Enter your specific entry price and your projected take-profit exit price.",
      "Input your base collateral (investment margin amount in USD/USDT).",
      "Choose your leverage multiplier and review your real-time Net Profit and ROI percentage."
    ],
    tips: [
      "Always account for funding rates and exchange taker fees when trading on 10x leverage or higher.",
      "Remember that 10x leverage means a 10% adverse price move results in total margin liquidation."
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
      "Select your content niche (Tech, Finance, Gaming, Education, etc.).",
      "Click 'Generate Viral SEO Bundle' and copy the formatted comma-separated list directly."
    ],
    tips: [
      "Place your main target keyword within the first 30 characters of your YouTube video title.",
      "Keep video titles under 60 characters so they don't get truncated on mobile screens."
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
      "Use the reading time metric to optimize blog posts and newsletter articles for reader attention spans."
    ],
    faqs: [
      {
        question: "What is the average human reading speed used for calculation?",
        answer: "Our reading time calculator is calibrated to the standard adult comprehension speed of 200 to 250 words per minute."
      }
    ]
  }
};
