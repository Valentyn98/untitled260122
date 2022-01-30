import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar} from "../../store";

const Car = ({car:{id, model, price,year}}) => {
     const dispatch = useDispatch()
    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', margin:'20px'}}>
            <div>
                <div>ModelL: {model}</div>
                <div>PriceE: {price}</div>
                <div>YearR: {year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {Car};