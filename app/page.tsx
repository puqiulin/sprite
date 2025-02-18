"use client";

import ImageCard from "@/components/image-card";
import { getGreeting } from "@/lib/utils";
// import { ModeToggle } from "@/components/mode-toggle";

const Home = () => {
  const greeting = getGreeting();

  return (
    <div className="flex flex-col ">
      <div className="w-full p-4 flex backdrop-blur-lg dark:bg-black/50 fixed justify-between z-50 items-center">
        <div className="text-2xl font-semibold text-red-300">
          {greeting}~，今天也是充满希望的一天🥳
        </div>
        {/* <ModeToggle /> */}
      </div>

      <div className="mt-20 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <ImageCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
