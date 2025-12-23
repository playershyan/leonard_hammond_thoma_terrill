import { PracticeAreaTemplate } from '@/components/practice-areas/PracticeAreaTemplate'

export const metadata = {
  title: 'Criminal Defense Attorney Fort Wayne | Law Firm Name',
  description:
    'Experienced Fort Wayne criminal defense lawyer. Aggressive defense for DUI, drug charges, theft, assault, felonies. Protect your rights. Free consultation.',
}

export default function CriminalDefensePage() {
  const services = [
    {
      title: 'DUI / OWI Defense',
      description:
        'Challenging drunk driving charges, field sobriety tests, and breathalyzer results',
    },
    {
      title: 'Drug Crimes',
      description:
        'Defending against possession, distribution, manufacturing, and trafficking charges',
    },
    {
      title: 'Theft & Property Crimes',
      description: 'Representing clients accused of shoplifting, burglary, robbery, and vandalism',
    },
    {
      title: 'Violent Crimes',
      description: 'Defense against assault, battery, domestic violence, and weapons charges',
    },
    {
      title: 'White Collar Crimes',
      description: 'Handling fraud, embezzlement, identity theft, and financial crime cases',
    },
    {
      title: 'Traffic Violations',
      description: 'Protecting your driving record and fighting serious traffic offenses',
    },
    {
      title: 'Expungement',
      description: 'Helping you clear your criminal record and move forward with a clean slate',
    },
  ]

  const process = [
    {
      title: 'Immediate Response',
      description:
        'Contact us immediately after arrest. We protect your rights from the start and advise you on what to say (and not say) to police.',
    },
    {
      title: 'Case Investigation',
      description:
        "We review police reports, interview witnesses, examine evidence, and identify weaknesses in the prosecution's case.",
    },
    {
      title: 'Defense Strategy',
      description:
        'We develop a tailored defense strategy, whether challenging evidence, negotiating plea deals, or preparing for trial.',
    },
    {
      title: 'Court Representation',
      description:
        'We appear at all hearings, file motions, negotiate with prosecutors, and advocate aggressively for the best outcome.',
    },
    {
      title: 'Resolution',
      description:
        'We fight for dismissal, acquittal, reduced charges, or minimal sentencing depending on your case.',
    },
  ]

  const faqs = [
    {
      question: 'Should I talk to the police without a lawyer?',
      answer:
        'No. You have the right to remain silent. Anything you say can be used against you. Politely decline to answer questions and request an attorney immediately.',
    },
    {
      question: "What should I do if I'm arrested?",
      answer:
        'Remain calm, do not resist, exercise your right to remain silent, and contact a criminal defense attorney immediately. Do not consent to searches or make statements without legal representation.',
    },
    {
      question: 'Can charges be dropped or dismissed?',
      answer:
        'Yes. Charges may be dismissed due to lack of evidence, illegal search and seizure, violation of rights, witness problems, or prosecutor discretion. We pursue dismissal whenever possible.',
    },
    {
      question: 'What is the difference between a misdemeanor and felony?',
      answer:
        'Misdemeanors are less serious crimes punishable by up to one year in jail. Felonies are serious crimes carrying more than one year in prison, significant fines, and lasting consequences.',
    },
    {
      question: 'Will I have to go to trial?',
      answer:
        'Not necessarily. Many cases are resolved through plea negotiations. However, we prepare every case for trial to ensure the strongest negotiating position.',
    },
    {
      question: 'Can I get my record expunged?',
      answer:
        'Indiana allows expungement of certain convictions after a waiting period. Eligibility depends on the offense type and your criminal history. We can evaluate your case.',
    },
    {
      question: 'What are the penalties for a DUI in Indiana?',
      answer:
        'First offense: up to 60 days jail, $500 fine, license suspension up to 2 years. Penalties increase for repeat offenses, high BAC, and aggravating factors.',
    },
    {
      question: 'How much does a criminal defense attorney cost?',
      answer:
        'Fees vary based on case complexity. We offer free consultations and transparent pricing. The cost of not having an attorney often far exceeds legal fees.',
    },
  ]

  const testimonials = [
    {
      name: 'Michael R.',
      quote:
        'Facing criminal charges was terrifying, but this firm defended me aggressively. They got my charges reduced significantly. Forever grateful.',
    },
    {
      name: 'James T.',
      quote:
        'Excellent DUI defense. They challenged the evidence and got my case dismissed. Professional and responsive throughout.',
    },
    {
      name: 'Amanda L.',
      quote:
        'They fought for me when I felt hopeless. Knowledgeable, strategic, and truly cared about protecting my future.',
    },
  ]

  return (
    <PracticeAreaTemplate
      title="Criminal Defense Law"
      subtitle="Aggressive protection of your rights and freedom"
      introduction="When you're facing criminal charges, your freedom, reputation, and future are at stake. Our experienced Fort Wayne criminal defense attorneys provide aggressive representation against all charges, from misdemeanors to serious felonies. We investigate thoroughly, challenge the prosecution's case, and fight for the best possible outcome."
      services={services}
      process={process}
      faqs={faqs}
      testimonials={testimonials}
      ctaHeadline="Protect Your Rights and Freedom"
      ctaSubheading="24/7 availability for criminal defense emergencies"
    />
  )
}
