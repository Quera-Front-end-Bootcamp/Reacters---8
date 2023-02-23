import React from "react";

const Context = React.createContext({
    userType: "",
    userInfo: {},
    news: [],
    lessons: [],
    setNews: () => null,
    setLessons: () => null,
});

export const ContextProvider = (props) => {
    return (
        <Context.Provider 
        // value={}
        >
        {props.children}
        </Context.Provider>
    )
};

export default Context;