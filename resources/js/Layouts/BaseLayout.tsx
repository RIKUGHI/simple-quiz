import { FC, PropsWithChildren } from "react";

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="bb mx-5 lg:m-auto lg:max-w-3xl p-5">{children}</main>
    );
};

export default BaseLayout;
