
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function FaqSection() {
const faqItems = [
    {
      question: "What is Analytic Soccer?",
      answer:
        "Analytic Soccer is the first data platform for amateur players, offering ratings, performance tactical analysis, and highlights based on your game footage.",
    },
    {
      question: "How does it work?",
      answer:
        "Upload your game footage, our AI analyzes every touch, movement, and decision, then generates a detailed performance report with ratings and insights.",
    },
    {
      question: "Who is it For?",
      answer:
        "Amateur and semi-pro players, coaches, scouts, and anyone looking to improve their game with data-driven feedback.",
    },
    {
      question: "What do I need to provide?",
      answer: "Just your match footage (phone recordings are fine).",
    },
    {
      question: "What kind of data do I receive?",
      answer:
        "Player rating, positional heatmaps, pass accuracy, defensive actions, attacking contributions, tactical insights, and personalized highlights.",
    },
    {
      question: "How fast do I get my report?",
      answer: "Reports are typically delivered within 24–48 hours after upload.",
    },
    {
      question: "Do I need to create an account?",
      answer: "Yes, a free account is required to upload footage and view reports.",
    },
    {
      question: "Can teams use Analytic Soccer?",
      answer: "Yes, we offer team plans for entire squads and coaches.",
    },
    {
      question: "Is this for individual players or full teams?",
      answer: "Both! Individual players and full teams can use the platform.",
    },
    {
      question: "Can girls use Analytic Soccer?",
      answer: "Absolutely! The platform works for all genders and levels.",
    },
    {
      question: "What makes the ratings fair?",
      answer:
        "Ratings are normalized by position, age, level of play, and game context for accurate comparisons.",
    },
    {
      question: "Do you offer highlight videos?",
      answer: "Yes, auto-generated personalized highlight reels are included.",
    },
    {
      question: "Is my data private?",
      answer:
        "Yes, your footage and data are private and only used to generate your reports.",
    },
    {
      question: "How does Analytic Soccer help with opportunities?",
      answer:
        "High-performing players get visibility through our scouting network and public leaderboards (opt-in).",
    },
    {
      question: "Is there a cost to use the platform?",
      answer:
        "We offer a free tier with basic reports. Premium features and faster processing are available with a subscription.",
    },
  ];

  return (
    <div>
      <section className="py-6 md:py-10 lg:py-16 bg-[#F4FFF4]">
        <div className="container ">
          <h4 className='text-2xl md:text-4xl lg:text-[48px] text-center font-normal leading-[120%] text-[#131313]'>FAQ Analytic Soccer</h4>
          <p className='text-sm lg:text-base text-[#616161] leading-[150%] text-center font-nnormal pt-4 pb-6 md:pb-8 lg:pb-10'>Get answers to common questions about our vehicle inspection <br />
            services and process.</p>
          <Accordion type="single" collapsible className="w-full">
            {faqItems?.map((item, index) => (
              <AccordionItem
                key={index+1}
               value={`item-${index}`}
                className="bg-white mb-4"
              >
                <AccordionTrigger className="hover:no-underline py-[14px] px-6 text-left  border-[1.5px] border-primary">
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 text-lg font-normal text-[#424242] leading-[120%]">
                      <Image src="/assets/images/question.png" alt="question" width={50} height={50} className="w-6 h-6"/>
                      {index+1}. {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="py-3 px-6 text-base text-[#616161] leading-[150%] font-normal">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>

  );
}