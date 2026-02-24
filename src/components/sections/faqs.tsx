import { FAQItem } from "../FAQItems";
import { FAQSection } from "../FAQSection";


export default function FAQS() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
        Frequently Asked Questions
      </h2>

      <FAQSection className="space-y-4">
        <FAQItem
          question="What devices are supported?"
          answer="Our platform works seamlessly across iPhone, iPad, Mac, Apple TV, and more."
        />

        <FAQItem
          question="Is this animation reusable?"
          answer="Yes. The FAQ component is fully reusable and can be placed anywhere in your app."
        />

        <FAQItem
          question="Does it animate on scroll?"
          answer="Yes. Each FAQ item reveals smoothly when the section enters the viewport."
        />

        <FAQItem
          question="Can I customize the animation?"
          answer="Absolutely. You can tweak easing, duration, stagger timing, and hover effects."
        />
      </FAQSection>
    </section>
  );
}