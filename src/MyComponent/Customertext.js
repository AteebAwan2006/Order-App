import React, { useState } from 'react'

const Customertext = ({ onOrderSubmit }) => {

  const[name,setName]=useState("");
  const[order,setOrder]=useState("");
  const handleSubmit=(e)=>{
e.preventDefault();
if(!name || !order ){
    alert("Name or Order can not be Blank");
    return; 
}
{
onOrderSubmit(name, order,check1,check2,check3);
setName("");   
setOrder("");
setCheck1("");
setCheck2("");
setCheck3("");
}
  }
   const[check1,setCheck1]=useState("");
   const[check2,setCheck2]=useState("");
   const[check3,setCheck3]=useState("");

  return (
    <form onSubmit={handleSubmit} >
  <div className="container mb-3">
    <h1 className='text-center my-4'>Order Your Favourite Food</h1>
    <label htmlFor="exampleInputEmail1" className="form-label"> Customer Name </label>
    <input type="text" value={name}  onChange={(e) => setName(e.target.value) }  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

    <div className=" container form-floating ">
        <p>Order Food</p>
  <textarea className="form-control" value={order}  onChange={(e) => setOrder(e.target.value)} placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
</div>      
<div className='container'>
<p className='my-3'>Extra Items</p>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" value={check1}  onChange={(e) => setCheck1(e.target.checked) }  id="checkDefault" />
  <label className="form-check-label " htmlFor="checkDefault">
    Cold Drink
  </label>
</div>
<div className="form-check form-check-inline ">
  <input className="form-check-input" type="checkbox" value={check2} onChange={(e) => setCheck2(e.target.checked) } id="checkChecked"/>
  <label className="form-check-label" htmlFor="checkChecked">
    Sauces
  </label>
</div>  
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" value={check3}   onChange={(e) => setCheck3(e.target.checked) } id="checkChecked"/>
  <label className="form-check-label" htmlFor="checkChecked">
    Fries
  </label>
</div>
</div>
<div className='container my-5'>

  <button type="submit" className="btn btn-success ">ORDER</button>
</div>
</form>
  )
}

export default Customertext
