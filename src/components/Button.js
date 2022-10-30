import clsx from "clsx";

const themes = {
  primary:
    "bg-moderateBlue text-veryLightGray hover:bg-lightGrayishBlue uppercase px-5",
  secondary:
    "text-moderateBlue text-veryLightGray bg-transparent hover:text-lightGrayishBlue px-2",

  danger: "text-softRed hover:text-paleRed px-2",
  "danger-inverse": `
  text-white
  bg-softRed
  hover:bg-paleRed
  px-2`,
};

export const Button = ({ children, onClick, variant = "primary" }) => (
  <button
    className={clsx(
      "flex gap-2 items-center rounded-lg py-2.5 cursor-pointer font-medium",
      themes[variant]
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
