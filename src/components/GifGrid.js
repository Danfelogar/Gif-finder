import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GitGridItem } from './GitGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    console.log(images)


    return (
        <>
            <h2  key={category}  className="name-search">{ category }</h2>

            {loading && <p className="loading-text animate__flash">loading</p> }
            {/* no usamos el "?" porque es una sola propiedad la que vamos a evaluar por eso usamos "and" para que sea extricto con el true o false */}
            <div className="card-grid">
            {
                images.map( (img) =>(
                <GitGridItem
                key={img.id}
                { ...img }
                />
                ) )
            }
        </div>
        </>
    )
}
