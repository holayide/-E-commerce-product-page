import { useContext } from "react";

import { CartContext } from "@/context/cartContext";
import { Button } from "@/components/ui/button";

import shoe from "@/assets/images/image-product-1-thumbnail.jpg";
import bin from "@/assets/icons/icon-delete.svg";

export default function CartCard({ isOpenCart }: { isOpenCart: boolean }) {
  const product = useContext(CartContext);

  if (!product) return null;
  const { inCart, quantity, remove } = product;

  return (
    <div
      className={`absolute top-0 z-10 shadow-lg bg-white rounded-lg
                w-[90%] left-1/2 -translate-x-1/2 my-4
                xxs:w-[70%] xs:w-[300px] xs:mx-5 xs:top-[-25px] xs:left-auto xs:right-0 xs:-translate-x-0
                ${isOpenCart ? "block" : "hidden"}
                `}
    >
      <div className="pb-8 xs:pb-7">
        <h1 className="pt-2 px-5 pb-6 xs:pb-5 font-bold text-black border-b-2 border-accent-foreground">
          Cart
        </h1>

        <div className="pt-6 xs:pt-5 px-5">
          {!inCart ? (
            <div className="h-28 flex items-center justify-center">
              <p className="text-xs font-bold text-secondary">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="">
              <div className="grid grid-cols-[50px_1fr] xs:grid-cols-[36px_1fr] gap-5">
                <div className="rounded-sm overflow-hidden bg-green-300">
                  <img
                    src={shoe}
                    alt="sneakers"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex justify-between text-secondary">
                  <div className="flex flex-col gap-0.5 text-base xs:text-xs">
                    <p className="font-medium">Fall Limited Edition Sneakers</p>
                    <p>
                      $125.00 <span>x</span> {quantity} &nbsp;
                      <span className="text-foreground font-bold">
                        ${125 * quantity}.00
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={remove}
                    className="flex items-center justify-center"
                  >
                    <img src={bin} alt="dust bin" className="cursor-pointer" />
                  </button>
                </div>
              </div>

              <Button className="w-full h-11 mt-8 xs:mt-6 text-base xs:text-sm text-foreground font-bold rounded-lg cursor-pointer">
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
