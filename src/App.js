
import './App.css';
import {useReducer, useState} from "react";
import formReducer from "./reducer/formReducer";
import Dogs from "./components/dogs/Dogs";
import Cats from "./components/cats/Cats";

const initialFormState = {
    dogs:[],
    cats:[],
    dog:'',
    cat:''
};
function App () {
    const [state,dispatch] = useReducer(formReducer,initialFormState)
    const[count, setCount] = useState(0)

    console.log(state);
    const handleTextChange = (e) => {
        dispatch({
            type:'handle input text',
            field: e.target.name,
            payload: e.target.value
        })
    }
    const click = (e) => {
        e.preventDefault()
    }
    return (
    <div className="App">
        <form onSubmit={click}>
            <input type="text"name={'dog'} value={state.dog} onChange={handleTextChange}/>
            <button onClick={()=>dispatch({type:'addDog'})}>SETDOG</button>
            <input type="text"name={'cat'} value={state.cat} onChange={handleTextChange}/>
            <button onClick={()=>dispatch({type:'addCat'})}>SETCAT</button>
        </form>
        <div>
            { state.dogs.length !== 0 &&
                state.dogs.map(dogs =>
                <Dogs removeDog={dispatch} key={dogs.id} dogs={dogs} />)}
        </div>
        <div>
            {state.cats.map(value => <div>
                {value}
            </div>)}
        </div>
    </div>
  );
}

export default App;
