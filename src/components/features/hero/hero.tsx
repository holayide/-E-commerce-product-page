import HeroContent from "./heroContent";
import HeroImage from "./hero-img-contents/heroImage";

export default function Hero() {
  return (
    <section className="xs:pt-20 mb-6">
      <div className="max-w-6xl mx-auto xs:px-4 md:px-10 grid grid-cols-1 xs:grid-cols-2 items-center gap-6 lg:gap-0">
        <HeroImage />
        <HeroContent />
      </div>
    </section>
  );
}
