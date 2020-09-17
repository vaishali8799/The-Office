import React,{useState,useEffect} from 'react';
import Header from './components/ui/Header';
import axios  from 'axios';
import Quotegrid from './components/quotes/Quotegrid'
import Search from './components/ui/Search'


import './App.css';

const App=()=> {
  const  [items,setitems]=useState([])
    const [isLoading, setisLoading]=useState(true)
    
    useEffect(()=>{
      setisLoading(true)
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
      
            axios.get(proxyurl+`https://officeapi.dev/api/quotes/`)
            .then(res=>{
            console.log(res.data.data)
            setitems(res.data.data)
            setisLoading(false)}

            )
            .catch(err=>{
              console.log(err)
            })
            
        
    },[])
  return (
    <div className="container">
      <Header/>
      <Search/>

      <Quotegrid isLoading={isLoading} items={items}/>
      
    </div>
  );
}

export default App;
