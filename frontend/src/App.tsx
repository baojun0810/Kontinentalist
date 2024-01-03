import React from 'react';
import Homepage from './page/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style';
import PostManage from './page/postManage';
import Header from './common/header';

function App() {

  return (
    <BrowserRouter>
        <GlobalStyle/>
            <Routes>
                <Route element={<Header/>}>
                    <Route element={<Homepage/>} path='/'></Route>
                    <Route element={<PostManage/>} path='/managePost'></Route>
                </Route>
            </Routes>
    </BrowserRouter>
  );
}

export default App;
