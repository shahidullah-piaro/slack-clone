import React,{useEffect, useState} from 'react';
import './Chat.css';
import Messages from './Messages';
import {useParams} from 'react-router-dom';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import db from './firebase';
import ChatInput from './ChatInput';

function Chat() {
    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot((snapShot)=>(setRoomDetails(snapShot.data())))
        }

        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot((snapShot) => (setRoomMessages(snapShot.docs.map((doc)=> doc.data()))));

    },[roomId]);
    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot((snapShot) => (setRoomMessages(snapShot.docs.map((doc)=> doc.data()))));
        }
    },[roomId]);

  return (
    <div className='chat'>
        <div className="chat__header">
            <div className="chat__headerLeft">
                <h3 className='chat__channelName'>
                    <strong>#{roomDetails?.name}</strong>
                    <StarOutlineOutlinedIcon/>
                </h3>
            </div>
            <div className="chat__headerRight">
                <p>
                    <InfoOutlinedIcon/> Details
                </p>
            </div>
        </div>
        <div className="chat__messages">
            {roomMessages.map(({message, timestamp, username, userimage})=>(
                <Messages key={roomId} message={message} timestamp={timestamp} username={username} userimage={userimage}/>
            ))}
        </div>
        <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
    </div>
  );
}

export default Chat;
