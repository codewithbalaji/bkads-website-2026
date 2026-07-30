import type { ServiceContent } from "@/lib/services";

const ENGAGEMENT_PROCESS = [
  {
    step: "01",
    title: "Discovery & strategy",
    description:
      "We start by understanding your business, your goals, and the problem you're trying to solve.",
  },
  {
    step: "02",
    title: "Planning & architecture",
    description:
      "We map out the right approach, tools, and technical plan before any building starts.",
  },
  {
    step: "03",
    title: "Design & development",
    description:
      "Our team designs and builds the solution, keeping you updated at every stage.",
  },
  {
    step: "04",
    title: "Testing & quality checks",
    description:
      "We test thoroughly so what ships works reliably from day one.",
  },
  {
    step: "05",
    title: "Launch & ongoing support",
    description:
      "We launch your project and stay on as a partner through maintenance contracts or support retainers.",
  },
];

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "ai-automation": {
    seoTitle: "AI Automation Services for Modern Businesses | BKADS",
    metaDescription:
      "AI chatbots, RAG systems, and workflow automation that cut manual work and speed up operations. BKADS builds practical AI automation for growing businesses.",
    overview: [
      "AI automation replaces manual, repetitive work with systems that think and act on your data — chatbots that answer customer questions, document tools that read and organize paperwork, and workflows that run themselves once you set the rules.",
      "We work with small and medium businesses, manufacturing companies, and organizations going through digital transformation, based out of Chennai and serving clients across India and remotely. If your team is stuck doing the same manual tasks every day, or struggling to adopt AI in a way that actually fits your business, this is where we start.",
    ],
    features: [
      {
        title: "AI chatbots & virtual assistants",
        description:
          "Conversational assistants that handle customer questions, support requests, and internal queries around the clock.",
      },
      {
        title: "RAG & document intelligence",
        description:
          "Systems that read, search, and summarize your documents, contracts, and records so your team doesn't have to dig through files manually.",
      },
      {
        title: "Workflow automation",
        description:
          "Automating repetitive, rule-based processes — approvals, data entry, notifications — so your team can focus on higher-value work.",
      },
      {
        title: "Integration with existing tools",
        description:
          "AI systems connected to the software you already use, instead of forcing you to switch platforms.",
      },
      {
        title: "Better data visibility & reporting",
        description:
          "Automated reporting that gives you a clear, current view of what's happening in your business.",
      },
      {
        title: "Ongoing tuning & support",
        description:
          "We monitor and adjust your AI systems after launch, so accuracy and usefulness improve over time.",
      },
    ],
    process: ENGAGEMENT_PROCESS,
    faqs: [
      {
        question: "Is AI automation only for large companies?",
        answer:
          "No. We build AI automation specifically for small and medium businesses and manufacturing companies — sized to fit your budget and actual needs, not enterprise-scale complexity.",
      },
      {
        question: "Do we need our own AI or data team to use this?",
        answer:
          "No. We handle the technical work end-to-end — from planning and building to launch and support — so you don't need in-house AI expertise.",
      },
      {
        question: "Can AI automation work with the software we already use?",
        answer:
          "Yes. We design AI systems to integrate with your existing tools and data wherever possible, rather than replacing what already works.",
      },
      {
        question: "What kinds of manual processes can be automated?",
        answer:
          "Common examples include customer support responses, document review, data entry, approvals, and routine reporting — any repetitive task with a clear, describable pattern.",
      },
    ],
    relatedServiceTag: "AI Automation",
  },

  "website-design": {
    seoTitle: "Website Design Services for Modern Businesses | BKADS",
    metaDescription:
      "Modern, responsive website design with clean UX/UI and conversion-focused layouts. BKADS designs brand-focused websites for growing businesses.",
    overview: [
      "Website design is about more than looking good — it's about giving visitors a clear, easy path to understanding your business and taking action, on any device.",
      "We design modern, responsive, brand-focused websites for small and medium businesses, manufacturing companies, and organizations modernizing their online presence, from our base in Chennai to clients across India and remotely. Whether you're starting fresh or replacing an outdated site, we focus on clean UX/UI and layouts built to convert visitors into leads.",
    ],
    features: [
      {
        title: "Responsive, brand-focused UI",
        description:
          "Designs that reflect your brand and work smoothly across desktop, tablet, and mobile.",
      },
      {
        title: "Conversion-oriented layouts",
        description:
          "Page structures built around clear calls to action, so visitors know exactly what to do next.",
      },
      {
        title: "Landing pages that perform",
        description:
          "Focused landing pages for campaigns, product launches, and lead generation.",
      },
      {
        title: "Clean, user-first UX",
        description:
          "Navigation and content laid out so visitors find what they need without friction.",
      },
      {
        title: "Mobile-first approach",
        description:
          "Designed for how most visitors actually browse — starting with mobile and scaling up.",
      },
      {
        title: "Design that's ready to build on",
        description:
          "Designs handed off in a way that's straightforward to turn into a working website — including by our own development team.",
      },
    ],
    process: ENGAGEMENT_PROCESS,
    faqs: [
      {
        question: "Do you design the website, build it, or both?",
        answer:
          "Both, if you'd like. We offer website design and website development as connected services, or design alone if you have your own development team.",
      },
      {
        question: "Can you redesign our existing website instead of starting over?",
        answer:
          "Yes. We can refresh your current site's design and structure without necessarily rebuilding everything from scratch.",
      },
      {
        question: "How involved will we be in the design process?",
        answer:
          "As involved as you'd like. We usually share design drafts at key stages so you can give feedback before we move forward.",
      },
      {
        question: "Will the design work well on mobile?",
        answer:
          "Yes. Every design we create is responsive and tested across screen sizes, since most visitors browse on mobile first.",
      },
    ],
    relatedServiceTag: "Web Development",
  },

  "website-development": {
    seoTitle: "Website Development Services for Modern Businesses | BKADS",
    metaDescription:
      "Custom websites, portals, and web applications built for performance and scale. BKADS develops business websites for modern, growing companies.",
    overview: [
      "Website development turns a design into a working, reliable website — one that loads fast, works correctly, and can grow as your business does.",
      "We build custom websites and web platforms for small and medium businesses, manufacturing companies, and organizations undergoing digital transformation, working with clients based in Chennai, across India, and remotely. That includes business sites, customer or partner portals, dashboards, and full web applications.",
    ],
    features: [
      {
        title: "Business sites & portals",
        description:
          "Company websites and customer or partner portals built to represent your business accurately and reliably.",
      },
      {
        title: "Dashboards & web apps",
        description:
          "Interactive web applications and dashboards for managing data, operations, or customer accounts.",
      },
      {
        title: "Built for performance & scale",
        description:
          "Websites engineered to stay fast and stable as traffic and content grow.",
      },
      {
        title: "CMS & e-commerce integration",
        description:
          "Content management systems and online store functionality added where your business needs them.",
      },
      {
        title: "Clean, maintainable code",
        description:
          "Built with modern, well-structured code so future changes and updates are straightforward, not risky.",
      },
      {
        title: "Ongoing maintenance",
        description:
          "Maintenance contracts and support retainers to keep your website running smoothly after launch.",
      },
    ],
    process: ENGAGEMENT_PROCESS,
    faqs: [
      {
        question: "How long does a custom website take to build?",
        answer:
          "It depends on scope — a straightforward business site takes less time than a portal or web application with custom features. We'll give you a clear timeline after the planning stage.",
      },
      {
        question: "Do you handle hosting and ongoing maintenance?",
        answer:
          "Yes. We offer maintenance contracts and support retainers so your website keeps running smoothly after it launches.",
      },
      {
        question: "Can you add a CMS or e-commerce store to our site?",
        answer:
          "Yes. We build content management and e-commerce functionality into websites and platforms when your business needs it.",
      },
      {
        question: "Can our website grow with our business later?",
        answer:
          "Yes. We build with performance and scale in mind from the start, so adding new features or handling more traffic later doesn't mean starting over.",
      },
    ],
    relatedServiceTag: "Web Development",
  },

  "app-development": {
    seoTitle: "App Development Services for Modern Businesses | BKADS",
    metaDescription:
      "Mobile and cross-platform app development for iOS and Android, from concept to launch. BKADS builds and supports apps for growing businesses.",
    overview: [
      "App development brings your business to customers or employees directly on their phones — whether that's a customer-facing app or an internal tool for your team.",
      "We build mobile and cross-platform apps for iOS and Android for small and medium businesses and organizations going through digital transformation, working with clients in Chennai, across India, and remotely. We support the full journey, from initial concept and design through to launch and ongoing support.",
    ],
    features: [
      {
        title: "iOS & Android apps",
        description:
          "Native and cross-platform apps that work reliably on both major mobile platforms.",
      },
      {
        title: "Cross-platform builds",
        description:
          "One codebase built to run on multiple platforms, reducing cost and time to launch.",
      },
      {
        title: "Concept to launch",
        description:
          "From your initial idea through design, development, testing, and app store launch.",
      },
      {
        title: "Backend & API integration",
        description:
          "Apps connected to the databases, APIs, and systems your business already relies on.",
      },
      {
        title: "User-focused design",
        description:
          "Interfaces designed around how your customers or employees will actually use the app day to day.",
      },
      {
        title: "Post-launch support",
        description:
          "Maintenance contracts and support retainers to fix issues, add features, and keep the app updated.",
      },
    ],
    process: ENGAGEMENT_PROCESS,
    faqs: [
      {
        question: "Should we build a native app or a cross-platform app?",
        answer:
          "It depends on your goals and budget. We'll walk you through the trade-offs during planning and recommend the approach that fits your business best.",
      },
      {
        question: "Do you help publish the app to the App Store and Google Play?",
        answer:
          "Yes. We support the app through submission and launch on both platforms.",
      },
      {
        question: "Can the app connect to our existing systems or databases?",
        answer:
          "Yes. We build integrations with your existing backend, APIs, or third-party systems as part of development.",
      },
      {
        question: "What happens after the app launches?",
        answer:
          "We offer maintenance contracts and support retainers to handle updates, bug fixes, and new features as your business needs change.",
      },
    ],
    relatedServiceTag: "App Development",
  },

  "software-development": {
    seoTitle: "Custom Software Development Services | BKADS",
    metaDescription:
      "Custom business software, internal tools, dashboards, and integrations tailored to your operations. BKADS builds software that fits how you actually work.",
    overview: [
      "Off-the-shelf software doesn't always fit how your business actually operates. Custom software is built around your specific processes, instead of forcing your team to work around someone else's product.",
      "We build custom business software, internal tools, dashboards, portals, and integrations for small and medium businesses and manufacturing companies, serving clients in Chennai, across India, and remotely. This is often the right fit when outdated systems, inefficient workflows, or poor data visibility are slowing your operations down.",
    ],
    features: [
      {
        title: "Custom business software",
        description:
          "Software designed around your specific operations, not a generic template you have to adapt to.",
      },
      {
        title: "Internal tools & dashboards",
        description:
          "Tools that give your team a clear, real-time view of operations, data, and reporting.",
      },
      {
        title: "Tailored integrations",
        description:
          "Connecting your existing systems and data sources so information flows without manual re-entry.",
      },
      {
        title: "Process & workflow automation",
        description:
          "Building automation directly into your software to remove repetitive manual steps.",
      },
      {
        title: "Replacing outdated systems",
        description:
          "Modernizing legacy software that's slowing your team down or holding back growth.",
      },
      {
        title: "Long-term support",
        description:
          "Maintenance contracts and support retainers to keep your software reliable and up to date.",
      },
    ],
    process: ENGAGEMENT_PROCESS,
    faqs: [
      {
        question: "What's the difference between custom software and an off-the-shelf tool?",
        answer:
          "Off-the-shelf tools are built for general use and often require you to adapt your process to fit them. Custom software is built specifically around how your business already operates.",
      },
      {
        question: "We're replacing an old, outdated system — can you help?",
        answer:
          "Yes. Replacing outdated software and inefficient workflows with something built for how your business works today is one of the most common projects we take on.",
      },
      {
        question: "Can custom software connect to the tools we already use?",
        answer:
          "Yes. We build tailored integrations so your custom software works with your existing systems rather than sitting apart from them.",
      },
      {
        question: "Do you provide support after the software is delivered?",
        answer:
          "Yes. We offer maintenance contracts and support retainers to keep things running and extend the software as your business grows.",
      },
    ],
    relatedServiceTag: "Software Development",
  },

  "seo-digital-marketing": {
    seoTitle: "SEO & Digital Marketing Services | BKADS",
    metaDescription:
      "Search engine optimization, digital marketing campaigns, and analytics that grow your online visibility and generate leads. Practical SEO from BKADS.",
    overview: [
      "SEO and digital marketing help the right people find your business online — through search engines, content, and campaigns that are measured against real results, not guesswork.",
      "We deliver search engine optimization, digital marketing campaigns, content, and analytics for small and medium businesses and organizations growing their online presence, working with clients based in Chennai and across India, as well as remotely. The goal is simple: more visibility, and more of the right leads.",
    ],
    features: [
      {
        title: "Search engine optimization",
        description:
          "On-page, technical, and content SEO to help your website rank for the searches that matter to your business.",
      },
      {
        title: "Digital marketing campaigns",
        description:
          "Campaigns planned and run around clear goals, whether that's awareness, leads, or sales.",
      },
      {
        title: "Content that supports SEO",
        description:
          "Website and blog content written to answer real customer questions and support search visibility.",
      },
      {
        title: "Analytics & reporting",
        description:
          "Clear reporting on traffic, rankings, and campaign performance, so you know what's working.",
      },
      {
        title: "Local search visibility",
        description:
          "Optimization to help businesses based in Chennai and across India show up in local search results.",
      },
      {
        title: "Ongoing optimization",
        description:
          "SEO isn't a one-time task — we monitor performance and keep adjusting the approach over time.",
      },
    ],
    process: ENGAGEMENT_PROCESS,
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a gradual process rather than an instant fix — it typically takes a few months of consistent work before you see meaningful improvement in rankings and traffic.",
      },
      {
        question: "Do you handle both SEO and paid digital marketing campaigns?",
        answer:
          "Yes. We work on search engine optimization as well as digital marketing campaigns, content, and analytics, matched to whatever will move the needle for your business.",
      },
      {
        question: "Can you help us rank for local searches near us?",
        answer:
          "Yes. Local search visibility is part of our SEO work, which is especially useful for businesses that serve customers in a specific city or region.",
      },
      {
        question: "How do we know if the SEO work is actually helping?",
        answer:
          "We provide analytics and reporting on traffic, rankings, and campaign performance, so progress is visible and measurable, not left to guesswork.",
      },
    ],
    relatedServiceTag: "SEO & Marketing",
  },
};
