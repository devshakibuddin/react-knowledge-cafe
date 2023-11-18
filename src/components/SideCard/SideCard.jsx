import React, { useEffect, useState } from 'react';

const SideCard = ({readTime}) => {
    const [time,setTime] = useState(readTime);

    useEffect(()=>{
        const getTimeFromStorage = localStorage.getItem("readTime");
        setTime(getTimeFromStorage);
    },[readTime])

    
    return (
       <>
         <div className='my-5 p-2 card '>
            <h4>Spent time on read : {time} min </h4>
        </div>
        <div className='card p-3'>
            <h3>Bookmarked Blogs : </h3>
        </div>
       </>
    );
};

export default SideCard;