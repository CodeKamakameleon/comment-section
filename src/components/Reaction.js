import { useEffect, useState } from "react";
import { IconMinus } from "./Icon/IconMinus";
import { IconPlus } from "./Icon/IconPlus";

export const Reaction = ({ score, onChange }) => {
  const [count, setCount] = useState(score);

  return (
    <div
      className="bg-veryLightGray py-2 px-4 rounded-md flex 
    md:flex-col md:items-center md:absolute md:left-10 md:top-10 
    md:p-4 gap-5"
    >
      <button
        className="text-lightGrayishBlue"
        disabled={score < count}
        onClick={() => setCount((c) => c + 1)}
      >
        <IconPlus />
      </button>
      <span className="text-moderateBlue">{count}</span>
      <button
        className="text-lightGrayishBlue"
        disabled={score > count}
        onClick={() => setCount((c) => c - 1)}
      >
        <IconMinus />
      </button>
    </div>
  );
};
