import React from 'react';
import Rating from './Rating';

function DriverCard(props) {



    return (
        <div>
            <div>
                <img src={props.img} />
            </div>

            <div>
                <span>{props.name}</span>
                <Rating>{props.rating}</Rating>
                <span>{props.car.model} - {props.car.licensePlate}</span>
            </div>
        </div>
    );
}

export default DriverCard;