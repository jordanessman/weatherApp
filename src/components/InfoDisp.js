import React from 'react';


export default function InfoDisp (props) {   
    const today = new Date();
    const date = `${today.getMonth() +1}/${today.getDate()}/${today.getYear() -100}`;
    const time = `${today.getHours()}:${today.getMinutes()}`;

        return(
            <div className='InfoDisp'>
                <h1 >{props.name}</h1>
                <h2>{date}</h2>
                <h2>{time}</h2>
            </div>
        )
        }
