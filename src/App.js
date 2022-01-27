
import './App.css';
import {useReducer} from "react";


const reducer = (state ,action) =>{
switch (action.type){
    case 'inc':
        return{...state,count:state.count +1}

    case 'dec':
        return{...state,count:state.count -1}
    case 'res':
        return{...state,count:action.payload}
    case 'incc':
        return{...state,callCount:state.callCount +1}
    case 'decc':
        return{...state,callCount:state.callCount -1}
    case 'ress':
        return{...state,callCount:action.payload}
    case 'inccc':
        return{...state,callCountTwo:state.callCountTwo +1}
    case 'deccc':
        return{...state,callCountTwo:state.callCountTwo -1}
    case 'resss':
        return{...state,callCountTwo:action.payload}

    default:
        return state
}

}

function App() {
    const [state, dispatche] = useReducer(reducer , {count: 0, callCount:0,callCountTwo:0})
  return (
    <div className="App">
        <div>Count: {state.count}</div>
        <button onClick={()=>dispatche({type:'inc'})}>Inc</button>
        <button onClick={()=>dispatche({type:'dec'})}>Dec</button>
        <button onClick={()=>dispatche({type: 'res', payload:0})}>Res</button>


        <div>callCount: {state.callCount}</div>
        <button onClick={()=>dispatche({type:'incc'})}>Inc</button>
        <button onClick={()=>dispatche({type:'decc'})}>Dec</button>
        <button onClick={()=>dispatche({type: 'ress', payload:0})}>Res</button>

        <div>callCountTwo: {state.callCountTwo}</div>
        <button onClick={()=>dispatche({type:'inccc'})}>Inc</button>
        <button onClick={()=>dispatche({type:'deccc'})}>Dec</button>
        <button onClick={()=>dispatche({type: 'resss', payload:0})}>Res</button>

    </div>
  );
}

export default App;
