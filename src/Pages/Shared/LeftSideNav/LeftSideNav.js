import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/news-categories';
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <div className='mt-3'>
            <h4>All Category</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div >

    );
};

export default LeftSideNav;