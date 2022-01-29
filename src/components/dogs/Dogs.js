import React from 'react';

const Dogs = ({dogs,removeDog}) => {
    return (
        <div>
            {dogs.name}

        <div><button onClick={()=>{
            console.log(dogs.id)
            removeDog({type:'delDog',id:dogs.id})
        }}>Remove</button></div>
        </div>
    );
};
export default Dogs;