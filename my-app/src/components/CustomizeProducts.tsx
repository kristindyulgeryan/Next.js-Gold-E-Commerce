const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
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
      </ul>
      <h4 className="font-medium">Choose a karat</h4>
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
      </ul>
    </div>
  );
};

export default CustomizeProducts;
