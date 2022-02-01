import React, {useRef} from 'react';

const Form = ({dispatch}) => {
        const catInput = useRef()
        const dogInput = useRef()
    const form = (e) => {
      e.preventDefault()
        e.target.reset()
    }
    
    const saveCat = () => {
      dispatch({type:"ADD_CAT",payload:{cat:catInput.current.value}})
    }
    const saveDog = () => {
      dispatch({type:"ADD_DOG",payload:{dog:dogInput.current.value}})
    }
    
    
    return (
        <div>
            <form onSubmit={form}>
                <input type="text" placeholder={'cat'} ref={catInput}/>
                <button onClick={saveCat}>DellC</button>
                
                <input type="text"placeholder={'dog'} ref={dogInput}/>
                <button onClick={saveDog}>DellD</button>
            </form>
        </div>
    );
};

export default Form;