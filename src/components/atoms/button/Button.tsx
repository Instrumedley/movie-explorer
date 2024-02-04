import { forwardRef, ComponentProps } from "react";

interface ButtonProps extends Omit<ComponentProps<"button">, "className" | "onClick"> {
    onPress?: (arg0: any) => void;
    label?: string;
    icon?: JSX.Element;
    disabled?: boolean;
    theme?: 'regular' | 'red' | 'green' | 'linkButton' | 'menu'
    size?: 'small' | 'large';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, onPress, label, icon, disabled, theme = 'regular',size, ...rest }, ref) => {
        const baseClasses = "flex-none text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:outline-none transition-colors duration-200";
        const disabledClasses = disabled ? "opacity-30 cursor-not-allowed" : "";
        const sizeClasses = {
            small: "text-xs",
            large: "text-lg py-3 px-6",
        };
        const resolvedSizeClass = size ? sizeClasses[size] : "text-md py-2 px-4";

        const themeClasses = {
            regular: "bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900",
            menu: "px-3 py-2 text-sm font-medium text-center text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg " +
                "text-sm px-5 py-2.5 me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900",
            red: "bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-900",
            green: "bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-900",
            linkButton: "text-blue-500 hover:text-blue-700"
        }[theme];
        const iconBaseClasses = "flex items-center space-x-2";

        const classNames = icon
            ? iconBaseClasses
            : `${baseClasses} ${themeClasses} ${resolvedSizeClass} ${disabled ? disabledClasses : ''}`;

        return (
            <button
                ref={ref}
                onClick={onPress}
                disabled={disabled}
                className={classNames}
                {...rest}
            >
                {icon && <span>{icon}</span>}
                {label && <span>{label}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';

