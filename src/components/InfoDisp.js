import React from 'react';


export default function InfoDisp (props) {   
    const today = new Date();
    const date = `${today.getMonth() +1}/${today.getDate()}/${today.getYear() -100}`;
    const time = `${today.getHours()}:${today.getMinutes()}`;

        return(
            <div className='InfoDisp'>
                <h1 >{props.name.toUpperCase()}</h1>
                <h6><span id='wds1'>{date}</span> <span id='wds2'>{time}</span></h6>
            </div>
        )
        }
