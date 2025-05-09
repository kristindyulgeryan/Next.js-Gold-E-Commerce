"use client";
import { products } from "@wix/stores";
import { useState } from "react";

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    console.log("Checking choices:", choices);
    return variants.some((variant) => {
      const variantChoices = variant.choices;

      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) && variant.stock?.inStock === true
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((optionType) => (
        <div className="flex flex-col gap-4" key={optionType.name}>
          <h4 className="font-medium">{optionType.name}</h4>
          <ul className="flex items-center gap-3">
            {optionType.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [optionType.name!]: choice.description!,
              });

              const selected =
                selectedOptions[optionType.name!] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () =>
                    handleOptionSelect(optionType.name!, choice.description!);

              return optionType.name === "Color" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300  relative "
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <li
                  className="ring-1 ring-pink-500 text-ring-pink-500  rounded-md py-1 px-4 text-sm"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {/* Color */}
      {/*
          <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-yellow-500">
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-gray-400"></li>
            <li
              className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative"
              style={{ backgroundColor: "#ECC5C0" }}
            >
              <div className="absolute w-10 h-[2px] bg-red-400 rotate-45  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
          </ul> */}
      {/* Others */}
      {/* <h4 className="font-medium">Choose a karat</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-pink-500 text-white  bg-pink-500 rounded-md py-1 px-4 text-sm cursor-pointer ">
          14K
        </li>
        <li className="ring-1 ring-pink-500 text-pink-500 rounded-md py-1 px-4 text-sm cursor-pointer ">
          18K
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed ">
          24K
        </li>
      </ul> */}
    </div>
  );
};

export default CustomizeProducts;

// <div
// className=""
// key={choice.value}
// onClick={() =>
//   hanldeOptionSelect(optionType.name!, choice.description!)
// }
// >
// {choice.description}
// {disabled && "disabled"}
// {selected && "selected"}
// </div>
// );
