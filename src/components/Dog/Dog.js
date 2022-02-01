import React from 'react';

const Dog = ({dog:{id,name},dispatch}) => {
    return (
        <div>
            {name}
            {/*<button onClick={()=>dispatch({id})}>DELDOG</button>*/}
            <button onClick={()=>dispatch({type:'DEL_DOG', payload:{id}})}>DELDOG</button>

        </div>
    );
};

export default Dog;