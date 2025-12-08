import { FAQItem } from "./faq-item"

export function FAQSection() {
  const faqs = [
    {
      question: "How frequently is player data updated?",
      answer:
        "Our analytics are updated in real-time during matches and processed within minutes of match completion. Historical data is verified and added to the platform within 24 hours.",
    },
    {
      question: "Can I compare players across different leagues?",
      answer:
        "Yes, our platform allows you to compare players across different leagues with normalized metrics to account for league-specific variations in play style and competition level.",
    },
    {
      question: "What is your data accuracy rate?",
      answer:
        "We maintain a 99.7% accuracy rate through our verification process involving multiple data sources and AI-powered validation systems. All data is cross-checked before publishing.",
    },
    {
      question: "How do I export my analysis?",
      answer:
        "Pro plans and above can export detailed reports in PDF, CSV, or XLSX formats. Enterprise users have API access for custom integrations and automated workflows.",
    },
    {
      question: "Is there a trial period?",
      answer:
        "Yes, all plans come with a 14-day free trial. No credit card is required to start. Premium features are fully accessible during the trial period.",
    },
    {
      question: "How is customer support handled?",
      answer:
        "Basic users have access to our knowledge base and community forums. Pro users get email support within 24 hours. Team and Enterprise users receive priority support with faster response times.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Find answers to common questions about our platform</p>
        </div>
        <div className="border border-border rounded-lg p-6">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
