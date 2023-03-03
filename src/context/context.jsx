import React, {useState} from "react";

const Context = React.createContext({
    isLoggedIn: "",
    role: "",
    user: {},
    news: [],
    lessons: [],
    onLogin: (role, user) => {},
    setNews: () => {},
    setLessons: () => {},
});

export const ContextProvider = (props) => {
    const [isLoggedIn, setIsloggedIn] = useState(false);
    const [role, setRole] = useState("");
    const [user, setUser] = useState({});
    const [lessons, setLessons] = useState([]);
    const [news, setNews] = useState([]);

    const loginHandler = (role, user) => {
        setRole(role);
        setUser(user);
        setIsloggedIn(true);
    }


    return (
        <Context.Provider 
        value={{
            isLoggedIn,
            role,
            user,
            news,
            lessons,
            onLogin: loginHandler,
            setNews,
            setLessons
        }}
        >
        {props.children}
        </Context.Provider>
    )
};

export default Context;