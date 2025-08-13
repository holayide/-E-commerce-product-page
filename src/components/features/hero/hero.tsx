import HeroContent from "./heroContent";
import HeroImage from "./heroImage";

export default function Hero() {
  return (
    <section className="pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 items-center border-2 border-green-600">
        <HeroImage />
        <HeroContent />
      </div>
    </section>
  );
}
