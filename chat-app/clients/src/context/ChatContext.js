import {useState, createContext, useContext} from 'react';

const ChatContext = createContext();

export const ChatProvider = ({children}) => {

    const [messages, setmessages] = useState([{
        message: "Selam"},
        {message: "Naber"},
    ]);

    const values = {
        messages,
        setmessages,
    };

    return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
};



export const useChat = () => useContext(ChatContext);