import React from 'react'
import { useParams } from 'react-router-dom' 

 
function Detail(data) {

  const params = useParams();

  console.log("detail-params==>: ",Number(params.id));

  //데이터에서 빼 써야 됨
  console.log('detail--->:', data)
  
  return (
    <div className="home1">

    {
      data && data?.data?.map((item,i) => {  
        //console.log(item.area," / ",Number(params.id));
        return(
          
          (item.area === Number(params.id)) &&
          <div key={i} className='nation1'>
            <div className='na1'>
              <img src={item.flags.png}/>
            </div>
            <div className='na1'>
              <p className='font1'>{item.capital[0]} {item.translations.kor.common}</p>
              <p>population: {item.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>            
            </div>
          </div>
          


        )
      })
    }

</div>
  )

  
  
  
}

export default Detail