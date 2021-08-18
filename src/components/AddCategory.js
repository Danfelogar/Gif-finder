import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch }from '@fortawesome/free-solid-svg-icons';
import { Formik } from "formik";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (elemt) =>{
        setInputValue( elemt.target.value );
    };

    const handleSubmit = (elemt) =>{
        elemt.preventDefault();//para prevenir el submit por defecto del nav. es decir por "refresh"
        // console.log('Submit hecho')
        //trim => para borrar espacios antes y despues del string
        if(inputValue.trim().length >= 3){
            setCategories( gifs => [inputValue, ...gifs]);
            setInputValue('');//para que no haga doble posteo y en respuesta al dar intro devulve vacio
        }
    }

    return (
        <form onSubmit= { handleSubmit }>
            <fieldset className="container-search">
                <Formik />
                <input
                placeholder="Search..."
                className="container-search-input"
                type="search"
                value= { inputValue }
                onChange= { handleInputChange }
                />
                <button
                type="submit"
                onSubmit= { handleSubmit }
                className="container-search-btn"><FontAwesomeIcon icon={ faSearch }/>
                </button>
            </fieldset>
            { inputValue.trim().length === 0 || inputValue.trim().length  > 2  || (<p className="flashing-text" >Remember that your search must include at least 3 characters. </p>)}
        </form>
    );
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired//en este caso a diferencia del "string" es una funsion por lo que usamos el termimo ".func"
}
