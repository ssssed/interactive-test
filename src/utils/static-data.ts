import {Question} from "../type";

export const itQuestion: Question[] = [
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
    },
    {
        id: 0,
        text: 'Какой язык программирования тебе нравится',
        stage: 2,
        answer: '',
        variant: [
            {
                id: 'language-1',
                text: 'JavaScript',
                categories: 'it'
            },
            {
                id: 'language-2',
                text: 'C#',
                categories: 'it'
            }, {
                id: 'language-3',
                text: 'Java',
                categories: 'it'
            },

        ]
    },
    {
        id: 1,
        text: 'Кем вы планируете стать после обучения?',
        answer: '',
        stage: 3,
        variant: [
            {
                id: 'job-1',
                text: 'Frontend',
                categories: 'it'
            },
            {
                id: 'job-2',
                text: 'Backend',
                categories: 'it'
            }, {
                id: 'job-3',
                text: 'QA tester',
                categories: 'it'
            },

        ]
    },
    {
        id: 2,
        text: 'На сколько вы сдали балов?',
        answer: '',
        stage: 4,
        variant: [
            {
                id: 'ball-1',
                text: 'от 200 до 250',
                categories: 'it'
            },
            {
                id: 'ball-2',
                text: 'от 150 до 200',
                categories: 'it'
            }, {
                id: 'ball-3',
                text: 'меньше 100',
                categories: 'it'
            },

        ]
    },
    {
        id: 4,
        text: 'Есть ли возможность учиться на коммерции?',
        answer: '',
        stage: 6,
        variant: [
            {
                id: 'kommerc-1',
                text: 'да',
                categories: 'it'
            },
            {
                id: 'kommerc-2',
                text: 'нет',
                categories: 'it'
            }
        ]
    },
    {
        id: 5,
        text: 'Предпочитаемый формат обучения?',
        answer: '',
        stage: 7,
        variant: [
            {
                id: 'format-1',
                text: 'очно',
                categories: 'it'
            },
            {
                id: 'format-2',
                text: 'заочно',
                categories: 'it'
            }
        ]
    }
]
export const creativityQuestion: Question[] = [
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
    },
    {
        id: 0,
        text: 'Что из перечисленного вам нравится больше?',
        stage: 2,
        variant: [
            {
                id: 'type-1',
                text: 'Реклама',
                categories: 'creativity'
            },
            {
                id: 'type-2',
                text: 'Дизайн',
                categories: 'creativity'
            },
            {
                id: 'type-3',
                text: 'История',
                categories: 'creativity'
            },
        ],
        answer: ''
    },
    {
        id: 1,
        text: 'Кем бы вы хотели стать после вуза?',
        stage: 2,
        variant: [
            {
                id: 'type-1',
                text: 'Телеведущим',
                categories: 'creativity'
            },
            {
                id: 'type-2',
                text: 'Дизайнеров',
                categories: 'creativity'
            },
            {
                id: 'type-3',
                text: 'Архиологом',
                categories: 'creativity'
            },
            {
                id: 'type-4',
                text: 'Преподавателем',
                categories: 'creativity'
            }
        ],
        answer: ''
    },
    {
        id: 2,
        text: 'На сколько вы сдали балов?',
        answer: '',
        stage: 4,
        variant: [
            {
                id: 'ball-1',
                text: 'от 200 до 250',
                categories: 'creativity'
            },
            {
                id: 'ball-2',
                text: 'от 150 до 200',
                categories: 'creativity'
            }, {
                id: 'ball-3',
                text: 'меньше 100',
                categories: 'creativity'
            },

        ]
    },
    {
        id: 4,
        text: 'Есть ли возможность учиться на коммерции?',
        answer: '',
        stage: 6,
        variant: [
            {
                id: 'kommerc-1',
                text: 'да',
                categories: 'creativity'
            },
            {
                id: 'kommerc-2',
                text: 'нет',
                categories: 'creativity'
            }
        ]
    },
    {
        id: 5,
        text: 'Предпочитаемый формат обучения?',
        answer: '',
        stage: 7,
        variant: [
            {
                id: 'format-1',
                text: 'очно',
                categories: 'creativity'
            },
            {
                id: 'format-2',
                text: 'заочно',
                categories: 'creativity'
            }
        ]
    }
]