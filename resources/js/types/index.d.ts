export interface User {
    id: number;
    name: string;
    nim: string;
    email: string;
    email_verified_at: string;
    is_admin: number;
}

export interface Quiz {
    id: number;
    title: string;
    question_details_count: number;
    answers_count: number;
    done_count: number;
    created_at: string;
    updated_at: string;
}

export interface QuizDetail {
    id: number;
    question_id: number;
    photo: null | string;
    explain: null | string;
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    correct_answer: string;
}

export interface Answer {
    id: number;
    user_id: number;
    question_detail_id: number;
    answer: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    flash: {
        message?: string;
    };
};
