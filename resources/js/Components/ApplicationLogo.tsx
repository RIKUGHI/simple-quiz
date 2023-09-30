import { SVGAttributes } from "react";
import Logo from "../assets/logo.jpeg";

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return <img src={Logo} alt="" width={45} />;
}
