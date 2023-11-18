import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Home = ({handleReadTime,handleTittle}) => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <>
            <div className="blogs-container">
                {
                    blogs.map((blog)=> <SingleCard handleReadTime={handleReadTime} handleTittle={handleTittle} blog={blog}></SingleCard>)
                }
            </div>
        </>
    );
};

export default Home;