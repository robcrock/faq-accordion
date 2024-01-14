"use client";

import { content } from "@/config/contstants";
import sparkle from "@/public/assets/images/icon-star.svg";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import Image from "next/image";
import { Attribution } from "./Attribution";
import { FAQAccordion } from "./FAQAccordion";

export default function FAQCard() {
  return (
    <Card className="gap-6 bg-white lg:p-8 pb-2 lg:pb-4 rounded-lg shadow-md  w-[327px] h-min lg:w-[600px] mt-[200px]">
      <CardHeader className="text-2xl font-bold">
        <CardTitle className="flex gap-6 w-full">
          <Image className="w-6 h-6" src={sparkle} alt={"Sparkle Flourish"} />
          FAQs
        </CardTitle>
      </CardHeader>
      <CardContent>
        {content.map((item, index) => {
          const isLast = content.length - 1 === index;
          return (
            <FAQAccordion key={item.question} item={item} isLast={isLast} />
          );
        })}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Attribution />
      </CardFooter>
    </Card>
  );
}
