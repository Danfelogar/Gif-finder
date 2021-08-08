import React, { useState } from 'react';
import { GitName } from './components/GitName';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { MianTitle } from './components/MianTitle';
import { NavBar } from './components/NavBar';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    return (
        <>
            < NavBar />
            <div className="wrapper-main">
            < MianTitle />
            <AddCategory  setCategories={ setCategories }/>
            <div className="separator" ></div>
            <ol className="list-name">
                {
                categories.map( category =>(
                    <GitName
                    key={category}
                    category={category}
                />))
                }
            </ol>
            <ol>
                {
                categories.map( category =>(
                    <GifGrid
                    key={ category }
                    category={ category }
                />))
                }
            </ol>
            </div>
        </>
    );
}


