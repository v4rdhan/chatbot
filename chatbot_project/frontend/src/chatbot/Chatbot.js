import React from 'react';
import "./Chatbot.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Chatbot() {
  const contacts = [
    { name: "Name_1", lastChat: "Hi....." },
    { name: "Name_2", lastChat: "Bye....." },
    { name: "Name_3", lastChat: "Lo....." },
    { name: "Name_4", lastChat: "lol....." },
    { name: "Name_5", lastChat: ":)" },
    { name: "Name_6", lastChat: ";)" },
    { name: "Name_7", lastChat: ";(" }
  ]
  return (
    <div className='d-flex justify-content-center align-items-center my-2 mx-3'>
      <div className='card-color-primary w-25 px-3 rounded-4'>
        <h4 className='text-center px-2 py-2'>Chat</h4>
        <div className='w-100'>
          <input type="text" placeholder='Search' className='search-input card-color-secondary border rounded-5 w-100 px-3 py-1' />
        </div>

        {contacts.map((user) =>
          <div className='my-3 card-color-secondary rounded-3 px-2 py-1'>
            <div className='w-100'>
              <h6 className='mx-2 my-0'>{user.name}</h6>
            </div>
            <div className='w-100'>
              <p className='mx-2 m-0'>{user.lastChat}</p>
            </div>
          </div>)}

      </div>


      <div className='w-75'></div>
    </div>
  )
}
