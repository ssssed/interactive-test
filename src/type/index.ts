export type Question = {
    id: number | string;
    stage: number;
    text: string;
    answer: string;
    variant: Variant[]
}

export type Variant = {
    id: number | string;
    text: string;
    categories: 'it' | 'creativity'
}

export interface InitialStateStore {
    questions: Question[];
    activeQuestion: Question;
    countQuestion: number;
    categories: 'it' | 'creativity' | 'default';
    isFinish: boolean;
}

export interface QuestionAnswerAction {
    id: number | string;
    answer: string;
}