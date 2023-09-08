import React, { useEffect, useState } from 'react'
import Newsitem from '../newsitem/Newsitem'
import "./news.css"
import Spinner from "../spinner/Spinner"

export default function News({category,country}) {

    const [data,setData]=useState([]);
    const [loading,setLoading] =useState(false);

    
    
    useEffect(()=>{

        let url = `https://newsi-api.p.rapidapi.com/api/category?category=${category}&language=en&country=${country}&sort=top&page=1&limit=20`;
        setLoading(true)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_ID,
                'X-RapidAPI-Host': 'newsi-api.p.rapidapi.com'
            }
        }    
        
        const fetchData =async()=>{
            
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result)
                setLoading(false)
                
            } catch (error) {
                console.error(error); }
            };
            
            fetchData();
    
},[category,country])



  return (
      <>
      <h3 className='heading' >News Monkey Top {category} Headlines</h3>
      {loading && <Spinner></Spinner>}
      <div className='cards'>

       {!loading && data.map((d)=><Newsitem key={d._id} source={d.sourceName} title={d.title} link={d.link} photo={d.image} time={d.publishedAt}  ></Newsitem>)}      
     
    </div>
      </>
      
  )

        }

