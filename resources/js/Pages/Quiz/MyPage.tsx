import { PageProps, Quiz, User } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FC } from "react";

const MyPage: FC<PageProps<{ quizzes: Quiz[] }>> = ({
    auth,
    quizzes,
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
                                            <th className="px-6 py-3">Judul</th>
                                            <th className="px-6 py-3">
                                                Total Soal
                                            </th>
                                            <th className="px-6 py-3">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {quizzes.map((quiz) => (
                                            <tr
                                                key={quiz.id}
                                                className="bg-white border-b"
                                            >
                                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                    {quiz.title}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {
                                                        quiz.question_details_count
                                                    }
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Link
                                                        href={route(
                                                            "my-quizzes.detail",
                                                            { id: quiz.id }
                                                        )}
                                                        className={`${
                                                            quiz.done_count ===
                                                            1
                                                                ? "bg-green-600"
                                                                : "bg-blue-600"
                                                        } p-2 rounded-full text-white`}
                                                    >
                                                        {quiz.done_count === 1
                                                            ? "Lihat Hasil"
                                                            : quiz.answers_count >
                                                              0
                                                            ? "Lanjutkan"
                                                            : "Kerjakan"}
                                                    </Link>
                                                    {quiz.done_count === 1 && (
                                                        <Link
                                                            href={route(
                                                                "my-quizzes.score",
                                                                { id: quiz.id }
                                                            )}
                                                            className={`bg-purple-600 ml-2 p-2 rounded-full text-white`}
                                                        >
                                                            Score
                                                        </Link>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
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

export default MyPage;
