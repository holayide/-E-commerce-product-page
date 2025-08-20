import type { LargeImgProps } from "../../type";
import { heroImages } from "@/lib/data";

export default function HeroLargeImg({ value }: LargeImgProps) {
  return (
    <img
      src={heroImages[value].product}
      alt="products"
      className="w-full max-h-[350px] sm:max-h-auto rounded-0 xs:rounded-2xl object-cover"
    />
  );
}
