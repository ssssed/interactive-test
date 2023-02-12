import React, {FC} from 'react';
import {useAppSelector} from "../hook/redux-toolkit";
import {Navigate} from "react-router-dom";

interface ProtectRouterProps {
    children: any;
}

const ProtectRouter:FC<ProtectRouterProps> = ({children}) => {
    const { isFinish } = useAppSelector(state => state.question)
    if(isFinish) return children;
    return <Navigate to='/' />
};

export default ProtectRouter;