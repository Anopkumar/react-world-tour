import './Country.css'

const Country = ({country}) => {
    console.log(country)
    const {name , flags , coatOfArms} = country
   
    return (
        <div className='country'>
            <h3>Name:{name.common}</h3>
          <img src={flags.png} alt="" />
          <img src={coatOfArms.png} alt="" />
        
            
        </div>
    );
};

export default Country;