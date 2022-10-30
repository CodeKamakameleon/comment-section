export const Card = ({ children, className }) => (
  <div
    className={`relative
   bg-white text-grayishBlue leading-7 p-5 md:p-10 rounded-md drop-shadow-sm mb-5 ${className}`}
  >
    {children}
  </div>
);
