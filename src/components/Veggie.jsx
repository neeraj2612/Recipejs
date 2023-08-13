import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
function Veggie() {
  const[Veggie, setVeggie] = useState([]);
  useEffect(()=>{
    getVeggie();
  },[])
  const getVeggie = async()=>{
    const check = localStorage.getItem('Veggie');
    if(check){
      setVeggie(JSON.parse(check));
    }
    else{
      const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=ab28ec7a962c424b92cdbfbb3f08c9ac&number=15&tags=vegetarian`);
    const data = await api.json();
    localStorage.setItem('Veggie',JSON.stringify(data.recipes))
    console.log(data);
    setVeggie(data.recipes)
    }
    
  } 
  


  return (
    <div className='mx-52 rounded-lg '>
      <h2 className='text-center my-5 font-semibold text-2xl'>Our Vegetarian Picks</h2>
    <Splide options={{
      perPage: 4,
      gap: "1rem",
      drag:'free',
      pagination: false,
      arrows: false }} >  
       {Veggie.map((recipes)=>{
        return(                  
            <SplideSlide key={recipes.id}>
          <div key={recipes.id}>  <Link to={'/recipe/'+recipes.id}>
          <img src={recipes.image} alt='im' className='rounded-2xl bg-cover shadow-xl'/>
           <p className='text-center'>{recipes.title}</p></Link>
          </div>
            </SplideSlide>
        );
      })} </Splide>
    </div>
  )
}



export default Veggie
