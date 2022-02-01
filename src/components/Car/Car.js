import React from 'react';

const Car = ({car:{id,model,price,year},getCarId}) => {
    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
            <div>
                <div>
                    <div>Model:{model}</div>
                    <div>Price:{price}</div>
                    <div>Year:{year}</div>
                </div>
                <button onClick={()=>getCarId(id)}>Delete</button>
            </div>
        </div>
    );
};

export default Car;