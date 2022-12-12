import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// get data from mongodb database
const App = () => {
  const [userInfo, setuserInfo] = useState('');
  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await axios.get("http://localhost:5000/post");
      setuserInfo(data);
      console.log(data)
    }
    fetchData();
  },[])
  return (
    <div className = "App">
    <h1> Fetch data from an api in react </h1>  {
        userInfo && userInfo?.data.map((item) => ( 
        <main>
          <div>
          <ol key = { item._id } >
            <ul>User_Name: { item.name }</ul> 
            <ul>User_Email: { item.email } </ul>
            <h1> how are you</h1>
            </ol>
          </div>
        </main>
        ))
    }
</div>
);
}


export default App;