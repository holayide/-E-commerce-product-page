import HeroContent from "./hero-text-wrapper/heroContent";
import HeroImage from "./hero-img-contents/heroImage";
import CartCard from "./cartCard";

export default function Hero({ isOpenCart }: { isOpenCart: boolean }) {
  return (
    <section className="max-w-[1316px] mx-auto pb-6 relative">
      <div className="max-w-6xl mx-auto xs:pt-20 xs:px-4 md:px-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 items-center gap-6 lg:gap-0">
          <HeroImage />
          <HeroContent />
        </div>
        <CartCard isOpenCart={isOpenCart} />
      </div>
    </section>
  );
}
