import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Quiz, QuizDetail, User } from "@/types";
import { Transition } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FC, FormEventHandler, Fragment, useEffect } from "react";

const Detail: FC<PageProps<{ quiz: Quiz; questionDetails: QuizDetail[] }>> = ({
    auth,
    quiz,
    questionDetails,
}) => {
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

                            <form className="mt-6 space-y-10">
                                <div>
                                    <InputLabel htmlFor="title" value="Judul" />

                                    <TextInput
                                        id="title"
                                        name="title"
                                        value={quiz.title}
                                        readOnly
                                        className="mt-1 block w-full"
                                    />
                                </div>

                                {questionDetails.map((d) => (
                                    <Fragment key={d.id}>
                                        <div className="space-y-6 pb-10">
                                            {d.photo && (
                                                <div>
                                                    <img
                                                        src={`${window.location.origin}/storage/${d.photo}`}
                                                        alt="empty"
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                <p>
                                                    Jawaban benar adalah{" "}
                                                    <b>{d.correct_answer}</b>
                                                </p>

                                                <InputLabel
                                                    htmlFor={`question`}
                                                    value={`Pertanyaan`}
                                                />

                                                <TextInput
                                                    id={`question`}
                                                    name={`question`}
                                                    value={d.question}
                                                    readOnly
                                                    className="mt-1 block w-full"
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
                                                        value={d.a}
                                                        readOnly
                                                        className="mt-1 block w-full"
                                                    />
                                                </div>
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
                                                        value={d.b}
                                                        readOnly
                                                        className="mt-1 block w-full"
                                                    />
                                                </div>
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
                                                        value={d.c}
                                                        readOnly
                                                        className="mt-1 block w-full"
                                                    />
                                                </div>
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
                                                        value={d.d}
                                                        readOnly
                                                        className="mt-1 block w-full"
                                                    />
                                                </div>
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
                                                        value={d.e}
                                                        readOnly
                                                        className="mt-1 block w-full"
                                                    />
                                                </div>
                                            </div>

                                            {d.explain && (
                                                <div>
                                                    <img
                                                        src={`${window.location.origin}/storage/${d.explain}`}
                                                        alt="empty"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </Fragment>
                                ))}
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Detail;
