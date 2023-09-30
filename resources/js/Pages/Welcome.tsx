import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Logo from "../assets/logo.jpeg";
import BaseLayout from "@/Layouts/BaseLayout";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <BaseLayout>
            <div className="space-y-10">
                <h1 className="text-2xl font-bold text-center">
                    Welcome To TGM-Math
                </h1>
                <img src={Logo} alt="" width={200} className="m-auto" />
                <div className="flex justify-center">
                    <Link
                        href={route("login")}
                        className="py-2 w-40 text-center bg-green-600 rounded-md text-white font-bold"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </BaseLayout>
    );
}
