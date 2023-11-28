import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from "axios";
import React, {useEffect, useState} from 'react';


const App = ()=> {
  const [responseData, setResponseData] = useState(null);
  const{search} = window.location;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const server = "http://localhost:8080/chat?prompt=";
  const [query, setQuery] = useState("");

  //Parse the data response to be outputted to the screen
  const parseResponseData =(json) =>{
    return  (
      <div  >
        <h3>{json.title}</h3>
        <hr></hr>
        <p>Description: {json.description}</p>
        <p>Pay Range: ${json.payRangeLow} - ${json.payRangeHigh}</p>
        <p>Education Required: {json.yearsOfSchooling} years of schooling. {json.educationLevel}</p>
        <p>Job Security: {json.riskDescription}</p>
      </div>
    )
  }
  //Function used to make the call to the backend for both 
  //button press and pressing 'enter' key
  const useTestSubmit = async event => {
    // prevents automatic refresh after first query
    event.preventDefault();
    //obtain the web address
    const web = server + query;
    setLoading(true);
    try {
      const response = await axios.get(web);
      // Successful response
      setResponseData(parseResponseData(response.data));
      console.log(response);
    }
    catch (error)
    {
      // Errored response
      setError('Error fetching data:' + error.message);
      console.error('Error fetching data:', error);
    } finally{
      setLoading(false);
    }
    
  }
  //final html return
  return (
  
    <div className="App"> 
      <Header /> 
      <SearchBar value={query} onChange= {setQuery} onSubmit={useTestSubmit}/>
      <button value={query} onChange= {setQuery} onClick={useTestSubmit}>Search</button>
       <header className="App-header">
       
        {loading ? (
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="loader">
            </div>
          </div>
          
          ) : (
            responseData && <div>{responseData}</div>
          )}
       
      </header> 
      <Footer/>
    </div>  
    
  );
}



export default App;

