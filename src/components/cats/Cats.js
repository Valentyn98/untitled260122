import React from 'react';

const Cats = ({cats,removeCat}) => {
    return (
        <div>{cats.name}
            console.log(cats.id)
            <div><button onClick={()=>{
                removeCat({type:'delCat',id:cats.id})
            }}>Remove</button></div>
        </div>
    );
};

export default Cats;