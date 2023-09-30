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
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct_answer: "",
    });

    useEffect(() => {
        return () => {
            reset("title", "question", "a", "b", "c", "d", "correct_answer");
        };
    }, []);

    // const addQuestion = () => {
    //     setData("questions", [
    //         ...data.questions,
    //         {
    //             question: "",
    //             a: "",
    //             b: "",
    //             c: "",
    //             d: "",
    //             correct_answer: "",
    //             explain: "",
    //         },
    //     ]);
    // };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

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

                                <div className="space-y-6 pb-10">
                                    <div>
                                        <InputLabel
                                            htmlFor={`question`}
                                            value={`Pertanyaan`}
                                        />

                                        <TextInput
                                            id={`question`}
                                            name={`question`}
                                            value={data.question}
                                            onChange={(e) => {
                                                setData(
                                                    "question",
                                                    e.target.value
                                                );
                                            }}
                                            className="mt-1 block w-full"
                                        />

                                        <InputError
                                            message={errors.question}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor={`email_a`}
                                            value={"A"}
                                        />

                                        <div className="flex items-center">
                                            <TextInput
                                                id={`email_a`}
                                                name={`email_a`}
                                                value={data.a}
                                                onChange={(e) => {
                                                    setData(
                                                        "a",
                                                        e.target.value
                                                    );
                                                }}
                                                className="mt-1 block w-full"
                                            />

                                            <TextInput
                                                name={`correct`}
                                                type="radio"
                                                className="ml-2"
                                                onChange={(e) => {
                                                    setData(
                                                        "correct_answer",
                                                        "a"
                                                    );
                                                }}
                                            />
                                        </div>

                                        <InputError
                                            message={errors.a}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor={`email_b`}
                                            value={"B"}
                                        />

                                        <div className="flex items-center">
                                            <TextInput
                                                id={`email_b`}
                                                name={`email_b`}
                                                value={data.b}
                                                onChange={(e) => {
                                                    setData(
                                                        "b",
                                                        e.target.value
                                                    );
                                                }}
                                                className="mt-1 block w-full"
                                            />

                                            <TextInput
                                                name={`correct`}
                                                type="radio"
                                                className="ml-2"
                                                onChange={(e) => {
                                                    setData(
                                                        "correct_answer",
                                                        "b"
                                                    );
                                                }}
                                            />
                                        </div>

                                        <InputError
                                            message={errors.b}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor={`email_c`}
                                            value={"C"}
                                        />

                                        <div className="flex items-center">
                                            <TextInput
                                                id={`email_c`}
                                                name={`email_c`}
                                                value={data.c}
                                                onChange={(e) => {
                                                    setData(
                                                        "c",
                                                        e.target.value
                                                    );
                                                }}
                                                className="mt-1 block w-full"
                                            />

                                            <TextInput
                                                name={`correct`}
                                                type="radio"
                                                className="ml-2"
                                                onChange={(e) => {
                                                    setData(
                                                        "correct_answer",
                                                        "c"
                                                    );
                                                }}
                                            />
                                        </div>

                                        <InputError
                                            message={errors.c}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor={`email_d`}
                                            value={"D"}
                                        />

                                        <div className="flex items-center">
                                            <TextInput
                                                id={`email_d`}
                                                name={`email_d`}
                                                value={data.d}
                                                onChange={(e) => {
                                                    setData(
                                                        "d",
                                                        e.target.value
                                                    );
                                                }}
                                                className="mt-1 block w-full"
                                            />

                                            <TextInput
                                                name={`correct`}
                                                type="radio"
                                                className="ml-2"
                                                onChange={(e) => {
                                                    setData(
                                                        "correct_answer",
                                                        "d"
                                                    );
                                                }}
                                            />
                                        </div>

                                        <InputError
                                            message={errors.d}
                                            className="mt-2"
                                        />
                                    </div>

                                    <InputError
                                        message={errors.correct_answer}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex items-center gap-4">
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
