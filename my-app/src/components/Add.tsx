"use client";
import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";

const Add = ({
  productId,
  variantId,
  inStock,
}: {
  productId: string;
  variantId: string;
  inStock: boolean;
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < 10 && inStock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();

  const addItem = async () => {
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: productId,
            ...(variantId && { options: { variantId } }),
          },
          quantity,
        },
      ],
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choos a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            {inStock ? (
              <div className="text-xs text-green-600">In stock</div>
            ) : (
              <div className="text-xs text-red-500">Out of stock</div>
            )}
          </div>
        </div>
        <button
          onClick={addItem}
          className="w-36 text-sm rounded-3xl ring-1 ring-pink-500 text-pink-500 py-2 px-4 hover:bg-pink-500 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
