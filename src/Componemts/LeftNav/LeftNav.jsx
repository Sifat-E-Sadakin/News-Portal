import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {


    let [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=> setCategories(data))
    },[])
    //  console.log(categories[0]);

    return (
        <div>
            
            <div>
                <h4>All category</h4>
                {
                    categories.map(news=> <>

                    <Link key={news.id} className='text-decoration-none d-flex flex-column justify-content-start text-success my-3' to={`news/${news.id}`}>{news.name}</Link>
                    
                    </>)
                }
            </div>
            
        </div>
    );
};

export default LeftNav;