import React, {FC, SetStateAction} from 'react';
import {Stack, Typography, useMediaQuery} from "@mui/material";
import {useAppSelector} from "../../hook/redux-toolkit";
import AnswerButton from "../AnswerButton/AnswerButton";

interface QuizProps {
    changeId: React.Dispatch<SetStateAction<number>>
    id: number;
}

const Quiz: FC<QuizProps> = ({changeId, id}) => {
    const {countQuestion, activeQuestion} = useAppSelector(state => state.question);
    const isMobile = useMediaQuery('(max-width: 600px)');
    console.log(isMobile)
    return (
        <Stack
            direction={isMobile ? 'column' : 'row'}
            maxWidth={'600px'}
            width={'100%'}
            border={'1px solid lightgray'}
            padding={'20px'}
            margin={'100px auto 0'}
            gap={'15px'}
            sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                minHeight: '120px'
            }}
        >
            <Stack direction={!isMobile ? 'column' : 'row'} gap={'20px'} alignItems={isMobile ? 'center' : 'start'}>
                <Typography variant={'h6'}>{activeQuestion.text}</Typography>
                <Typography variant={'h6'} sx={{marginTop: !isMobile ? 'auto' : 0}}>{activeQuestion.stage}/{countQuestion}</Typography>
            </Stack>
            <Stack direction={'column'} marginLeft={!isMobile ? 'auto' : "0"} gap={'10px'} justifyContent={'center'}>
                {
                    activeQuestion.variant.map((button) =>
                        (
                            <AnswerButton key={button.id} button={button} id={id} changeId={changeId}/>
                        )
                    )
                }
            </Stack>
        </Stack>
    );
};

export default Quiz;