import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const News = () => {

    let {id}= useParams();

    let news = useLoaderData();

    return (
        <div>
            {
                news.map(n=> <NewsCard news={n} key={n._id}></NewsCard>)
            }
            
        </div>
    );
};

export default News;