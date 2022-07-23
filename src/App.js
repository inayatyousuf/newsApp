import React,{ useState,useEffect } from 'react';
import './App.css';
import SourcesList from './Components/SourcesList';

export const NewsData = React.createContext()
function App() {
  const [data, setData]= useState([])
  useEffect(() => {
          
    fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=c0e4f4903c424e949e53622970e1b032')
      .then(response => response.json())
      .then(result => setData(result))
  }, [])
  return (
    <div className="App">
          <NewsData.Provider  value ={data}>
             <SourcesList />
        </NewsData.Provider>
    

    </div>
  );
}

export default App;
