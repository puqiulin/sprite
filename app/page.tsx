"use client";

import ImageCard from "@/components/image-card";
import { ModeToggle } from "@/components/mode-toggle";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <div className="w-full p-4 flex backdrop-blur-lg dark:bg-black/50 fixed justify-between z-50 items-center">
        <div className="text-6xl font-bold">Hello, Sprite</div>
        <ModeToggle />
      </div>

      <div className="mt-20 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((item, i) => (
          <ImageCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
