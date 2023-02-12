import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateStore, QuestionAnswerAction} from "../../type";
import {creativityQuestion, itQuestion} from "../../utils/static-data";

const initialState: InitialStateStore = {
    questions: [
        {
            id: 'start-question',
            answer: '',
            stage: 1,
            variant: [
                {
                    id: 'c-1',
                    text: 'Программирование',
                    categories: 'it'
                },
                {
                    id: 'c-2',
                    text: 'Творчество',
                    categories: 'creativity'
                }
            ],
            text: 'Какое направление тебе более интересно?'
        }
    ],
    activeQuestion: {
        id: 'start-question',
        answer: '',
        stage: 1,
        variant: [
            {
                id: 'c-1',
                text: 'Программирование',
                categories: 'it'
            },
            {
                id: 'c-2',
                text: 'Творчество',
                categories: 'creativity'
            }
        ],
        text: 'Какое направление тебе более интересно?'
    },
    countQuestion: 7,
    categories: 'default',
    isFinish: false,
}

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        updateQuestionAnswer(state, action: PayloadAction<QuestionAnswerAction>) {
            const updatedQuestion = state.questions.find(el => el.id === action.payload.id);
            if (updatedQuestion) {
                updatedQuestion.answer = action.payload.answer;
                state.questions = [...state.questions];
            }
        },
        updateCategories(state, action: PayloadAction<'it' | 'creativity' | 'default'>) {
            if(state.categories === 'default') {
                if (action.payload === 'creativity') {
                    state.questions = creativityQuestion;
                    state.questions[0].answer = 'Творчество';
                }
                if (action.payload === 'it') {
                    state.questions = itQuestion;
                    state.questions[0].answer = 'Программирование';
                }
            }
            state.categories = action.payload;

        },
        updateActiveQuestion(state, action: PayloadAction<number>) {
            if (state.questions[action.payload])
                state.activeQuestion = state.questions[action.payload];
            else state.isFinish = true;
        },
        updateFinishStatus(state, action: PayloadAction<boolean>) {
            state.isFinish = action.payload;
        }
    },
});

export const {updateCategories, updateQuestionAnswer, updateActiveQuestion, updateFinishStatus} =
    questionSlice.actions;

export default questionSlice.reducer;