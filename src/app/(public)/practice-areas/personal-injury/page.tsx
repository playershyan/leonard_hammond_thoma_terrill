import { PracticeAreaTemplate } from '@/components/practice-areas/PracticeAreaTemplate'

export const metadata = {
  title: 'Personal Injury Attorney Fort Wayne | Law Firm Name',
  description:
    'Fort Wayne personal injury lawyer fighting for accident victims. Car accidents, slip and fall, medical malpractice. Maximum compensation. Free consultation.',
}

export default function PersonalInjuryPage() {
  const services = [
    {
      title: 'Car & Motorcycle Accidents',
      description:
        'Recovering damages for injuries from collisions, including medical bills, lost wages, and pain and suffering',
    },
    {
      title: 'Truck Accidents',
      description:
        'Handling complex cases against trucking companies and their insurers for serious injuries',
    },
    {
      title: 'Slip & Fall Injuries',
      description:
        'Holding property owners accountable for dangerous conditions that cause injuries',
    },
    {
      title: 'Medical Malpractice',
      description:
        'Pursuing claims against healthcare providers for errors that result in patient harm',
    },
    {
      title: 'Product Liability',
      description: 'Seeking compensation for injuries caused by defective or dangerous products',
    },
    {
      title: 'Wrongful Death',
      description: 'Helping families recover damages after losing a loved one due to negligence',
    },
    {
      title: 'Dog Bites & Animal Attacks',
      description: 'Representing victims of animal attacks and pursuing compensation from owners',
    },
  ]

  const process = [
    {
      title: 'Free Consultation',
      description:
        'We review your case at no cost and explain your rights and potential compensation.',
    },
    {
      title: 'Investigation',
      description:
        'We gather evidence, interview witnesses, obtain records, and consult experts to build your case.',
    },
    {
      title: 'Insurance Negotiation',
      description:
        'We handle all communication with insurance companies and fight for maximum settlement.',
    },
    {
      title: 'Filing Your Claim',
      description: 'If settlement negotiations fail, we file a lawsuit and prepare for trial.',
    },
    {
      title: 'Trial or Settlement',
      description:
        'We pursue the best outcome whether through negotiated settlement or courtroom victory.',
    },
  ]

  const faqs = [
    {
      question: 'How much is my personal injury case worth?',
      answer:
        'Case value depends on injury severity, medical expenses, lost wages, future treatment needs, and pain and suffering. We provide a thorough evaluation during your free consultation.',
    },
    {
      question: 'How long do I have to file a personal injury claim in Indiana?',
      answer:
        "Indiana's statute of limitations is generally 2 years from the date of injury. Some cases have shorter deadlines, so it's important to consult an attorney quickly.",
    },
    {
      question: 'What if I was partially at fault for the accident?',
      answer:
        "Indiana follows a modified comparative fault rule. You can recover damages as long as you're less than 51% at fault, though your award will be reduced by your percentage of fault.",
    },
    {
      question: 'Do I have to go to court?',
      answer:
        'Many personal injury cases settle before trial. However, we prepare every case for trial to maximize your settlement leverage.',
    },
    {
      question: 'How much does it cost to hire a personal injury attorney?',
      answer:
        'We work on a contingency fee basis - you pay nothing unless we win your case. Our fee comes from your settlement or verdict, not out of your pocket.',
    },
    {
      question: "Should I accept the insurance company's first offer?",
      answer:
        "Initial offers are often far below fair value. Insurance companies hope you'll settle quickly. We negotiate for maximum compensation based on the full extent of your damages.",
    },
    {
      question: 'What damages can I recover in a personal injury case?',
      answer:
        'You may recover medical expenses (past and future), lost wages, lost earning capacity, pain and suffering, emotional distress, and in some cases, punitive damages.',
    },
    {
      question: 'What should I do immediately after an accident?',
      answer:
        'Seek medical attention, document the scene with photos, get witness contact information, report the incident, and contact a personal injury attorney before speaking to insurance companies.',
    },
  ]

  const testimonials = [
    {
      name: 'John D.',
      quote:
        'After my car accident, they dealt with the insurance company so I could focus on recovery. Secured a settlement that covered all my medical bills and more.',
    },
    {
      name: 'Maria S.',
      quote:
        'Outstanding representation after my slip and fall injury. They fought hard and got me far more than the insurance company initially offered.',
    },
    {
      name: 'Robert P.',
      quote:
        'Professional, knowledgeable, and truly cared about my case. Made a stressful situation much easier to handle.',
    },
  ]

  return (
    <PracticeAreaTemplate
      title="Personal Injury Law"
      subtitle="Fighting for maximum compensation for accident victims"
      introduction="When you've been injured due to someone else's negligence, you deserve full compensation for your losses. Our Fort Wayne personal injury attorneys have recovered millions for accident victims. We fight insurance companies aggressively while handling every detail of your case, so you can focus on healing."
      services={services}
      process={process}
      faqs={faqs}
      testimonials={testimonials}
      ctaHeadline="Get the Compensation You Deserve"
      ctaSubheading="Free consultation - no fees unless we win your case"
    />
  )
}
