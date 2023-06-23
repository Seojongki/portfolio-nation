import React from 'react'
import { Link } from 'react-router-dom';

function Home({element, ...props}) {
  //console.log('home: ', data);
  //const totalCount = data?.response?.body?.totalCount;
  // console.log('totalCount= ', totalCount);
  console.log("home====>: ",element)
  const dark = props;
  console.log("home====>: ",dark)

  return (
    <div className={ dark === true ? "home darkmode" : "home" }>      
    
    {
      element && element?.map((item,i) => {  
        return(
          <div key={i} className='nation'>
            <div className='flag'>
              <img src={item.flags.png}/>
            </div>
            <p className='font1'>{item.capital[0]} {item.translations.kor.common}</p>
            <p>population: {item.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            
            <p></p>
            <Link to={`detail/${item.area}`}>자세히</Link>
          </div>
        )
      })
    }

</div>
  )
}

export default Home