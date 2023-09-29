import { PageProps, User } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FC } from "react";

const Page: FC<PageProps<{ students: User[] }>> = ({
    auth,
    students,
    flash,
}) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Quiz
                    </h2>
                    <Link href={route("quizzes.create")} className="font-bold">
                        Tambah
                    </Link>
                </div>
            }
        >
            <Head title="Student" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto">
                                {flash.message && (
                                    <p className="text-red-600">
                                        {flash.message}
                                    </p>
                                )}
                                <table className="w-full text-sm text-left text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3">
                                                Pertanyaan
                                            </th>
                                            <th className="px-6 py-3">A</th>
                                            <th className="px-6 py-3">B</th>
                                            <th className="px-6 py-3">C</th>
                                            <th className="px-6 py-3">D</th>
                                            <th className="px-6 py-3">
                                                Explain
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {students.map((student) => (
                                            <tr
                                                key={student.id}
                                                className="bg-white border-b"
                                            >
                                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                    {student.name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {student.email}
                                                </td>
                                            </tr>
                                        ))} */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Page;
