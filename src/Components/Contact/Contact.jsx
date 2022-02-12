import React from 'react'
import './Contact.scss'
import { useEffect, useState } from "react";
import { TextField, Button } from '@mui/material';
export default function Contact(){


    const [message,setMessage] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true);
    }

    return(
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <TextField type="text" placeholder="Email"></TextField>
                    <TextField placeholder="Message"></TextField>
                    <Button type="submit">Send</Button>
                    {message && <span>Thank you, I will reply as soon as possible</span>}
                </form>
            </div>
        </div>
    )

}
