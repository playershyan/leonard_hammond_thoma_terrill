import { PracticeAreaTemplate } from '@/components/practice-areas/PracticeAreaTemplate'

export const metadata = {
  title: 'Divorce & Family Law Attorney Fort Wayne | Law Firm Name',
  description:
    'Experienced Fort Wayne divorce and family law attorney. Compassionate representation for divorce, child custody, support, adoption, and asset division. Free consultation.',
}

export default function DivorceFamilyLawPage() {
  const services = [
    {
      title: 'Divorce & Legal Separation',
      description:
        'Guiding you through contested and uncontested divorce proceedings with compassion and expertise',
    },
    {
      title: 'Child Custody & Visitation',
      description:
        "Protecting your parental rights and advocating for arrangements in your child's best interest",
    },
    {
      title: 'Child & Spousal Support',
      description: "Ensuring fair support arrangements that meet your family's financial needs",
    },
    {
      title: 'Property & Asset Division',
      description:
        'Fair distribution of marital property, retirement accounts, and business interests',
    },
    {
      title: 'Prenuptial & Postnuptial Agreements',
      description: 'Protecting your assets and clarifying expectations before or during marriage',
    },
    {
      title: 'Adoption',
      description: 'Navigating the adoption process to grow your family through legal channels',
    },
    {
      title: 'Modifications & Enforcement',
      description: 'Updating existing orders or enforcing court-ordered obligations',
    },
  ]

  const process = [
    {
      title: 'Initial Consultation',
      description:
        'We listen to your situation, answer your questions, and explain your legal options without obligation.',
    },
    {
      title: 'Case Strategy',
      description:
        'We develop a personalized approach based on your goals, whether negotiation or litigation.',
    },
    {
      title: 'Documentation & Filing',
      description:
        'We handle all paperwork, court filings, and legal procedures efficiently and accurately.',
    },
    {
      title: 'Negotiation & Mediation',
      description:
        'We work to reach favorable settlements when possible, saving you time and stress.',
    },
    {
      title: 'Court Representation',
      description:
        'If trial is necessary, we provide aggressive advocacy to protect your interests.',
    },
  ]

  const faqs = [
    {
      question: 'How long does a divorce take in Indiana?',
      answer:
        'Indiana has a mandatory 60-day waiting period from the date of filing. Uncontested divorces may be finalized shortly after this period, while contested cases can take 6-12 months or longer depending on complexity.',
    },
    {
      question: 'What is the difference between legal and physical custody?',
      answer:
        'Legal custody refers to the right to make major decisions about your child (education, healthcare, religion). Physical custody determines where the child lives. Both can be sole or joint.',
    },
    {
      question: 'How is child support calculated?',
      answer:
        "Indiana uses child support guidelines that consider both parents' incomes, the number of children, parenting time, and other factors like healthcare and childcare costs.",
    },
    {
      question: 'Can I modify a custody or support order?',
      answer:
        "Yes, if there has been a substantial change in circumstances since the original order. Examples include job loss, relocation, or changes in the child's needs.",
    },
    {
      question: 'Do I need a lawyer for an uncontested divorce?',
      answer:
        'While not legally required, having an attorney ensures your rights are protected, documents are properly prepared, and you understand the long-term implications of your agreement.',
    },
    {
      question: 'How is marital property divided in Indiana?',
      answer:
        "Indiana is an equitable distribution state, meaning property is divided fairly (not necessarily equally) based on factors like each spouse's contribution, economic circumstances, and earning ability.",
    },
    {
      question: 'What if my spouse hides assets during divorce?',
      answer:
        'We use discovery tools, financial investigations, and forensic accounting when needed to uncover hidden assets and ensure fair property division.',
    },
    {
      question: 'Can I relocate with my child after divorce?',
      answer:
        'Relocating more than 20 miles with your child requires court approval or consent from the other parent. We can help you petition for relocation or object to a proposed move.',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      quote:
        'They handled my divorce with professionalism and compassion. Kept me informed every step and fought hard for fair custody arrangements.',
    },
    {
      name: 'David K.',
      quote:
        'Excellent representation during my child custody case. They truly cared about what was best for my children.',
    },
    {
      name: 'Lisa T.',
      quote:
        'Made a difficult process much easier. Professional, responsive, and got me the support arrangement I deserved.',
    },
  ]

  return (
    <PracticeAreaTemplate
      title="Divorce & Family Law"
      subtitle="Compassionate guidance through life's most challenging transitions"
      introduction="Family law matters are deeply personal and emotionally challenging. Whether you're facing divorce, custody disputes, or other family legal issues, our experienced Fort Wayne attorneys provide compassionate support combined with aggressive advocacy to protect your rights and your family's future."
      services={services}
      process={process}
      faqs={faqs}
      testimonials={testimonials}
      ctaHeadline="Protect Your Family's Future"
      ctaSubheading="Schedule a free consultation with our family law attorneys"
    />
  )
}
