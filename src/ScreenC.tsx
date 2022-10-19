import React, { FC } from "react";
import { useParams, useNavigate } from "react-router-dom"

interface ScreenCProps {
    message: string;
    history?: any;
    match?: any;
}

const ScreenC: FC<ScreenCProps> = (props) => {
    const { userid } = useParams()
    const navigate = useNavigate()

    const onClickBack = () =>
    {
        navigate(-1)
    }

    return (<>
        <div>{"Your id is " + userid}</div>
        <div>{props.message}</div>;
        <button onClick={onClickBack}>BACK</button>
    </>);
}

export default ScreenC;