"use client";

import { getStarCount } from "@/components/utils/getStarCount";
import { Star } from "lucide-react";

type RatingCardProps = {
  averageRating: number;
  totalGames: number;
};

export default function RatingCard({
  averageRating,
  totalGames,
}: RatingCardProps) {
  const stars = getStarCount(averageRating);

  return (
    <div className="w-auto rounded-[16px] bg-primary py-6 px-5 text-white shadow-lg">
      <h3 className="text-lg md:text-xl text-[#E7E7E7] leading-[120%] font-normal italic">
        Average of the <br/> ratings :
      </h3>

      <p className="mt-2 text-4xl md:text-[35px] lg:text-[40px] leading-[120%] font-normal text-[#E7E7E7]">
        {averageRating.toFixed(1)}
      </p>

      {/* Stars */}
      <div className="mt-2 flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < stars
                ? "fill-[#FFC107] text-yellow-400"
                : "fill-white text-white/40"
            }`}
          />
        ))}
      </div>

      <p className="mt-4 text-base md:text-lg text-[#E7E7E7] leading-[120%] italic">
        Number of Game : {totalGames}
      </p>
    </div>
  );
}
