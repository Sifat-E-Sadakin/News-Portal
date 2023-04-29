import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = (props) => {

    // console.log(props.news);

    let { image_url, details, title, _id } = props.news

    return (
        <div>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                       {details.length <250? <>{details}</>:<>{details.slice(0,250)}...<Link to={`news/${_id}`}>Read More</Link></>}
                       
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>

        </div>
    );
};

export default NewsCard;