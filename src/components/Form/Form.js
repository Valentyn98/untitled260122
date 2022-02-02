import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCar} from "../../store";

const Form = () => {
    const {handleSubmit, register,reset} = useForm()
        const dispatch = useDispatch()
    const submit = (data) => {
        dispatch(addCar({data}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <lebel>Model: <input type="text"{...register('model')}/></lebel>
            <label>Price: <input type="text"{...register('price')}/></label>
            <label>Year: <input type="text"{...register('year')}/></label>
            <button>AddCar</button>
        </form>
    );
};

export default Form;