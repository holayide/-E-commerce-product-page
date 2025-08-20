import { Header, Hero } from "@/components/features";
import { useState } from "react";

export default function Productpage() {
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleIsOpenCart = () => {
    setIsOpenCart((prev) => !prev);
  };

  return (
    <>
      <Header handleIsOpenCart={handleIsOpenCart} />
      <Hero isOpenCart={isOpenCart} />
    </>
  );
}
