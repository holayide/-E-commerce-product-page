import minus from "@/assets/icons/icon-minus.svg";
import plus from "@/assets/icons/icon-plus.svg";
import { Button } from "@/components/ui/button";
import cart from "@/assets/icons/icon-cart-black.svg";

export default function HeroContent() {
  return (
    <div className="">
      <div className="px-4 xs:px-0">
        <div>
          <p className="mb-3 text-xs text-secondary font-bold uppercase tracking-widest">
            Sneaker Company
          </p>
          <h1 className="text-3xl xxs:text-4xl lg:text-5xl xxs:max-w-[350px] lg:max-w-[540px] font-bold">
            Fall Limited Edition Sneakers
          </h1>
        </div>

        <div className="mt-4 xxs:mt-8 mb-6 max-w-[450px]">
          <p className="text-secondary text-base leading-6">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-row xxs:flex-col items-center xxs:items-stretch justify-between xxs:justify-start">
            <h3 className="mt-3 xxs:mt-6 text-[28px] font-bold flex items-center gap-3">
              $125.00
              <span className="py-[2px] px-2 text-xs text-white bg-foreground rounded-sm">
                50%
              </span>
            </h3>
            <p className="mt-2 text-secondary text-sm font-bold line-through">
              $250.00
            </p>
          </div>
        </div>

        <div className="max-w-[480px] flex flex-col xxs:flex-row gap-4 xxs:gap-3.5">
          <div className="w-full xxs:w-[37%] h-13 px-2 flex items-center justify-between bg-accent-foreground rounded-xl">
            <div className="cursor-pointer">
              <img src={minus} alt="minus" />
            </div>
            <span>0</span>
            <div className="cursor-pointer">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <div className="flex-1">
            <Button className="w-full h-13 text-base font-bold text-foreground flex items-center justify-center cursor-pointer">
              <img src={cart} alt="cart" className="h-4" />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
