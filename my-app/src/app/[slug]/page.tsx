import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          sed dicta odio illo repellat nisi provident nulla, nostrum doloremque
          repellendus.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">€ 70</h3>
          <h2 className="font-medium text-2xl">€ 65</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-md mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            maxime.lorem100Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fuga,
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-md mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            maxime.lorem100Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fuga,
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-md mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            maxime.lorem100Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fuga,
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglPage;
