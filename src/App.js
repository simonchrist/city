import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [apiResponse, allResponses] = useState([]);

  const getResponse = async () => {
    let cityname = document.getElementById("city").value;

    await axios
      .get('http://ctp-zip-api.herokuapp.com/city/' + cityname)
      .then(response => {
        console.log(response.data);
        allResponses(response.data);
      })
      .catch(error => {
        console.log(error.response.data.error);
      })
  }

  return (
    <div className="App">
      <h1 className='title'>City Search</h1>
      <h2>Enter City Name in Captitals</h2>
        <label htmlFor="city" className="input"><b>City Name:</b></label>
          <div>
            <input type="text" id="city" className="form" onChange={getResponse}/>
      </div>
        <div className='box1'><h1>Zipcodes in this City:</h1></div>
            <ul>
              {
                apiResponse.map((event, i) => {
                return event === "Nothing Found" ? <p key={i}>Nothing Found</p> :
                   <li key={i}>{event}</li>
                })
              }
            </ul>
        </div>
  );
}

export default App;