import React from 'react';
let v;

const WeatherSearch = (props) => {

    function handleChange (e) {
      v = e.target.value;
    }

    function  handleSubmit(e) {
      e.preventDefault();
      props.onSubmit(v);
  }
    
    
return(

    <form onSubmit={handleSubmit}>
      <div id="searchBox">
      <input 
      className="searchBar" 
      type="text" 
      placeholder="Search city..."
      onChange={handleChange}
     />  
     <input className="searchSub" type = "submit" value="Submit" id='searchId'/>
     </div>
      </form>

)
}

export default WeatherSearch