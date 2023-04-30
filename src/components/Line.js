import React, { useEffect, useState } from 'react'
import Header from './Header.js'
import { db, auth } from "../firebase.js"
import SendMessage from './SendMessage.js';

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
    .orderBy("createdAt")
    .limit(50)
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div>
      {console.log(messages)}
      <Header />
      <div className='msgs'>
        {messages.map(({id, text, photoURL, uid}) =>(
          <div>
            <div key={id}
            className={`msg ${ uid === auth.currentUser.uid ? "sent" : "received"}`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )

}

export default Line
