import React from 'react';
import SlackLogo from './Images/slack-new-logo.svg'
import './Login.css';
import {auth, provider} from './firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error)=>{
            alert(error.message)
        });
    };
  return (
    <div className="login">
        <div className="login__container">
            <img src={SlackLogo} alt="" />
            <h1>Sign in to Cleaver Programmer HQ</h1>
            <p>cleaverprogrammer.slack.com</p>
            <button onClick={signIn}>Sign in With Google</button>
        </div>
    </div>
  );
}

export default Login;
