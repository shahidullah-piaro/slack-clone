import React, {useState} from 'react';
import './ChatInput.css';
import {useStateValue} from './StateProvider'
import db from './firebase';
import firebase from 'firebase/compat/app';

function ChatInput({channelName, channelId}) {
    const [{user}] = useStateValue()
    const [input, setInput] = useState(''); 

    const sendMessage = (e) => {
        e.preventDefault()
        if(channelId){
            db.collection("rooms").doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.Timestamp.now(),
                username: user.displayName,
                userimage: user.photoURL
            })
            setInput('');       
        }
    }


  return (
    <div className='chatinput'>
        <form>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message #${channelName}`}/>
            <button type='submit' onClick={sendMessage}>Send</button>
        </form>
    </div>
  );
}

export default ChatInput;
