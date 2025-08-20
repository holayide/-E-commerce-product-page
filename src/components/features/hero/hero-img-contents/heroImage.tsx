import { useEffect, useState } from "react";

import HeroLargeImg from "./hero-large-img";
import HeroThumnail from "./hero-thumnail";
import { X } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { heroImages } from "@/lib/data";

export default function HeroImage() {
  const [value, setValue] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setValue(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    handleSelect();
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="">
      <div className="xs:max-w-[430px] flex flex-col gap-6">
        <AlertDialog>
          <AlertDialogTrigger
            onClick={() => api?.scrollTo(value)}
            className="cursor-pointer"
          >
            <HeroLargeImg value={value} />
          </AlertDialogTrigger>

          <AlertDialogContent className="max-w-lg bg-transparent border-none shadow-none">
            <AlertDialogTitle className="sr-only">
              Product preview
            </AlertDialogTitle>
            <AlertDialogDescription className="sr-only">
              Enlarged product image with navigation thumbnails.
            </AlertDialogDescription>

            {/* Cancel button */}
            <div className="flex justify-end">
              <AlertDialogCancel className="p-0 h-4 text-white hover:text-primary">
                <X size={24} strokeWidth={2.5} />
              </AlertDialogCancel>
            </div>

            <Carousel setApi={setApi} opts={{ startIndex: value }}>
              <CarouselContent>
                {heroImages.map((image, i) => (
                  <CarouselItem key={image.id}>
                    <HeroLargeImg value={i} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="w-8 h-8 bg-white -left-5" />
              <CarouselNext className="w-8 h-8 bg-white -right-5" />
            </Carousel>

            <HeroThumnail value={value} setValue={(i) => api?.scrollTo(i)} />
          </AlertDialogContent>
        </AlertDialog>

        <HeroThumnail value={value} setValue={setValue} />
      </div>
    </div>
  );
}
