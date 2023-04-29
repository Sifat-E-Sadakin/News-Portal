import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const NewsDetails = () => {

    let news = useLoaderData();
    let {image_url, title, details, category_id}= news;

    
    return (
        <div>
            <Card style={{}}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/news/${category_id}`}> <Button variant="primary">Go somewhere</Button>
                    </Link>
                  
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsDetails;