export const CardHeader = ({ children, className }) => (
  <header className={`flex items-center gap-5 mb-5 ${className}`}>
    {children}
  </header>
);
