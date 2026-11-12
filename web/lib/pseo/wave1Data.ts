import { PseoPageData } from './types';

export const PSEO_PAGES: Record<string, PseoPageData> = {
  'meta-description-counter': {
    slug: 'meta-description-counter',
    parentCategory: 'word-counter',
    fullPath: '/tools/word-counter/meta-description-counter',
    canonicalUrl: 'https://nexora-ai-eosin-three.vercel.app/tools/word-counter/meta-description-counter',
    title: 'Meta Description Character Counter & SERP Snippet Preview | NEXORA AI',
    metaDescription: 'Free real-time meta description character & pixel counter. Preview Google search snippet display on mobile and desktop before publishing.',
    h1: 'Meta Description Counter & Live SERP Preview',
    subtitle: 'Measure exact character length, gauge estimated desktop & mobile pixel widths, and prevent search snippet truncation.',
    badge: 'SEO & Search Snippets',
    primaryKeyword: 'meta description character counter',
    secondaryKeywords: ['meta description length checker', 'google serp snippet preview', 'seo meta description tool', 'character counter for meta tags'],
    toolType: 'meta-description',
    introParagraphs: [
      'Crafting an effective meta description is one of the highest-leverage on-page SEO tasks. While meta descriptions do not directly influence search ranking algorithms, they directly govern your organic Click-Through Rate (CTR). A concise, compelling preview entices searchers to choose your link over competitors.',
      'Google measures search snippets primarily by container pixel width rather than a rigid character count. On desktop browsers, descriptions typically truncate around 960 pixels (roughly 155 to 160 characters). On mobile screens with narrower viewports, snippets generally cut off earlier, often around 680 to 750 pixels (roughly 120 characters). This tool provides real-time character counts alongside an interactive desktop/mobile SERP simulation to help you balance message clarity and display safety.'
    ],
    guideSection: {
      title: 'Current SERP Display Benchmarks (2026 Guidelines)',
      description: 'Search engine display behavior is dynamic. Use these empirical guidelines to draft robust snippet copy:',
      items: [
        {
          label: 'Optimal Desktop Range (140 - 158 Chars)',
          detail: 'Provides sufficient room for a complete value proposition, primary keyword integration, and an explicit call-to-action before reaching the ~960px container limit.'
        },
        {
          label: 'Mobile Cutoff Zone (~120 Chars)',
          detail: 'Front-load your most crucial hook within the first 110-120 characters so mobile searchers grasp your core offering even if the tail is truncated.'
        },
        {
          label: 'Under 100 Characters (Too Brief)',
          detail: 'Under-utilizes available SERP real estate, leaving space that competing URLs might use to provide stronger trust signals.'
        },
        {
          label: 'Over 160 Characters (Truncation Risk)',
          detail: 'Any copy extending past ~960px is replaced by Google with trailing ellipsis (...), potentially cutting off your phone number or call-to-action.'
        }
      ]
    },
    technicalNotes: [
      'Note: Google dynamically rewrites or replaces meta descriptions over 60% of the time based on the searcher’s specific query if the on-page body content offers a more direct answer.',
      'Character width is non-proportional: uppercase letters like "W" and "M" consume significantly more horizontal pixels than lowercase letters like "i" or "l".'
    ],
    howToSteps: [
      {
        name: 'Draft Your Snippet',
        text: 'Type or paste your proposed meta description into the editor.'
      },
      {
        name: 'Monitor the Real-Time Meter',
        text: 'Check the live counter status. Aim for the green optimal range (140 to 158 characters).'
      },
      {
        name: 'Toggle Device Previews',
        text: 'Switch between Desktop and Mobile preview modes to verify that your key call-to-action remains visible across devices.'
      },
      {
        name: 'Copy and Deploy',
        text: 'Click Copy to clipboard and insert the validated copy directly into your CMS or HTML head tag.'
      }
    ],
    faqs: [
      {
        question: 'Does Google have a strict, universal character limit for meta descriptions?',
        answer: 'No. Google does not enforce a rigid character count. Instead, search results restrict snippets based on container pixel width (~960px on desktop, ~680-750px on mobile). Because letters have proportional widths (a "W" is much wider than an "I"), character counts serve as a practical estimate rather than a mathematical guarantee.'
      },
      {
        question: 'Why did Google display a different description in search results than what I wrote?',
        answer: 'Google reserves the right to extract alternative snippets directly from your page text if their algorithms determine that on-page sentences better address the user’s exact search query.'
      },
      {
        question: 'Should I include keywords in my meta description?',
        answer: 'Yes. When a user searches for terms that match words in your meta description, Google bolds those matching terms in the snippet, drawing the eye and boosting click-through rates.'
      }
    ],
    relatedTools: [
      { name: 'Full Word Counter', href: '/tools/word-counter', description: 'Comprehensive sentence, paragraph, and readability analysis for long-form content.' },
      { name: 'YouTube SEO Tags Generator', href: '/tools/youtube-seo-tags', description: 'Generate high-ranking video metadata, titles, and discoverable tags.' },
      { name: 'Title Case Converter', href: '/tools/case-converter/title-case-converter', description: 'Format title tags cleanly adhering to APA, MLA, or Chicago capitalization.' }
    ]
  },

  'reading-time-calculator': {
    slug: 'reading-time-calculator',
    parentCategory: 'word-counter',
    fullPath: '/tools/word-counter/reading-time-calculator',
    canonicalUrl: 'https://nexora-ai-eosin-three.vercel.app/tools/word-counter/reading-time-calculator',
    title: 'Reading Time Calculator (Silent Reading & Speech Duration) | NEXORA AI',
    metaDescription: 'Accurately calculate silent reading time and spoken speech duration based on configurable words per minute (WPM). Get exact minute and second estimates.',
    h1: 'Reading Time & Speech Duration Calculator',
    subtitle: 'Estimate exact reading and speaking duration with customizable WPM speeds, second-level precision, and word count breakdown.',
    badge: 'Content Engagement & Timing',
    primaryKeyword: 'reading time calculator',
    secondaryKeywords: ['words to reading time', 'speech time calculator', 'calculate presentation length', 'wpm reading calculator'],
    toolType: 'reading-time',
    introParagraphs: [
      'Audience attention spans are finite. Whether you are publishing an in-depth technical guide, a thought-leadership article, or rehearsing a timed conference presentation, knowing how long your material takes to consume is essential for audience retention.',
      'Adult reading and speaking speeds vary based on audience familiarity, text complexity, and presentation style. This tool calculates both silent reading time and spoken presentation duration down to the exact second across multiple standard Words Per Minute (WPM) benchmarks.'
    ],
    guideSection: {
      title: 'Standard Words-Per-Minute (WPM) Reference Benchmarks',
      description: 'Different contexts demand different pacing metrics. Use these empirical standards to assess your text:',
      items: [
        {
          label: 'Casual / Technical Silent Reading (130 WPM)',
          detail: 'Typical for complex technical papers, medical journals, code walkthroughs, or readers for whom English is an additional language.'
        },
        {
          label: 'Average Adult Silent Reading (200 WPM)',
          detail: 'The industry-standard baseline used by Medium, Substack, and top publishers for general non-fiction web articles and blogs.'
        },
        {
          label: 'Fast Skimming / Experienced Readers (260 WPM)',
          detail: 'Represents quick reading speeds common among experienced web readers scanning light editorial or narrative newsletters.'
        },
        {
          label: 'Public Speaking / Presentation Pace (~130 WPM)',
          detail: 'Clear, deliberate speech with natural vocal pauses, articulation, and slide transitions typically runs between 120 and 140 WPM.'
        }
      ]
    },
    technicalNotes: [
      'Silent reading typically operates between 200 and 250 WPM, whereas comfortable conversational speech is much slower (130–150 WPM) to allow listeners to absorb ideas.',
      'Adding charts, code blocks, or infographic figures generally increases perceived reading time by 12–20 seconds per graphic.'
    ],
    howToSteps: [
      {
        name: 'Paste Your Draft',
        text: 'Insert your speech notes, article draft, or presentation script into the text area.'
      },
      {
        name: 'Select Reading Speed',
        text: 'Choose between Relaxed (130 WPM), Average (200 WPM), or Fast (260 WPM) silent speeds.'
      },
      {
        name: 'Review Speech Duration',
        text: 'Examine the live spoken timing section to verify your keynote, podcast segment, or pitch deck rehearsal length.'
      },
      {
        name: 'Adjust Length as Needed',
        text: 'Expand or trim your copy until the calculated duration fits your editorial or event timeslot.'
      }
    ],
    faqs: [
      {
        question: 'Why do popular publication platforms display reading time on blog posts?',
        answer: 'Research shows that setting upfront expectations reduces bounce rates. When readers see that an article takes "3 min read", they are more likely to finish it rather than abandoning an unknown page length.'
      },
      {
        question: 'How long does a 1,000-word speech take to deliver?',
        answer: 'At a measured, professional speaking pace of 130 words per minute, a 1,000-word speech takes approximately 7 minutes and 41 seconds.'
      },
      {
        question: 'How many words can the average adult read silently in one minute?',
        answer: 'Extensive psychological research indicates the average adult silent reading speed for non-fiction English text is between 200 and 250 words per minute.'
      }
    ],
    relatedTools: [
      { name: 'Word Counter for Essays', href: '/tools/word-counter/for-essays', description: 'Estimate page counts (single and double spaced) for formal academic papers.' },
      { name: 'Text Summarizer', href: '/tools/text-summarizer', description: 'Condense oversized articles and extract core bullet points instantly.' },
      { name: 'Full Word Counter', href: '/tools/word-counter', description: 'Examine detailed metrics including characters, sentences, and paragraph totals.' }
    ]
  },

  'college-essays': {
    slug: 'college-essays',
    parentCategory: 'word-counter',
    fullPath: '/tools/word-counter/college-essays',
    canonicalUrl: 'https://nexora-ai-eosin-three.vercel.app/tools/word-counter/college-essays',
    title: 'College Essay Word Counter (Common App & UC PIQ Limits) | NEXORA AI',
    metaDescription: 'Free word counter tailored for college admissions. Track strict Common App 650-word limits, UC 350-word PIQ prompts, and supplemental application essay caps.',
    h1: 'College Essay Word Counter & Admissions Limit Tracker',
    subtitle: 'Verify your personal statement against strict Common Application, UC PIQ, and supplemental essay word limits with live warnings.',
    badge: 'Admissions & University Applications',
    primaryKeyword: 'college essay word counter',
    secondaryKeywords: ['common app essay word count', 'college application essay length', 'uc personal insight questions word limit', 'supplemental essay word checker'],
    toolType: 'college-essays',
    introParagraphs: [
      'University admissions officers review tens of thousands of personal statements annually. To manage volume and evaluate conciseness, institutional portals enforce rigid, automated word limits. If your personal statement exceeds the cap by even a single word, application portals like the Common App will strictly cut off your conclusion.',
      'This specialized counter allows applicants to select their target application type—such as the Common Application personal essay (strictly 250 to 650 words) or University of California Personal Insight Questions (maximum 350 words)—providing live visual indicators as you approach or breach official thresholds.'
    ],
    guideSection: {
      title: 'Official Application Word Limits (Current 2025–2026 Admissions Cycle)',
      description: 'Requirements verified against official admissions portal documentation. Always verify specific supplemental prompts on your institution’s portal:',
      items: [
        {
          label: 'Common App Personal Essay (250 – 650 Words)',
          detail: 'The portal’s text box will not allow submission under 250 words and automatically cuts off text exceeding 650 words. Most admissions consultants recommend aiming for 550 to 620 words.'
        },
        {
          label: 'UC Personal Insight Questions (350 Words Max)',
          detail: 'Applicants to the University of California system respond to 4 out of 8 prompts. Each response has an absolute maximum of 350 words with no official minimum.'
        },
        {
          label: 'Standard Short Supplements (150 – 250 Words)',
          detail: 'Commonly requested by selective private colleges for "Why Us?" or extracurricular reflection prompts.'
        },
        {
          label: 'Single-Sentence / Short Takes (35 – 50 Words)',
          detail: 'Used by universities such as Stanford, Princeton, and USC for rapid-fire personality questions.'
        }
      ]
    },
    technicalNotes: [
      'Admissions Cycle Reference: 2025–2026 application year. Data checked against official guidelines from CommonApp.org and University of California Admissions.',
      'Important: Copying and pasting formatted text from word processors (like Google Docs or Microsoft Word) can occasionally introduce hidden non-breaking spaces or hyphenation variations that online portals count slightly differently. Always verify your final count inside the actual application submission box.'
    ],
    howToSteps: [
      {
        name: 'Select Your Target Prompt',
        text: 'Choose Common App (650 words), UC PIQ (350 words), or Custom Supplement from the selector.'
      },
      {
        name: 'Paste Your Personal Statement Draft',
        text: 'Insert your essay to observe real-time word count and remaining allowance.'
      },
      {
        name: 'Check Threshold Status',
        text: 'Ensure you meet the minimum requirement while remaining safely below the strict cutoff boundary.'
      },
      {
        name: 'Refine and Tighten',
        text: 'Eliminate filler phrasing, passive voice, and redundant adverbs to make every word count toward your personal story.'
      }
    ],
    faqs: [
      {
        question: 'Will the Common Application let me submit 651 words?',
        answer: 'No. The Common App text box enforces a hard character and word filter. Any text past word 650 is physically truncated, meaning your final sentences will not be visible to the admissions committee.'
      },
      {
        question: 'Is it bad if my Common App essay is only 500 words?',
        answer: 'No. The official minimum is 250 words. While 500 to 620 words is typical, a well-crafted, concise 500-word essay is far more impactful than a 650-word essay loaded with repetitive fluff.'
      },
      {
        question: 'Do essay titles count toward the Common App word limit?',
        answer: 'Yes. If you paste a title into the text box, the portal treats each word in the title as part of your 650-word allowance. Most advisors recommend omitting titles to preserve word count.'
      }
    ],
    relatedTools: [
      { name: 'Academic Essay Word Counter', href: '/tools/word-counter/for-essays', description: 'Track MLA and APA standard page counts for coursework and thesis papers.' },
      { name: 'Full Word Counter', href: '/tools/word-counter', description: 'Analyze character count, paragraph density, and speech duration.' },
      { name: 'Case Converter', href: '/tools/case-converter', description: 'Clean up heading and sentence formatting before final submission.' }
    ]
  },

  'for-essays': {
    slug: 'for-essays',
    parentCategory: 'word-counter',
    fullPath: '/tools/word-counter/for-essays',
    canonicalUrl: 'https://nexora-ai-eosin-three.vercel.app/tools/word-counter/for-essays',
    title: 'Essay Word Counter & Words-to-Pages Estimator | NEXORA AI',
    metaDescription: 'Calculate essay word counts and estimate single-spaced or double-spaced academic page length (MLA, APA, Chicago) with real-time formatting guidance.',
    h1: 'Essay Word Counter & Academic Page Estimator',
    subtitle: 'Measure word count, estimate typed academic page equivalents, and review standard word lengths across major essay formats.',
    badge: 'Academic Writing & Assignments',
    primaryKeyword: 'essay word counter',
    secondaryKeywords: ['words to pages essay calculator', 'academic essay word count', 'mla page length calculator', 'how many words in an essay'],
    toolType: 'for-essays',
    introParagraphs: [
      'Whether you are writing a five-paragraph argumentative essay, a college literature review, or a 15-page term thesis, staying within instructor guidelines is critical. Course syllabi often express length targets interchangeably—sometimes specifying page counts ("5 to 6 pages double-spaced") and other times designating strict word limits ("1,500 words ± 10%").',
      'Because physical page counts depend heavily on font selection, line spacing, margin sizes, and paragraph indentations, page calculations are inherently estimates. This counter provides standard academic conversions (e.g. 250 words per double-spaced page in 12pt Times New Roman) alongside word, sentence, and paragraph analytics.'
    ],
    guideSection: {
      title: 'Estimated Page Conversions (Standard 12pt Font, 1-inch Margins)',
      description: 'Estimates based on standard academic formatting (Times New Roman / Calibri, 1-inch margins):',
      items: [
        {
          label: 'Double-Spaced (~250 Words per Page)',
          detail: 'The standard requirement for MLA, APA, and Chicago research papers. A 1,000-word essay translates to roughly 4 full pages.'
        },
        {
          label: 'Single-Spaced (~500 Words per Page)',
          detail: 'Common for executive summaries, memos, journal publications, and technical project briefs.'
        },
        {
          label: 'Standard 5-Paragraph Essay (~500 - 800 Words)',
          detail: 'Comprising an introductory thesis paragraph, three body arguments, and a synthesized conclusion (typically 2 to 3 double-spaced pages).'
        },
        {
          label: 'Undergraduate Term Paper (~2,500 - 3,500 Words)',
          detail: 'Typically translates to 10 to 14 double-spaced pages, excluding title page and bibliography.'
        }
      ]
    },
    technicalNotes: [
      'Formatting Disclaimer: Page estimates are approximations. Actual printed pages will vary based on font geometry (e.g. Arial is wider than Times New Roman), header placement, block quotation usage, and Works Cited formatting.',
      'Always consult your specific course syllabus or rubric for whether bibliographies, footnotes, and appendices count toward the designated word cap.'
    ],
    howToSteps: [
      {
        name: 'Paste Your Essay Text',
        text: 'Insert your draft or assignment text into the counting area.'
      },
      {
        name: 'Review Estimated Pages',
        text: 'Examine both the single-spaced and double-spaced page approximations.'
      },
      {
        name: 'Check Sentence & Paragraph Balance',
        text: 'Ensure paragraphs average between 100 and 200 words to maintain strong academic readability.'
      },
      {
        name: 'Format Headings',
        text: 'Use our companion Title Case tool to format your paper title and section headings accurately.'
      }
    ],
    faqs: [
      {
        question: 'How many pages is a 1,500-word essay?',
        answer: 'In standard double-spaced format using 12pt font and 1-inch margins, a 1,500-word essay is approximately 6 full pages. In single-spaced format, it equals roughly 3 pages.'
      },
      {
        question: 'Do in-text citations and bibliographies count as words?',
        answer: 'In-text parenthetical citations (e.g., Smith, 2024) are almost universally included in word processing counts. However, references, bibliographies, and cover pages are typically excluded by academic professors unless noted otherwise.'
      },
      {
        question: 'What is the acceptable margin of error on essay word counts?',
        answer: 'Most universities and academic institutions allow a variance of ±10% around the assigned word target unless an absolute minimum or ceiling is explicitly stated.'
      }
    ],
    relatedTools: [
      { name: 'College Application Essay Counter', href: '/tools/word-counter/college-essays', description: 'Monitor Common App (650w) and UC PIQ (350w) admission essay boundaries.' },
      { name: 'Reading Time Calculator', href: '/tools/word-counter/reading-time-calculator', description: 'Estimate how long it will take an evaluator or peer to read your essay.' },
      { name: 'Title Case Converter', href: '/tools/case-converter/title-case-converter', description: 'Format paper titles and MLA/APA section headers correctly.' }
    ]
  },

  'title-case-converter': {
    slug: 'title-case-converter',
    parentCategory: 'case-converter',
    fullPath: '/tools/case-converter/title-case-converter',
    canonicalUrl: 'https://nexora-ai-eosin-three.vercel.app/tools/case-converter/title-case-converter',
    title: 'Title Case Converter & Headline Capitalization Tool | NEXORA AI',
    metaDescription: 'Convert headlines and titles to Title Case instantly. Compare capitalization rules across APA, MLA, Chicago, and AP editorial standards.',
    h1: 'Title Case Converter & Headline Capitalization Tool',
    subtitle: 'Capitalize article headlines, book titles, and academic headings adhering to standard editorial and style guide rules.',
    badge: 'Headlines & Style Guides',
    primaryKeyword: 'title case converter',
    secondaryKeywords: ['headline capitalization tool', 'apa title case converter', 'chicago style capitalization', 'capitalize titles online'],
    toolType: 'title-case',
    introParagraphs: [
      'Headlines and titles are the gateway to your writing. Whether writing blog titles, YouTube video names, academic research headers, or book chapters, consistent title capitalization signals professionalism and improves readability.',
      'Title capitalization is governed by nuanced grammatical rules rather than simply capitalizing every word. Coordinating conjunctions, short prepositions, and articles are kept lowercase unless they appear as the first or last word of the title. This tool converts text to Title Case while outlining the differences between major style guidelines.'
    ],
    guideSection: {
      title: 'Style Guide Capitalization Rules Compared (APA vs. Chicago vs. MLA)',
      description: 'While all major style manuals follow core title case principles, subtle distinctions exist:',
      items: [
        {
          label: 'Core Universal Rule',
          detail: 'Always capitalize the first and last word of the title and subtitle, regardless of word length or part of speech.'
        },
        {
          label: 'APA 7th Edition Rule',
          detail: 'Capitalize all words of 4 or more letters (including prepositions like "With", "From", "Over"). Lowercase conjunctions, articles, and short prepositions (3 or fewer letters).'
        },
        {
          label: 'The Chicago Manual of Style (CMOS)',
          detail: 'Lowercase all prepositions regardless of length (e.g., "between", "through", "against" remain lowercase) unless they are the first or last word.'
        },
        {
          label: 'MLA 9th Edition Standard',
          detail: 'Very similar to Chicago; lowercase all articles (a, an, the), coordinating conjunctions (and, but, for, or, so), and all prepositions regardless of length.'
        }
      ]
    },
    technicalNotes: [
      'Important limitation: Grammatical part-of-speech tagging can occasionally require human discretion. For instance, the word "down" is lowercase when used as a preposition ("walking down the street") but capitalized when functioning as an adverb or part of a phrasal verb ("Turn Down the Volume").',
      'Hyphenated compound words generally require capitalizing both elements in modern APA and Chicago titles (e.g., "High-Quality Content").'
    ],
    howToSteps: [
      {
        name: 'Input Your Headline',
        text: 'Type or paste your draft headline, article title, or subtitle into the conversion box.'
      },
      {
        name: 'Execute Title Case',
        text: 'Click Convert to Title Case to capitalize main words while maintaining proper lowercase conjunctions and articles.'
      },
      {
        name: 'Review Edge Cases',
        text: 'Check any phrasal verbs or prepositions against your publication’s target style guide (APA vs. Chicago).'
      },
      {
        name: 'Copy to Clipboard',
        text: 'Copy the formatted headline directly into your document or publishing platform.'
      }
    ],
    faqs: [
      {
        question: 'Which words should NOT be capitalized in Title Case?',
        answer: 'Articles (a, an, the), coordinating conjunctions (and, but, for, or, nor), and short prepositions (in, to, at, by, for, off, on) are kept lowercase unless they are the first or last word of the title.'
      },
      {
        question: 'Should the first word after a colon in a title be capitalized?',
        answer: 'Yes. In both APA and Chicago styles, the first word of a subtitle following a colon or em dash must always be capitalized.'
      },
      {
        question: 'Is "is" capitalized in Title Case?',
        answer: 'Yes. Even though "is" has only two letters, it is a verb (a form of "to be"). All verbs must be capitalized in title case across all major style guides.'
      }
    ],
    relatedTools: [
      { name: 'Sentence Case Converter', href: '/tools/case-converter/sentence-case-converter', description: 'Convert text so only the first letter of each sentence is capitalized.' },
      { name: 'Full Case Converter', href: '/tools/case-converter', description: 'Switch between UPPERCASE, lowercase, camelCase, and snake_case.' },
      { name: 'Meta Description Counter', href: '/tools/word-counter/meta-description-counter', description: 'Check that your formatted titles and meta descriptions fit Google SERP boundaries.' }
    ]
  },

  'sentence-case-converter': {
    slug: 'sentence-case-converter',
    parentCategory: 'case-converter',
    fullPath: '/tools/case-converter/sentence-case-converter',
    canonicalUrl: 'https://nexora-ai-eosin-three.vercel.app/tools/case-converter/sentence-case-converter',
    title: 'Sentence Case Converter (Capitalize First Letter of Sentences) | NEXORA AI',
    metaDescription: 'Instantly convert accidental all-caps or unformatted text to proper Sentence case. Automatically capitalize the first letter following punctuation marks.',
    h1: 'Sentence Case Converter & Text Normalizer',
    subtitle: 'Fix accidental Caps Lock text, normalize raw transcripts, and capitalize the initial letter after periods, question marks, and exclamation points.',
    badge: 'Text Normalization & Grammar',
    primaryKeyword: 'sentence case converter',
    secondaryKeywords: ['capitalize first letter of each sentence', 'sentence case tool', 'fix all caps text', 'text case normalizer'],
    toolType: 'sentence-case',
    introParagraphs: [
      'Accidentally leaving the Caps Lock key engaged or dealing with raw, unformatted speech-to-text transcripts can result in blocks of shouting uppercase or sloppy lowercase text. Manually retyping or fixing punctuation capitalization across hundreds of sentences is tedious and error-prone.',
      'Sentence case normalizes your entire text by converting all characters to lowercase while automatically capitalizing the first letter of each sentence following standard terminal punctuation (periods, question marks, and exclamation marks).'
    ],
    guideSection: {
      title: 'When to Use Sentence Case vs. Other Text Formats',
      description: 'Sentence case has become the dominant standard across digital products and modern writing:',
      items: [
        {
          label: 'Digital Product UI & Button Labels',
          detail: 'Leading design systems (including Apple Human Interface Guidelines and Google Material Design) recommend sentence case for button labels and dialogs because it is easier to scan than title case.'
        },
        {
          label: 'Accidental Caps Lock Recovery',
          detail: 'Instantly salvages entire paragraphs typed with Caps Lock enabled without having to rewrite your thoughts.'
        },
        {
          label: 'Speech-to-Text & Transcription Cleanup',
          detail: 'Raw automated transcriptions often produce endless lowercase strings. Sentence case restores natural reading cadence.'
        },
        {
          label: 'Reference Lists (APA Style)',
          detail: 'APA 7th edition mandates that book and article titles in reference lists be written in sentence case rather than title case.'
        }
      ]
    },
    technicalNotes: [
      'Algorithmic Consideration: Because this tool runs locally in your browser for privacy and speed, proper nouns (such as names of people, cities, or commercial brands like "Paris", "Google", or "John") and the personal pronoun "I" are not always automatically identified. Always perform a quick final check for proper nouns after conversion.',
      'Numbered lists and bulleted outlines are recognized when preceded by standard sentence breaks.'
    ],
    howToSteps: [
      {
        name: 'Paste Raw Text',
        text: 'Insert your uppercase, lowercase, or poorly formatted text into the input box.'
      },
      {
        name: 'Convert to Sentence Case',
        text: 'Click Convert to Sentence Case to trigger punctuation-aware capitalization.'
      },
      {
        name: 'Verify Proper Nouns',
        text: 'Scan the output to capitalize specific brand names, country names, or acronyms.'
      },
      {
        name: 'Copy and Use',
        text: 'Copy the normalized, clean text back to your editor or email draft.'
      }
    ],
    faqs: [
      {
        question: 'What is the definition of sentence case?',
        answer: 'Sentence case is the capitalization standard where only the first letter of the first word in a sentence is capitalized, along with any proper nouns, matching standard prose conventions in English books and news.'
      },
      {
        question: 'Does the tool capitalize the pronoun "I"?',
        answer: 'Yes, our conversion algorithm includes specific regex rules to ensure isolated "i" words followed by punctuation, apostrophes (e.g. I\'m, I\'ve), or spaces are capitalized.'
      },
      {
        question: 'Does sentence case handle multiple punctuation marks like ellipses (...)?',
        answer: 'Yes. The sentence parser identifies sentence boundary delimiters including periods, question marks, exclamation marks, and ellipses, capitalizing the subsequent alphanumeric character.'
      }
    ],
    relatedTools: [
      { name: 'Title Case Converter', href: '/tools/case-converter/title-case-converter', description: 'Capitalize headlines and book titles according to APA and Chicago guidelines.' },
      { name: 'Full Case Converter', href: '/tools/case-converter', description: 'Access ALL CAPS, lowercase, camelCase, and snake_case transformations.' },
      { name: 'Full Word Counter', href: '/tools/word-counter', description: 'Analyze sentence counts, average sentence length, and readability metrics.' }
    ]
  }
};

export const WORD_COUNTER_PSEO_SLUGS = ['meta-description-counter', 'reading-time-calculator', 'college-essays', 'for-essays'] as const;
export const CASE_CONVERTER_PSEO_SLUGS = ['title-case-converter', 'sentence-case-converter'] as const;

export const ALL_PSEO_PAGES = Object.values(PSEO_PAGES);
