"use client";

import { useFormStatus } from "react-dom";

const UpdateButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-pink-500 text-white p-2 cursor-pointer rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed max-w-96"
    >
      {pending ? "Update..." : "Update"}
    </button>
  );
};

export default UpdateButton;
