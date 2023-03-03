import React, {useState, useEffect} from "react";

const pfpURL = 'https://darbonnewoods.com/wp-content/uploads/2022/04/Blank-Profile.png';

const Context = React.createContext({
    isLoggedIn: "",
    role: "",
    user: {},
    pfpURL, 
    news: [],
    lessons: [],
    onLogin: (role, user) => {},
    onLogout: () => {},
    setNews: () => {},
    setLessons: () => {},
});

export const ContextProvider = (props) => {


    useEffect(() => {
        const logged = localStorage.getItem('isloggedin');
        console.log('logged', logged);
        if (logged) {
            setIsloggedIn(true);
            const role = localStorage.getItem('role');
            console.log('role', role);
            setRole(role);
            const user = JSON.parse(localStorage.getItem('user'));
            setUser(user);
        }
    }
    ,[])

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
    const logOutHandler =() => {
        setIsloggedIn(false);
        setRole(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        localStorage.removeItem('isloggedin');
    }


    return (
        <Context.Provider 
        value={{
            isLoggedIn,
            role,
            user,
            pfpURL,
            news,
            lessons,
            onLogin: loginHandler,
            onLogout: logOutHandler,
            setNews,
            setLessons,
        }}
        >
        {props.children}
        </Context.Provider>
    )
};

export default Context;