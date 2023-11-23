import React, { useEffect, useState } from 'react';

const SideCard = ({readTime, tittle}) => {
    // console.log(tittle);
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
            <h5 className='card p-2'>{tittle}</h5>
        </div>
       </>
    );
};

export default SideCard;