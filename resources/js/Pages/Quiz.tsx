import { ChoiceButton } from "@/Components/atoms";
import BaseLayout from "@/Layouts/BaseLayout";
import { FC, useEffect, useState } from "react";
import Logo from "../assets/logo.jpeg";
import { Answer, PageProps, QuizDetail } from "@/types";
import { Link, useForm, router } from "@inertiajs/react";
import InputError from "@/Components/InputError";

const Quiz: FC<
    PageProps<{
        question: {
            current_page: number;
            data: QuizDetail[];
            last_page: number;
            total: number;
        };
        answer: null | Answer;
        is_done: boolean;
    }>
> = ({ question, answer, is_done }) => {
    const { setData, post, errors, reset } = useForm({
        answer: answer?.answer || "",
        question_detail_id: question.data[0].id,
        is_done: question.current_page + 1 > question.last_page,
    });
    const [currentAnswer, setCurrentAnswer] = useState(answer?.answer || "");

    useEffect(() => {
        return () => {
            reset("answer");
        };
    }, []);

    const handleNextQuestion = () => {
        post(
            route("my-quizzes.store", {
                id: question.data[0].question_id,
            })
        );

        if (question.current_page + 1 > question.last_page) {
            router.visit(
                route("my-quizzes.index", {
                    id: question.data[0].question_id,
                })
            );
        } else {
            router.visit(
                route("my-quizzes.detail", {
                    id: question.data[0].question_id,
                    page: question.current_page + 1,
                })
            );
        }
    };

    const getVariant = (label: string): "netral" | "correct" | "wrong" => {
        const variant: "netral" | "correct" | "wrong" = "netral";

        if (
            currentAnswer === question.data[0].correct_answer &&
            currentAnswer === label
        ) {
            return "correct";
        }

        if (
            currentAnswer !== question.data[0].correct_answer &&
            question.data[0].correct_answer === label
        ) {
            return "correct";
        }

        if (
            currentAnswer !== question.data[0].correct_answer &&
            currentAnswer === label
        ) {
            return "wrong";
        }

        return variant;
    };

    return (
        <BaseLayout>
            <p className="text-green-600 font-bold text-center">
                Soal {question.current_page} dari {question.total}
            </p>
            <div className="mt-5 text-center text-4xl font-bold">
                {question.data[0].question}
            </div>
            <img
                src={`${window.location.origin}/storage/${question.data[0].photo}`}
                alt=""
            />
            <InputError message={errors.answer} className="my-2" />
            <div className="mt-10 space-y-5 flex flex-col">
                <ChoiceButton
                    variant={
                        is_done
                            ? getVariant("a")
                            : currentAnswer === "a"
                            ? "correct"
                            : "netral"
                    }
                    onClick={() => {
                        setData("answer", "a");
                        setCurrentAnswer("a");
                    }}
                    disabled={is_done}
                >
                    {question.data[0].a}
                </ChoiceButton>
                <ChoiceButton
                    variant={
                        is_done
                            ? getVariant("b")
                            : currentAnswer === "b"
                            ? "correct"
                            : "netral"
                    }
                    onClick={() => {
                        setData("answer", "b");
                        setCurrentAnswer("b");
                    }}
                    disabled={is_done}
                >
                    {question.data[0].b}
                </ChoiceButton>
                <ChoiceButton
                    variant={
                        is_done
                            ? getVariant("c")
                            : currentAnswer === "c"
                            ? "correct"
                            : "netral"
                    }
                    onClick={() => {
                        setData("answer", "c");
                        setCurrentAnswer("c");
                    }}
                    disabled={is_done}
                >
                    {question.data[0].c}
                </ChoiceButton>
                <ChoiceButton
                    variant={
                        is_done
                            ? getVariant("d")
                            : currentAnswer === "d"
                            ? "correct"
                            : "netral"
                    }
                    onClick={() => {
                        setData("answer", "d");
                        setCurrentAnswer("d");
                    }}
                    disabled={is_done}
                >
                    {question.data[0].d}
                </ChoiceButton>
                <ChoiceButton
                    variant={
                        is_done
                            ? getVariant("e")
                            : currentAnswer === "e"
                            ? "correct"
                            : "netral"
                    }
                    onClick={() => {
                        setData("answer", "e");
                        setCurrentAnswer("e");
                    }}
                    disabled={is_done}
                >
                    {question.data[0].e}
                </ChoiceButton>
            </div>

            {is_done && (
                <div className="mt-10">
                    <img
                        src={`${window.location.origin}/storage/${question.data[0].explain}`}
                        alt="empty"
                    />
                </div>
            )}
            <div className="mt-5 flex justify-between">
                <Link
                    href={
                        question.current_page === 1
                            ? route("my-quizzes.index")
                            : route("my-quizzes.detail", {
                                  id: question.data[0].question_id,
                                  page: question.current_page - 1,
                              })
                    }
                >
                    Kembali
                </Link>

                <button className="text-sm" onClick={handleNextQuestion}>
                    {question.current_page === question.last_page
                        ? "Selesai"
                        : is_done
                        ? "Lanjut"
                        : "Simpan dan Lanjut"}
                </button>
            </div>
        </BaseLayout>
    );
};

export default Quiz;
