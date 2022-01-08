import React from 'react'
import "./Logout.css";

const Logout = () => {
    return (
        <div>
            <h1>Welcome <span className='user__name'>Sunil</span></h1>
            <button className='logout__btn'>Logout</button>
        </div>
    )
}

export default Logout
