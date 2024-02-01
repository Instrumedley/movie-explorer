export const Text: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <span className={`text-gray-200 ${className}`}>
    {children}
  </span>
);
