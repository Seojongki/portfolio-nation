import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './App.css'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Navbar from './components/Navbar'


function App() {

  const [data, setData] = useState(null); // 불러올 데이터
  const [name, setName] = useState('') //input은 무조건 문자임
  

  const API_URL = `https://restcountries.com/v3.1/independent?status=true`;
  const API_URL2 = `https://restcountries.com/v3.1/name/${name}`;
  

  const fetData = (name) => {
    console.log("검색:",name);
    fetch(name?API_URL2:API_URL)
      .then(res => res.json())
      .then(data => {
        console.log("app:",data);
        setData(data);
      })
  }  

  // 시작할 때만 실행됨
  useEffect(() => {
    fetData('');
  }, []);


  //입력함수
  const handleLocationChange = (e) => {    
    setName(e.target.value);
    console.log(e.target.value);
  }

  //검색 버튼 눌렀을 때
  const handleSearch = (e) => {
    //전송 이벤트 취소(기본 이벤트)
    e.preventDefault();

    console.log('검색 호출');
    //날씨 데이터 요청
    fetData(name);
    setName('');
  }


  const [dark, setDark] = useState(false);



  return (
    <BrowserRouter>
    <Navbar dark={dark} setDark={setDark}/>
    {/* <button onClick={fetData}>요청</button> */}
    
    <div className='search'>
        <input type="search" 
          value={name}
          onChange={handleLocationChange}
        />
        <button
          onClick={handleSearch}
        >나라검색</button>
      </div>

    <Routes>
      <Route 
        path='/'   
        element={<Home element={data}  dark={dark}/>}
      />
      <Route 
        path='/detail/:id'      
        element={<Detail data={data}/>} 
      />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
