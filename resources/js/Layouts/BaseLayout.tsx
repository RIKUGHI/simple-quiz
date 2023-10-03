import { FC, PropsWithChildren } from "react";

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="lg:m-auto lg:max-w-3xl p-5 min-h-screenn">
            {children}
        </main>
    );
};

export default BaseLayout;
