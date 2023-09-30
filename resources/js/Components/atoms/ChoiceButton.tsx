import { FC, PropsWithChildren } from "react";

const ChoiceButton: FC<
    PropsWithChildren<{
        variant: "netral" | "correct" | "wrong";
        onClick?: () => void;
        disabled?: boolean;
    }>
> = ({ children, variant = "netral", onClick, disabled }) => {
    let style = "";

    if (variant === "correct") style = "bg-green-200 border-2 border-green-600";
    if (variant === "wrong") style = "bg-red-200 border-2 border-red-600";

    return (
        <button
            className={`rounded-lg bg-gray-100 p-2 ${style} font-bold`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default ChoiceButton;
