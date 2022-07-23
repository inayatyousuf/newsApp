import React, {useState, useEffect} from 'react'
import '../App.css'
function NewsItem({query="abc-news"}) {
    
    const [listItem , setListItem]= useState([])
    const [color, setColor] = useState('black')
        useEffect(() => {
              fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=c0e4f4903c424e949e53622970e1b032`)
            .then(respp => respp.json())
              .then(ress => setListItem(ress))
    }, [query]) 
  return (
    <div className='items'>
      {
      listItem.articles && listItem.articles[0] ?
      <div className="card p-4" style={{ height:"100vh"}}>
                <h6>{listItem.articles[0].title} <i onClick={()=>{setColor('gold')}} className="fa-solid fa-star" style={{color:color}}></i></h6>
             <img src={listItem.articles[0].urlToImage} className="card-img-top" alt="No Photograph" />
              <div className="card-body">
                <p className="card-text">{"Author: " + listItem.articles[0].author}</p>
                <p className="card-text small">{listItem.articles[0].description}</p>
              </div>
        </div>
        :  <div className="card p-4" style={{ height:"100vh"}}>No data found</div>
      }
    </div>)}

export default NewsItem