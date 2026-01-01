
import React from "react";
import {
  Target,
  BarChart3,
  Award,
  TrendingUp,
  Users,
  MessageSquare,
  Eye,
  Scale,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";

type Item = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Column = {
  heading: string;
  items: Item[];
};

const data: Column[] = [
  {
    heading: "For Teams",
    items: [
      {
        icon: <Target />,
        title: "Objective Recruitment",
        description:
          "Data makes recruitment fair, efficient, and evidence-based, reducing risk and saving scouting time.",
      },
      {
        
        icon: <TrendingUp />,
        title: "Player Development Tracking",
        description:
          "Data helps coaches personalize development by clearly showing each player’s progress and needs.",
      },
      {
        icon: <BarChart3 />,
        title: "Tactical and Performance Insights",
        description:
          "Data provides teams with deep tactical understanding and pro-level insights to improve game decisions.",
      },
    ],
  },
  {
    heading: "For Staff",
    items: [
      {
        icon: <Target />,
        title: "Objective Evaluation",
        description:
          "Data ensures fair, consistent, and evidence-based player evaluation, reducing bias and improving talent identification.",
      },
      {
        icon: <BarChart3 />,
        title: "Performance Monitoring",
        description:
          "Data helps coaches track progress and tailor individualized development plans instead of using generic training.",
      },
      {
        icon: <Zap />,
        title: "Scouting Efficiency",
        description:
          "Data allows recruiters to find the right players faster by filtering top talents and reducing unnecessary scouting work.",
      },
      {
        icon: <Users />,
        title: "Tactical Insight",
        description:
          "Data gives coaches a deeper understanding of player impact and team dynamics, enabling smarter tactical decisions.",
      },
      {
        icon: <MessageSquare />,
        title: "Collaboration and Transparency",
        description:
          "Shared data creates clear, unified communication among coaches, scouts, and directors, strengthening decision-making.",
      },
      {
        icon: <Award />,
        title: "Building a Professional Environment",
        description:
          "Using data elevates a club’s professionalism, attracting opportunities, improving credibility, and keeping ambitious players engaged.",
      },
    ],
  },
  {
    heading: "For Parents",
    items: [
      {
        icon: <TrendingUp />,
        title: "Understanding Their Child’s Progress",
        description:
          "Data gives parents a clear, measurable view of their child’s development, strengths, and future potential.",
      },
      {
        icon: <Eye />,
        title: "Opportunities & Exposure",
        description:
          "Verified data provides credible visibility that opens doors to academies, universities, and tryouts.",
      },
      {
        icon: <Scale />,
        title: "Transparency and Fairness",
        description:
          "Data ensures fair, objective evaluation without favoritism or subjective opinions.",
      },
    ],
  },
];

const WhyDataMatters = () => {
  return (
    <section className="py-6 md:py-10 lg:py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-[#131313] leading-[120%]">
            Why Data Matters
          </h2>
          <p className="text-sm md:text-base leading-[150%] font-normal text-[#616161] pt-4 md:pt-5">
            Empowering every stakeholder with objective insights that drive better decisions
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {data.map((column, index) => (
            <div key={index} className="relative">
              {/* Vertical Divider */}
              {index !== 0 && (
                <div className="hidden md:block absolute -left-4 top-0 h-full w-[4px] bg-[#131313]" />
              )}
               {index === 0 && (
                <div className="hidden md:block absolute -left-4 top-0 h-full w-[4px] bg-[#131313]" />
              )}

              <h4 className="text-xl md:text-2xl lg:text-[32px] font-normal leading-[120%] text-black underline underline-offset-8 decoration-4 pb-6 md:pb-7 lg:pb-8">
                {column.heading}
              </h4>

              <div className="space-y-5">
                {column.items.map((item, idx) => (
                  <Card
                    key={idx}
                    className="border-0 shadow-none flex gap-4 p-0"
                  >
                    <div className="w-12 h-12 bg-primary p-3 flex items-center justify-center rounded-[8px] text-white">
                      {item.icon}
                    </div>

                    <div>
                      <h5 className="text-sm md:text-base font-normal leading-[150%] text-[#0A1628]">
                        {item.title}
                      </h5>
                      <p className="text-sm text-[#616161] font-normal leading-[150%] pt-2 ">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDataMatters;
