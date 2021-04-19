import React from 'react';

function CreditCard(props) {
    let img = ""
    const container = {
        backgroundColor : props.bgColor

    }
    if (props.type === "Visa"){ img = "./../public/img/visa.png"}else {
        img = "./../public/img/master-card.svg"
    }
    return (
        <div className="container cc " style={container}>
        <div>
            <img src={img} />
        </div>
        <div>{props.number}</div>
    <div>{props.expirationMonth}/{props.expirationYear}<span>{props.bank}</span></div>
       
        
        <div>{props.owner}</div>
        <div>{props.bgColor}</div>
        <div>{props.color}</div>
            
        </div>

    );
}

export default CreditCard;