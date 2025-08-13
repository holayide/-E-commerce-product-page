import product1 from "@/assets/images/image-product-1.jpg";
import { heroImages } from "@/lib/data";

export default function HeroImage() {
  return (
    // border-2 border-red-600
    <div className="">
      {/* border-2 border-amber-800 */}
      <div className="max-w-[440px] flex flex-col gap-6  ">
        <img
          src={product1}
          alt="products"
          //   max-h-[350px]
          className="rounded-2xl"
        />

        <div className="grid grid-cols-4 gap-6">
          {heroImages.map((item) => (
            <div key={item.id}>
              <img
                src={item?.src}
                alt="shoe"
                className="w-full rounded-xl cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
