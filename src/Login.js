import { Button } from '@mui/material';
import React from 'react'
import "./Login.css"
import {authorization, provider, signInWithPopup} from "./firebase"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [{}, dispatch] = useStateValue();     //[state, dispatch]  => dispatch is like a gun put whatever the data load is and shoot it at the data layer to update the data layer

    const signIn = ()=>{
        console.log("knock knock")

        signInWithPopup(authorization, provider).then((result)=>{
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).cath((error)=>{
            alert(error.message)
        })
    }

  return (
    <div className="login">
        <h1> Login Required</h1>

        <div className="login__container">
            <div className="login__text">
                <h1> Welcome to Jayant's chat app</h1>
            </div>

        <Button onClick={signIn}>
            Sign in with google
        </Button>

        </div>
    </div>
  )
}

export default Login;