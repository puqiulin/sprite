import * as React from "react";

import { Card } from "@/components/ui/card";
import sprite1 from "@/public/sprite1.png";

const ImageCard = () => {
  return (
    <Card className="h-[500px] overflow-hidden rounded-lg shadow-sm hover:shadow-lg hover:cursor-pointer transition-shadow duration-300 ease-in-out dark:hover:shadow-white/50">
      <img
        src={sprite1.src}
        alt="asd"
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-125"
      />
    </Card>
  );
};

export default ImageCard;
