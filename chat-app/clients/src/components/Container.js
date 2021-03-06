import {useEffect} from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {init, subscribeChat, subscribeInitialMessages} from '../socketApi'
import {useChat} from '../context/ChatContext'


function Container() {

    const {setmessages} = useChat();

	useEffect(() => {
		init();

        subscribeInitialMessages((messages) => {
            setmessages(messages)
        })

        subscribeChat((message) => {
            setmessages((prevState) => [...prevState, {message}])
        });
	}, []);

    return (
        <div className="App">
            <ChatList />
            <ChatForm />
        </div>
    )
};

export default Container;
