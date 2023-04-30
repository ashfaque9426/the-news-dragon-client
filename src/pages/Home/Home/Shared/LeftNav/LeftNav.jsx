import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error.message));
    }, []);

    return (
        <div>
            <h4>Left Nav</h4>
           <div className='ps-4 pt-3'>
                {
                    categories.map(category => <p key={category.id}><Link className='text-decoration-none text-black fw-semibold' to={`/category/${category.id}`}>{category.name}</Link></p>)
                }
           </div>
        </div>
    );
};

export default LeftNav;