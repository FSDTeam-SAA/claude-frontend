
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
        "Analytic Soccer is the first data platform for amateur players, offering ratings, technical–tactical analysis, structured feedback and highlights based on your game footage.",
    },
    {
      question: "How does it work?",
      answer:
        "You send us your game video and team sheet, we analyze the match, and you receive your ratings, your structured feedback  and highlights within 72 hours.",
    },
    {
      question: "Who is it For?",
      answer:
        "For boys and girls from U9 to U18+, as well as teams, coaches, scouts, and parents who want real performance insight.",
    },
    {
      question: "What do I need to provide?",
      answer: "Just your game video and the team sheet with player names and positions. If possible, please also send the team lineup in case the players’ jerseys aren’t clearly visible.",
    },
    {
      question: "What kind of data do I receive?",
      answer:
        "You receive technical and tactical stats, game ratings, structured feedback and a personalized highlight.",
    },
    {
      question: "How fast do I get my report?",
      answer: "You will receive your full report and highlight within 72 hours.",
    },
    {
      question: "Do I need to create an account?",
      answer: "Yes, you must register first and purchase the data service to activate your player profile.",
    },
    {
      question: "Can teams use Analytic Soccer?",
      answer: "Yes. Teams and clubs can purchase squad data, compare players, and track development across the season.",
    },
    {
      question: "Is this for individual players or full teams?",
      answer: "Both. Individual players and full teams can submit matches for individual and collective analysis.",
    },
    {
      question: "Can girls use Analytic Soccer?",
      answer: "Absolutely. Analytic Soccer is built for boys and girls of all levels.",
    },
    {
      question: "What makes the ratings fair?",
      answer:
        "All ratings are based on consistent technical–tactical criteria, not opinions, eliminating bias and favoritism.",
    },
    {
      question: "Do you offer highlight videos?",
      answer: "Yes, each analysis includes a personalized highlight showcasing your key actions.",
    },
    {
      question: "Is my data verified?",
      answer:
        "Every rating and statistic is generated from real match footage making your profile credible to coaches and scouts.",
    },
    {
      question: "How does Analytic Soccer help with opportunities?",
      answer:
        "Your verified data and professional profile increase visibility for clubs, scouts, universities, and recruiters.",
    },
    {
      question: "Is there a cost to use the platform?",
      answer:
        "Yes. The only cost is when you purchase the data service.",
    },
    {
      question: "Is a single report enough to get noticed?",
      answer:
        "No. To be noticed, at least one report per month is required during the season. The more proof of performance you provide, the stronger your profile becomes.",
    },
     {
      question: "Who selects the matches for evaluation?”",
      answer:
        "You choose the match you want us to evaluate. We must be notified at least 72 hours before the match",
    },
  ];

  return (
    <div>
      <section className="py-6 md:py-10 lg:py-16 bg-[#F4FFF4]">
        <div className="container ">
          <h4 className='text-2xl md:text-3xl lg:text-4xl text-center font-normal leading-[120%] text-[#131313]'>FAQ Analytic Soccer</h4>
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