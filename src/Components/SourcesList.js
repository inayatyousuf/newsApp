import React, { useContext, useState } from 'react'
import '../App.css'

import { NewsData } from '../App'
import NewsList from './NewsList'
function SourcesList() {
     const [newsHeading, setNewsHeading]= useState()
     const [query ,setQuery]  = useState()
    const data = useContext(NewsData)
   
    const handleClick =(e)=>{
      setQuery(e.target.id)
      setNewsHeading(e.target.textContent)
      console.log(e.target.author)
      
    }
  return (<>
    <div className='source__list p-0'>
         <h5 className='ps-3  my-3 pt-1'>Sources</h5>
        {  data.sources &&
           data.sources.map((item,index) => (
          
            <ul key={index}>
             <li onClick={handleClick} id={item.id} className="small"> {item.name} </li>
            </ul>
           
        ))
        
        }
    </div>
    <NewsList heading={newsHeading} query={query} />
    </>
  )
}

export default SourcesList