import Image from "next/image";
import bgDesktop from "../public/assets/images/background-pattern-desktop.svg";

export const BackgroundFlourish = () => {
  return (
    <Image
      src={bgDesktop}
      alt={"Mobile Background"}
      className="absolute left-0 right-0 top-0 h-[320px] w-[100dvw] object-cover -z-10"
    />
  );
};
