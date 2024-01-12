import React from 'react'
import "./App.css"
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from "./components/ChatFeed"
import LoginForm from './components/LoginForm'
const App = () => {

  if(!localStorage.getItem("username")) return <LoginForm/>

  return (
    <div>
     <ChatEngine
        height="100vh"
        projectID="02a89e47-9adf-4b6c-912f-01a0d44d60e6"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
     />

    </div>
  )
}

export default App