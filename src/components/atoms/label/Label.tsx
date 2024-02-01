export const Label: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <span className={`font-semibold text-gray-400 ${className}`}>
    {children}
  </span>
);
