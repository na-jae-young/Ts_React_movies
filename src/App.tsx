/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './conponent/Movie'
import { monitorEventLoopDelay } from 'perf_hooks';
import Home from './routes/home'
import Detail from './routes/Detail'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
/* Routes 는 Route(url)를 찾아 component를 randering 함  

*/
function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


/* 
REACT ROUTER
페이지 전환 
npm install react-router-dom

Hompage  배포 
결과물을 github pages 에 업로드 하기 
npm install gh-pages

package.json 의 
script 의 
deploy = "gh-pages -d build"
predeploy = "npm run build"  추가 

제일 하단에 
"homepage" : "https://najaeyoung.github.io/react_movies" 유저이름.깃허브.io.레파지토리
 */