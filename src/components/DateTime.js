import React from 'react';


class DateTime extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className='DateTime'>
                <h2>Date</h2>
                <h2>Time</h2>
            </div>
        )
    }
}

export default DateTime