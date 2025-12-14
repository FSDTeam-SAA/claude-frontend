

import React from "react";
import { Database, TrendingUp, Eye, UserCheck } from "lucide-react";
import Link from "next/link";

const WhyYouNeedAProfile = () => {
  return (
    <div className="bg-[#F4FFF4] py-6 md:py-10 lg:py-16">

      <div className="container">
        <h3 className="text-3xl md:text-4xl lg:text-[48px] text-[#131313] font-normal leading-[120%]">
          Why You Need a Profile
        </h3>

        <p className="text-sm md:text-base text-[#616161] font-normal leading-[120%] py-4 md:py-5">
          Most amateur players today are invisible to the football market even if
          they <br />
          perform well, no one outside their local area sees them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 md:py-10 lg:py-12">
          {/* Card 1 */}
          <div className="group rounded-[16px] bg-[linear-gradient(109deg,#EFF3FF_0.92%,#BCCDFD_99.08%)]
            shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-6
            transition-all duration-300 ease-out
            hover:-translate-y-2
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]">

            <Eye className="text-[#2563EB] w-10 h-10 transition-transform duration-300 group-hover:scale-110" />

            <h5 className="text-base text-[#0A1628] leading-[150%] font-normal py-4">
              Visibility
            </h5>

            <p className="text-[#616161] text-sm leading-[150%] font-normal">
              Be seen by scouts, clubs, and agents beyond your local area
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-[16px] bg-[linear-gradient(110deg,#FFF_1.76%,#E3C4FF_98.39%)]
            shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-6
            transition-all duration-300 ease-out
            hover:-translate-y-2
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]">

            <Database className="text-[#9333EA] w-10 h-10 transition-transform duration-300 group-hover:scale-110" />

            <h5 className="text-base text-[#0A1628] leading-[150%] font-normal py-4">
              Discoverability
            </h5>

            <p className="text-[#616161] text-sm leading-[150%] font-normal">
              Appear in searches when coaches and clubs look for players
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-[16px] bg-[linear-gradient(109deg,#FFE0CF_1.26%,#EAC3AE_99.2%)]
            shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-6
            transition-all duration-300 ease-out
            hover:-translate-y-2
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]">

            <UserCheck className="text-[#EA580C] w-10 h-10 transition-transform duration-300 group-hover:scale-110" />

            <h5 className="text-base text-[#0A1628] leading-[150%] font-normal py-4">
              Centralize your Data
            </h5>

            <p className="text-[#616161] text-sm leading-[150%] font-normal">
              Your player profile becomes your personal database — all in one
              verified and professional place. It replaces random CVs and videos.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group rounded-[16px] bg-[linear-gradient(110deg,#EAFFF2_0%,#ACFFCA_99.28%)]
            shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-6
            transition-all duration-300 ease-out
            hover:-translate-y-2
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]">

            <TrendingUp className="text-primary w-10 h-10 transition-transform duration-300 group-hover:scale-110" />

            <h5 className="text-base text-[#0A1628] leading-[150%] font-normal py-4">
              Recruitment Relevance
            </h5>

            <p className="text-[#616161] text-sm leading-[150%] font-normal">
              Stay on the radar of coaches, agents and clubs actively seeking
              talent
            </p>
          </div>
        </div>

        <div className="relative h-[390px] w-full bg-[url('/assets/images/you-need-profile-bg.jpg')] bg-cover bg-center bg-no-repeat rounded-[8px] flex flex-col items-center justify-center animate-moveBackground">
        <div className="absolute inset-0 bg-black/60 rounded-[8px]"/>
          <h4 className="text-3xl md:text-4xl lg:text-[48px] text-white font-normal leading-[120%] text-center relative z-10">Don&apos;t Stay Invisible</h4>
          <p className="text-sm md:text-base text-[#E7E7E7] text-center font-normal leading-[150%] py-4 md:py-5 lg:py-6 relative z-10">Without a profile, you don’t exist in the recruitment world.
          </p>
         <Link href="/sign-up">
          <button className="w-[215px] h-[48px] text-base md:text-lg text-white leading-[120%] font-normal bg-primary rounded-full relative z-10">Register</button>
         </Link>
        </div>

      </div>
    </div>
  );
};

export default WhyYouNeedAProfile;
