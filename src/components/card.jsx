import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <img class="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">Recipe Name</h5>
                <p className="card-text">Some info about recipe...</p>
                <a href="#" className="btn btn-primary">Go somewhere...</a>
            </div>
        </div>
    );
};

export default Card;