


export const getGifs =async(category)=>{

    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=wlYdvxa0YojRWR1U4iN54IqJ7MO5mr4Q`;//"encodeURI()"para evitar espacios y cosas que se nos escapa

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs =data.map(img =>{
        return{
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })

    return gifs;
}
//regresa una promera que devuelve  o recolecta todo lo que esta en el primer return