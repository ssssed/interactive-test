import React, {useState} from 'react'
import {Stack} from "@mui/material";
import Quiz from "./Quiz/Quiz";
import {Route, Routes} from "react-router-dom";
import FinalQuizPage from "../pages/FinalQuizPage/FinalQuizPage";
import ProtectRouter from "../hoc/ProtectRouter";
import Header from "./Header/Header";

const App: React.FC = () => {
    const [id, setId] = useState<number>(0);
    return (
        <Stack>
            <Header />
            <Routes>
                <Route path='/' element={
                    <Quiz id={id} changeId={setId}/>
                }/>
                <Route path='/final' element={
                    <ProtectRouter>
                        <FinalQuizPage/>
                    </ProtectRouter>
                }/>
            </Routes>
        </Stack>
    )
}

export default App