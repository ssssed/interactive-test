import React from 'react';
import {Container, Stack, Typography} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FinalQuizPage = () => {
    return (
        <Stack direction='column' margin='80px auto' maxWidth={'300px'} gap='10px'>
                <CheckCircleIcon sx={{
                    width: '100%',
                    height: '4em'
                }} />
            <Typography variant='h6' textAlign='center'>Спасибо вам за потраченное время!</Typography>
        </Stack>
    );
};

export default FinalQuizPage;