import FAQCard from "@/components/FAQCard";
import { BackgroundFlourish } from "../components/BackgroundFlourish";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fclL7SYSxeq
 */

export default function Home() {
  return (
    <main className="flex w-[100dvw] h-[100dvh] justify-center border-slate-200">
      <BackgroundFlourish />
      <FAQCard />
    </main>
  );
}
