import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";

const SinglPage = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);

  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];
  // const reviewRes = await fetch(``);
  // const reviews =await reviewRes.json()

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        {DOMPurify.sanitize(product.description || "")
          .replace(/<p>(&nbsp;|\s)*<\/p>/g, "")
          .trim() && (
          <div
            className="text-gray-500"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.description || "")
                .replace(/<p>(&nbsp;|\s)*<\/p>/g, "")
                .trim(),
            }}
          />
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.priceData?.price === product.priceData?.discountedPrice ? (
          <h2 className="font-medium text-2xl">
            BGN {product.priceData?.price}
          </h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              BGN {product.priceData?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              BGN {product.priceData?.discountedPrice}
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id!}
            variantId="00000000-000000-000000-000000000001"
            inStock={product.stock?.inStock || false}
          />
        )}

        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-md mb-4">{section.title}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(section.description || ""),
              }}
            />
            {/* <p>{section.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglPage;
