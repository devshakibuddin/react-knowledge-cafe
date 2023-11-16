import React from 'react';
import '../SingleCard/SingleCard.css';

const SingleCard = ({ blog }) => {
    console.log(blog);
    const { Image, AuthorImage, AuthorName, PublishDate, ReadTime,BlogTitle, Tag } = blog;
    return (
        <>
            <div className="card m-3" >
                <img src={Image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <div>
                        <div className='d-flex justify-content-between '>
                            <div className='d-flex justify-content-start gap-3' >
                                <div>
                                    <img className='rounded-circle author-image' src={AuthorImage} alt="" />
                                </div>
                                <div>
                                    <h4>{AuthorName}</h4>
                                    <p>{PublishDate}</p>
                                </div>
                            </div>
                        <div>
                            <p>{ReadTime}</p>
                        </div>
                        </div>
                </div>
                    <h1 className="card-title">{BlogTitle}</h1>
                        <p className="card-text">{Tag}</p>
                        <a href="#" className="">Mark as read</a>
                    </div>
            </div>
        </>
    );
};

export default SingleCard;