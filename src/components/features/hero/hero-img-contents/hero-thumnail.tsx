import { heroImages } from "@/lib/data";
import type { HeroThumnailProps } from "../../type";

export default function HeroThumnail({ value, setValue }: HeroThumnailProps) {
  return (
    <ul className="hidden xs:grid grid-cols-4 gap-6">
      {heroImages.map((item, i) => (
        <li
          key={item.id}
          onClick={() => setValue(i)}
          className={`relative rounded-xl overflow-hidden cursor-pointer group ${
            i === value ? "ring-2 ring-primary" : ""
          }`}
        >
          <img
            src={item?.thumbnail}
            alt="shoe"
            className="w-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-primary-foreground/50 transition 
                ${
                  i === value
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }
                  `}
          />
        </li>
      ))}
    </ul>
  );
}
