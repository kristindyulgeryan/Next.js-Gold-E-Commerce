// "use client";

import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
// import { useWixClient } from "@/hooks/useWixClient";
// import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";

// import { useEffect } from "react";

const HomePage = async () => {
  // const wixClient = await wixClientServer();
  // const response = await wixClient.products.queryProducts().find();
  // console.log(response);
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await wixClient.products.queryProducts().find();
  //     console.log(response);
  //   };

  //   getProducts();
  // }, [wixClient]);
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"LOADING"}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback={"LOADING"}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">
          New Products
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
