import React, {FC, SetStateAction} from 'react';
import {Button} from "@mui/material";
import {
    updateActiveQuestion,
    updateCategories,
    updateFinishStatus,
    updateQuestionAnswer
} from "../../store/slice/questionSlice";
import {Variant} from "../../type";
import {useAppDispatch, useAppSelector} from "../../hook/redux-toolkit";
import {useNavigate} from "react-router-dom";

interface AnswerButtonProps {
    button: Variant;
    id: number;
    changeId: React.Dispatch<SetStateAction<number>>;
}

const AnswerButton: FC<AnswerButtonProps> = ({button, id, changeId}) => {
    const dispatch = useAppDispatch();
    const {activeQuestion, countQuestion, questions} = useAppSelector(state => state.question);
    const navigate = useNavigate();

    const handleButtonClick = async () => {
        await dispatch(updateQuestionAnswer({
            id: activeQuestion.id,
            answer: button.text
        }))
        await dispatch(updateCategories(button.categories))
        if (id + 1 <= countQuestion - 2) { // -2 потому что айдишники сбиты из-за обновления массива с вопросами
            await dispatch(updateActiveQuestion(id + 1))
            changeId(id + 1);
        }
        else {
            questions.forEach((el) => {
                console.log(el);
            })
            dispatch(updateFinishStatus(true));
            navigate('/final');
        }
    }
    return (
        <Button key={button.id} onClick={handleButtonClick} variant="contained">
            {button.text}
        </Button>
    );
};

export default AnswerButton;