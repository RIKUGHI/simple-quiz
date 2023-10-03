import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Quiz, User } from "@/types";
import { Transition } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FC, FormEventHandler, useEffect, useRef } from "react";

const Create: FC<PageProps<{ quiz: Quiz }>> = ({ auth, quiz }) => {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        photo: null,
        explain: null,
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        correct_answer: "",
    });

    useEffect(() => {
        return () => {
            reset("question", "a", "b", "c", "d", "correct_answer");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("quizzes.detail.store", { id: quiz.id }), {
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Quiz Untuk {quiz.title}
                </h2>
            }
        >
            <Head title="Student" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <section className="max-w-xl">
                            <form
                                onSubmit={submit}
                                className="mt-6 space-y-10"
                                encType="multipart/form-data"
                            >
                                <div>
                                    <InputLabel
                                        htmlFor="photo"
                                        value="Gambar (optional)"
                                    />

                                    <TextInput
                                        id="photo"
                                        name="photo"
                                        type="file"
                                        // value={data.photo}
                                        onChange={(e) => {
                                            const file = e.target
                                                .files?.[0] as any;
                                            if (file) {
                                                setData("photo", file);
                                            }
                                        }}
                                        className="mt-1 block w-full"
                                    />

                                    <InputError
                                        message={errors.photo}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="explain"
                                        value="Penjelasan"
                                    />

                                    <TextInput
                                        id="explain"
                                        name="explain"
                                        type="file"
                                        onChange={(e) => {
                                            const file = e.target
                                                .files?.[0] as any;
                                            if (file) {
                                                setData("explain", file);
                                            }
                                        }}
                                        className="mt-1 block w-full"
                                    />

                                    <InputError
                                        message={errors.explain}
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

                                    <div>
                                        <InputLabel
                                            htmlFor={`email_e`}
                                            value={"E"}
                                        />

                                        <div className="flex items-center">
                                            <TextInput
                                                id={`email_e`}
                                                name={`email_e`}
                                                value={data.e}
                                                onChange={(e) => {
                                                    setData(
                                                        "e",
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
                                                        "e"
                                                    );
                                                }}
                                            />
                                        </div>

                                        <InputError
                                            message={errors.e}
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
                                        Simpan
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
