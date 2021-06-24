import React from 'react';
let v;

const WeatherSearch = (props) => {

    function handleChange (e) {
      v = e.target.value;
    }
    
    function  handleSubmit(e) {
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
     <button className="searchSub" type = "submit" value="Submit" id='searchId'/>
     
      </form>
</div>
)
}

export default WeatherSearch