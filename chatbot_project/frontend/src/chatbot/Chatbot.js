import React, { useRef, useState } from 'react';
import "./Chatbot.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import send from "../img/material-symbols--send.svg";

export default function Chatbot() {

  const activeChat = useRef("");
  const [chat, setChat] = useState("");

  const contacts = [
    { name: "Name_1", lastChat: "Hi....." },
    { name: "Name_2", lastChat: "Bye....." },
    { name: "Name_3", lastChat: "Lo....." },
    { name: "Name_4", lastChat: "lol....." },
    { name: "Name_5", lastChat: ":)" },
    { name: "Name_6", lastChat: ";)" },
    { name: "Name_7", lastChat: ";(" }
  ]


  // const chat = contacts.find((e)=> e.name === activeChat.current) 
  // console.log(chat.lastChat);
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center py-2'>
      <div className='h-100 card-color-primary w-25 px-3 rounded-4 mx-3'>
        <h4 className='text-center px-2 py-2'>Chat</h4>
        <div className='w-100'>
          <input type="text" placeholder='Search' className='search-input card-color-secondary border rounded-5 w-100 px-3 py-1' />
        </div>

        {contacts.map((user) =>
          <div key={user.name} onClick={() => {
            activeChat.current = user.name;
            const chat = contacts.find((e) => e.name === activeChat.current); setChat(chat)
          }} className='cursor-pointer my-3 card-color-secondary rounded-3 px-2 py-1'>
            <div className='w-100'>
              <h6 className='mx-2 my-0'>{user.name}</h6>
            </div>
            <div className='w-100'>
              <p className='mx-2 m-0'>{user.lastChat}</p>
            </div>
          </div>)}

      </div>


      <div className='d-flex justify-content-between align-items-center flex-column card-color-primary w-75 mx-3 h-100 rounded-4'>
        <div className='card-color-secondary rounded-top-4 w-100'>
          <h3 className='text-center my-2'>Name</h3>
        </div>
        <div className={chat === "" ? 'd-flex justify-content-center align-items-center flex-column h-100 w-100' : 'd-flex justify-content-start align-items-center flex-column h-100 w-100 py-4'}>
          {chat === "" ? <h1 className='text-center'>Wellcome to chat</h1> :
            <div className='sender-message w-100 px-3'>
              <p className='card-color-secondary px-2 py-1 m-0'>{chat.lastChat}</p>
            </div>}
        </div>
        <div className='position-relative w-100 px-2 my-3'>
          <img src={send} className='position-absolute top-0 end-0 py-2 px-3' alt='send'></img>
          <input className='message-input border rounded-5 w-100 px-3 py-1' type="text" placeholder='Message' />
        </div>
      </div>
    </div>
  )
}
