export const Paragraph: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <p className={`text-gray-300 ${className}`}>
        {children}
    </p>
);