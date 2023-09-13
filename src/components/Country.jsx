import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country)
    const {name , flags ,population , area} = country
    const [visited , setVisited] = useState(false)

    const handleVisited =()=>{
        setVisited(!visited)
    }
   
    return (
        <div className='country'>
            <h3>{name.common}</h3>
          <img src={flags.png} alt="" />
          <p>Populations:{population}</p>
          <p>Area:{area}</p>
          <button onClick={handleVisited}>{ visited ? 'visited' : 'going'}</button> 
          {/* {
            visited && "i have visited this country"
          } */}
          {
            visited ? "i have visited this country" : 'i wanna visit this country'
          }
          
        
        
            
        </div>
    );
};

export default Country;