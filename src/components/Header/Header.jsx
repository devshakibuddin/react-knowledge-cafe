import React from 'react';
import Photo from '../../../public/vite.svg'

const Header = () => {
    return (
        <div>
            <nav class="d-flex justify-content-between ">
                <div>
                    <a class="fw-bold text-decoration-none" href="#">Knowledge Cafe</a>
                </div>
                    <div>
                        <img  src={Photo} alt="" />
                    </div>
            </nav>
            <hr />
        </div>
    );
};

export default Header;