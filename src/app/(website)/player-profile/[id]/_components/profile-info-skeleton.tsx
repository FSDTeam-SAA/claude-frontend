
import { Skeleton } from "@/components/ui/skeleton";

export default function PlayerInfoSkeleton() {
  return (
    <div className="pt-7">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-6 bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]">

        {/* Profile Image */}
        <div className="md:col-span-1 flex justify-center">
          <Skeleton className="h-[160px] w-[160px] rounded-full" />
        </div>

        {/* Profile Info Grid */}
        <div className="md:col-span-3">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 18 }).map((_, index) => (
              <li key={index} className="flex flex-col gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-5 w-full max-w-[180px]" />
              </li>
            ))}
          </ul>
        </div>

        {/* Rating + Share */}
        <div className="md:col-span-1 flex flex-col items-center gap-6">
          {/* Rating Card Skeleton */}
          <div className="w-[200px] rounded-2xl bg-green-600 p-4">
            <Skeleton className="h-4 w-32 bg-white/40" />
            <Skeleton className="mt-2 h-10 w-16 bg-white/40" />
            <div className="mt-3 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-5 w-5 rounded bg-white/40" />
              ))}
            </div>
            <Skeleton className="mt-4 h-4 w-28 bg-white/40" />
          </div>

          {/* Share Button Skeleton */}
          <Skeleton className="h-[40px] w-full rounded-full" />
        </div>

      </div>
    </div>
  );
}
