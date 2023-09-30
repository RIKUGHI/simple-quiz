import BaseLayout from "@/Layouts/BaseLayout";
import { PageProps, Quiz } from "@/types";
import { Link } from "@inertiajs/react";
import { FC } from "react";

const Score: FC<
    PageProps<{
        question: Quiz;
        correctCount: number;
        wrongCount: number;
        score: number;
    }>
> = ({ question, correctCount, wrongCount, score }) => {
    return (
        <BaseLayout>
            <div className="bg-green-200 p-10 rounded-xl flex flex-col items-center space-y-5">
                <span className="font-bold text-green-600 bg-white rounded-full p-2">
                    Yey Quiz {question.title} Selesai
                </span>
                <p className="text-green-600 font-bold">
                    Kamu mendapatkan nilai
                </p>
                <div className="bg-white w-40 h-40 rounded-full flex justify-center items-center text-2xl font-bold">
                    {score}
                </div>
            </div>
            <div className="mt-10 flex">
                <div className="flex-auto">
                    <p className="text-xs">Jawaban Benar</p>
                    <p className="font-bold">{correctCount} Soal</p>
                </div>
                <div className="flex-auto">
                    <p className="text-xs">Jawaban Salah</p>
                    <p className="font-bold">{wrongCount} Soal</p>
                </div>
            </div>
            <Link
                href={route("my-quizzes.index")}
                className="mt-10 py-2 px-5 rounded-full mx-auto block w-fit border border-green-600 text-sm font-bold"
            >
                Selesai
            </Link>
        </BaseLayout>
    );
};

export default Score;
