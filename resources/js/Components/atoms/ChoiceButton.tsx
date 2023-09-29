import { FC, PropsWithChildren } from "react";

const ChoiceButton: FC<PropsWithChildren> = ({ children }) => {
    return (
        <button className="rounded-lg bg-green-100 p-2 active:bg-green-600 active:text-white">
            {children}
        </button>
    );
};

export default ChoiceButton;
