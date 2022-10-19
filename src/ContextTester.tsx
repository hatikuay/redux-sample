import React, { createContext, useState } from "react";
import UserNameComp from "./UserNameComp";
import UserAgeComp from "./UserAgeComp";

export const TestContext = createContext<{ username: string; userage: number }>(
    { username: "", userage: 0 }
);


const ContextTester = () => {
    const [userage, setUserage] = useState(20);
    const [localState, setLocalState] = useState(0);

    const onClickAge = () => {
        setUserage((userage) => userage + 1)
    }

    const onClickLocalState = () => {
        setLocalState((localState) => localState + 1)
    }

    return (
        <React.Fragment>
            <button onClick={onClickAge}>Update Age</button>
            <TestContext.Provider value={{username: "Ercan", userage}}>
                <UserAgeComp></UserAgeComp>
                <UserNameComp></UserNameComp>
            </TestContext.Provider>
            
            <br/>
            <button onClick={onClickLocalState}>Update LocalState </button>
            <br/>
            <label>{localState}</label>
        </React.Fragment>
    );
}

export default ContextTester;