import React, { useEffect, useState } from 'react'
import Newsitem from '../newsitem/Newsitem'
import "./news.css"
import Spinner from "../spinner/Spinner"

export default function News({category,country}) {

    const [data,setData]=useState([]);
    const [loading,setLoading] =useState(false);

    
    
    useEffect(()=>{

        const url = `https://real-time-news-data.p.rapidapi.com/topic-headlines?topic=${category}&country=${country}&lang=en`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_API_ID,
                'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
            }
        };

        
       
        const fetchData =async()=>{
            
            try {
                setLoading(true);
                const response = await fetch(url, options);
                const result = await response.text();
                 const parsedData=JSON.parse(result);
                 setData(parsedData.data);
                 console.log(parsedData);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
            
            };
            
            fetchData();
    
},[category,country])



  return (
      <>
      <h3 className='heading' >News Monkey Top {category} Headlines</h3>
      {loading && <Spinner></Spinner>}
      
      <div className='cards'>

       {!loading && data.map((d,i)=><Newsitem key={i}  title={d.title} link={d.link} photo={d.photo_url} time={d.published_datetime_utc}  ></Newsitem>)}      
     

    </div>
      </>
      
  )

        }

