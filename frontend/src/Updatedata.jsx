import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Updatedata() {
    const [name,setname]=useState("");
    const [price,setprice]=useState("");
    const [category,setcategory]=useState("");
    const [companyname,setcompany]=useState("");
    const [error,seterror]=useState(false);
    const navigate=useNavigate();
    const params=useParams();
    useEffect(()=>{
        getdata();
    },[])

    const getdata = async()=>{
      let result = await fetch(`http://localhost:5000/products/${params.id}`);
      result = await result.json();
      setname(result.name)
      setprice(result.price)
      setcategory(result.category)
      setcompany(result.companyname)
    }

    const submitdata = async()=>{
      let result =fetch(`http://localhost:5000/products/${params.id}`,{
        method:"put",
        body:JSON.stringify({name,price,category,companyname}),
        headers:{'Content-type':"application/json"}
    });
    result = await (await result).json
    if(result){
      navigate("/")
    }
    else{
      alert("no result found");
    }
    }
  return (
    <div className='signup'>
      <h1>update product</h1>
      <input 
        type="text"
        placeholder='Enter name'
        value={name}
        onChange={(event)=>setname(event.target.value)}
      />   
      <input 
        type="text"
        placeholder='Enter price'
        value={price}
        onChange={(event)=>setprice(event.target.value)}
      />
      <input 
        type="text"
        placeholder='Enter category'
        value={category}
        onChange={(event)=>setcategory(event.target.value)}
      />
      <input 
        type="text"
        placeholder='Enter company'
        value={companyname}
        onChange={(event)=>setcompany(event.target.value)}
      />

      <button type='button' onClick={submitdata}>
        update
      </button>
    </div>
  )
}

export default Updatedata
