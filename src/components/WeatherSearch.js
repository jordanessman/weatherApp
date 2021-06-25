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
<div className="searchBox">
    <form onSubmit={handleSubmit}>
      <input 
      className="searchBar" 
      type="text" 
      placeholder="Search city..."
      onChange={handleChange}
     />  
     <input className="searchSub" type = "submit" value="Submit" id='searchId'/>
     
      </form>
</div>
)
}

export default WeatherSearch