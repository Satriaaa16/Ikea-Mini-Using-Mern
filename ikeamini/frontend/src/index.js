import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Beranda from './page/Beranda';
import Menu from './page/Menu';
import Tentang from './page/Tentang';
import Kontak from './page/Kontak';
import Login from './page/login';
import Produkbaru from './page/produkBaru';
import Signup from './page/signup';
import { store } from './redux/index';
import { Provider } from 'react-redux';
import Cart from './page/Cart';
import Likes from './page/like'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<App/>}>
        <Route index element={<Beranda/>}/>
        {/*<Route path='Menu' element={<Menu/>}/> */}
        <Route path='Menu/:filterby' element={<Menu/>}/> 
        <Route path='Tentang' element={<Tentang/>}/> 
        <Route path='Kontak' element={<Kontak/>}/> 
        <Route path='login' element={<Login/>}/> 
        <Route path='produkbaru' element={<Produkbaru/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='like' element={<Likes/>}/>
        
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
