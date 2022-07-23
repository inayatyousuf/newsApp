import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import '../App.css'

function NewsList({heading="ABC News", query='abc-news'}) {
    const [list , setList]= useState([])
    const [query2, setQuery2] = useState()
        useEffect(() => {
              fetch(`https://newsapi.org/v2/top-headlines?sources=${query}&apiKey=c0e4f4903c424e949e53622970e1b032`)
            .then(resp => resp.json())
              .then(res => setList(res))
    }, [query]) 
    
    const handleItem = (e) => {
      setQuery2(e.target.offsetParent.id)
    }
    
  return (
  <div className="d-flex"  >
    <div className='news__list__item flex-grow-1 w-50'>
      <h5 className='text-dark my-3 py-0'>{heading}</h5>
      {  list.articles &&
           list.articles.map((item,index) => (
            <div onClick={handleItem} key={index} id={item.title} className="inner__card card mb-3" style={{ cursor:'pointer'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.urlToImage} className="img-fluid rounded-start" style={{height:"100%"}} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fs-6">{item.title}</h5>
                  <p className="card-text"><small className="text-muted">{item.publishedAt}</small></p>
                </div>
              </div>
            </div>
          </div>
           
        ))
        
        }
    </div>
    <div className='more_info mw-50 w-50'>
      <NewsItem query = {query2}/>
    </div>
  </div>
  )
}

export default NewsList