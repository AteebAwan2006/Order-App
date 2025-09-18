import logo from './logo.svg';
import './App.css';
import react from 'react';
import Header from './MyComponent/Header';
import Footer from './MyComponent/Footer';
import Customertext from './MyComponent/Customertext';
import React, { useState,useEffect } from 'react';


function App() {

  const [orders, setOrders] = useState([]);

  // Customer order
  const addOrder = (name,order,check1,check2,check3) => {
    setOrders([...orders, { name, order,check1,check2,check3 }]);
  }
  const dependency = 'hello'
  useEffect(() => {
 localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // console.log("I am adding a new  Oredr",orders);

 const savedOrder = JSON.parse(localStorage.getItem('orders'))
  console.log('localstorage orders',savedOrder)
  return (
    
    <>
    <Header title="Online Food"/>
    <Customertext onOrderSubmit={addOrder}/>
  {
  orders.map((orders) => (
    <div className='container' >
      <h1> Name:{orders.name} </h1>
      <p className='text-center'> {orders.order}</p>
      <h2>Extra Food</h2>
      {orders.check1 &&
       <p className='text-center'> Cold Drink</p>
      }
      {
        orders.check2 &&

       <p className='text-center'>Sauces</p>
      } 
      {
        orders.check3 &&

       <p className='text-center'>Fries</p>
      } 
      
       
      
      <hr />
    </div>
  ))
}
  
    <Footer/>
    </>
  );
}

export default App;
