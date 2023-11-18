import React from 'react';
import '../SingleCard/SingleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


const SingleCard = ({ blog, handleReadTime, handleTittle }) => {
    // console.log(blog);
    const { Image, AuthorImage, AuthorName, PublishDate, ReadTime,BlogTitle, Tag } = blog;
    return (
        <>
            <div className="card m-3" >
                <img src={Image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex justify-content-start gap-3 align-items-center' >
                                <div>
                                    <img className='rounded-circle author-image' src={AuthorImage} alt="" />
                                </div>
                                <div>
                                    <h4>{AuthorName}</h4>
                                    <p>{PublishDate}</p>
                                </div>
                            </div>
                        <div className='d-flex align-items-center gap-3'>
                            <p>{ReadTime} min read</p>
                            <button onClick={()=>handleTittle(BlogTitle)}><FontAwesomeIcon icon={faBookmark} /></button>
                        </div>
                    </div>
                </div>
                    <h1 className="card-title">{BlogTitle}</h1>
                        <p className="card-text">{Tag}</p>
                        <a onClick={()=>handleReadTime(ReadTime)} href="#" className="">Mark as read</a>
                    </div>
            </div>
        </>
    );
};

export default SingleCard;