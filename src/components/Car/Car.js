import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar} from "../../store";

const Car = ({car:{id,model,price,year}}) => {
     const dispatch = useDispatch()
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>{dispatch(deleteCar({id}))}} >DeleteCar</button>
        </div>
    );
};

export default Car;