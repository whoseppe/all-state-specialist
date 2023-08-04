import React from "react";
import { useRouter } from "next/navigation";

function ButtonAction({ className, route, text }) {
  const router = useRouter();

  return (
    <div className={className}>
      <button
        className="bg-orange text-white font-bold w-52 h-14 rounded-md"
        onClick={() => router.push(route)}
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonAction;
