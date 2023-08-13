import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
    let params = useParams();
    const[details , setDetails] = useState({});
    const[activeTab, setActiveTab] = useState('Summary')
    const fecthDetails = async()=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=ab28ec7a962c424b92cdbfbb3f08c9ac`);
        const deatilsData = await data.json();
        setDetails(deatilsData);
        console.log(deatilsData)  ;      
    };
    useEffect(()=>{
        fecthDetails();
    },[params.name])
  return (
    <div className='flex  mx-72 my-20'>
      <div className='mr-14'>
        <h2 className='text-center mb-5'>{details.title}</h2>
        <img src={details.image} className='h-80 w-96 rounded-xl shadow-xl ' alt='{details.title'/>
      </div>
      <div className=' p-5'>
      <button onClick={()=> setActiveTab('Summary')}  className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
    activeTab === 'Summary' ? 'bg-metal text-white' : ''
  }`}>
             Summary
        </button>
      <button  onClick={()=> setActiveTab('Instructions')}  className={`bg-white hover:bg-gray-100 text-gray-800 mx-5 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
    activeTab === 'Instructions' ? 'bg-metal text-white' : ''
  }`}>
             Instructions
        </button>
        <button
  onClick={() => setActiveTab('Ingredients')}
  className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
    activeTab === 'Ingredients' ? 'bg-metal text-white' : ''
  }`}
>
  Ingredients
</button>

        <div className=" w-96 mt-5">
     

      
       
       {activeTab ==='Summary' &&( <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>)}
       {activeTab ==='Instructions' &&(       <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
)}
       {activeTab ==='Ingredients' &&( <ul>
        {details.extendedIngredients.map((ingredients )=>{
            return(
                <li key={ingredients.i}>{ingredients.original}</li>
            );
        })}
       </ul>)}

    </div>
        
      </div>
    </div>
  )
}

export default Recipe
