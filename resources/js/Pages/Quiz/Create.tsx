import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User } from "@/types";
import { Transition } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FC, FormEventHandler, useEffect } from "react";

const Create: FC<PageProps> = ({ auth }) => {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        title: "",
        questions: [
            {
                question: "",
                a: "",
                b: "",
                c: "",
                d: "",
                correct_answer: "",
                explain: "",
            },
        ],
    });

    useEffect(() => {
        return () => {
            reset("questions");
        };
    }, []);

    const addQuestion = () => {
        setData("questions", [
            ...data.questions,
            {
                question: "",
                a: "",
                b: "",
                c: "",
                d: "",
                correct_answer: "",
                explain: "",
            },
        ]);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data.questions);

        post(route("quizzes.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Quiz
                </h2>
            }
        >
            <Head title="Student" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <section className="max-w-xl">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Informasi Quiz
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    {data.questions.length} Quiz.
                                </p>
                            </header>

                            <form onSubmit={submit} className="mt-6 space-y-10">
                                <div>
                                    <InputLabel htmlFor="title" value="Judul" />

                                    <TextInput
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        onChange={(e) => {
                                            setData("title", e.target.value);
                                        }}
                                        className="mt-1 block w-full"
                                    />

                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>
                                {data.questions.map((question, i) => (
                                    <div
                                        key={i}
                                        className="space-y-1 border-b-4 border-black pb-10"
                                    >
                                        <div>
                                            <InputLabel
                                                htmlFor={`question_${i}`}
                                                value={`Pertanyaan ${i + 1}`}
                                            />

                                            <TextInput
                                                id={`question_${i}`}
                                                name={`question_${i}`}
                                                value={
                                                    data.questions[i].question
                                                }
                                                onChange={(e) => {
                                                    const copyQuestion = [
                                                        ...data.questions,
                                                    ];
                                                    copyQuestion[i].question =
                                                        e.target.value;

                                                    setData(
                                                        "questions",
                                                        copyQuestion
                                                    );
                                                }}
                                                className="mt-1 block w-full"
                                            />

                                            {/* <InputError
                                                message={
                                                    errors[
                                                        "questions.0.question"
                                                    ]
                                                }
                                                className="mt-2"
                                            /> */}
                                        </div>

                                        {["A", "B", "C", "D"].map((choice) => (
                                            <div key={choice}>
                                                <InputLabel
                                                    htmlFor={`email_${choice}_${i}`}
                                                    value={choice}
                                                />

                                                <div className="flex">
                                                    <TextInput
                                                        id={`email_${choice}_${i}`}
                                                        name={`email_${choice}_${i}`}
                                                        // value={data.email}
                                                        onChange={(e) => {
                                                            const copyQuestion =
                                                                [
                                                                    ...data.questions,
                                                                ];

                                                            if (
                                                                choice === "A"
                                                            ) {
                                                                copyQuestion[
                                                                    i
                                                                ].a =
                                                                    e.target.value;
                                                            }

                                                            if (
                                                                choice === "B"
                                                            ) {
                                                                copyQuestion[
                                                                    i
                                                                ].b =
                                                                    e.target.value;
                                                            }

                                                            if (
                                                                choice === "C"
                                                            ) {
                                                                copyQuestion[
                                                                    i
                                                                ].c =
                                                                    e.target.value;
                                                            }

                                                            if (
                                                                choice === "D"
                                                            ) {
                                                                copyQuestion[
                                                                    i
                                                                ].d =
                                                                    e.target.value;
                                                            }

                                                            setData(
                                                                "questions",
                                                                copyQuestion
                                                            );
                                                        }}
                                                        className="mt-1 block w-full"
                                                    />

                                                    <TextInput
                                                        name={`correct_${i}`}
                                                        type="radio"
                                                        onChange={(e) => {
                                                            const copyQuestion =
                                                                [
                                                                    ...data.questions,
                                                                ];

                                                            if (
                                                                choice === "A"
                                                            ) {
                                                                copyQuestion[
                                                                    i
                                                                ].correct_answer =
                                                                    "a";
                                                            }

                                                            if (
                                                                choice === "B"
                                                            ) {
                                                                copyQuestion[
                                                                    i
                                                                ].correct_answer =
                                                                    "b";
                                                            }

                                                            if (
                                                                choice === "C"
                                                            ) {
                                                                copyQuestion[
                                                                    i
                                                                ].correct_answer =
                                                                    "c";
                                                            }

                                                            if (
                                                                choice === "D"
                                                            ) {
                                                                copyQuestion[
                                                                    i
                                                                ].correct_answer =
                                                                    "d";
                                                            }

                                                            setData(
                                                                "questions",
                                                                copyQuestion
                                                            );
                                                        }}
                                                    />
                                                </div>

                                                <InputError
                                                    // message={errors.email}
                                                    className="mt-2"
                                                />
                                            </div>
                                        ))}

                                        <div>
                                            <InputLabel
                                                htmlFor={`explain_${i}`}
                                                value="Explain"
                                            />

                                            <TextInput
                                                id={`explain_${i}`}
                                                name={`explain_${i}`}
                                                // value={data.password}
                                                isFocused={true}
                                                onChange={(e) => {
                                                    const copyQuestion = [
                                                        ...data.questions,
                                                    ];
                                                    copyQuestion[i].explain =
                                                        e.target.value;

                                                    setData(
                                                        "questions",
                                                        copyQuestion
                                                    );
                                                }}
                                                className="mt-1 block w-full"
                                            />

                                            <InputError
                                                // message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                ))}

                                <div className="flex items-center gap-4">
                                    <SecondaryButton onClick={addQuestion}>
                                        Tambah Soal
                                    </SecondaryButton>
                                    <PrimaryButton disabled={processing}>
                                        Save
                                    </PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600">
                                            Saved.
                                        </p>
                                    </Transition>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
