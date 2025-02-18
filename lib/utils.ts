import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "早上好";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "中午好";
  } else {
    return "晚上好";
  }
};
