import React from 'react';
import { useState } from "react";
import axios from "axios";

export default function AddBooks() {
  const [Data, setData]=useState({bookname:"",author:"",description:"",price:"",image:"",});
  const change = (e)=>{
    const{name,value}=e.target;
    setData({...Data, [name]:value});
  };
  const submit= async()=>{
    e.preventDefault();
await axios.post("http://localhost:1000/api/v1/add",Data).then((res)=> alert(res.data.message));
setData({
  bookname:"",author:"",description:"",price:"",image:"",
});
  };
  console.log(Data);
  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: '91vh' }}>
      <div className="container  p-4">
        <div className="mb-3">
          <form>
            <div className="mb-3 container">
              <label for="exampleInputEmail1" className="form-label text-white">
                Book Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="bookname"
                value={Data.bookname}
                onChange={change}
              />
            </div>

            <div className="mb-3 container">
              <label for="exampleInputEmail2" className="form-label text-white">
                Author
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                name="author"
                value={Data.author}
                onChange={change}
              />
            </div>

            <div className="mb-3 container">
              <label for="exampleInputEmail3" className="form-label text-white">
                Description
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                name="description"
                value={Data.description}
                onChange={change}
              />
            </div>

            <div className="mb-3 container">
              <label for="exampleInputEmail4" className="form-label text-white">
                image
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail4"
                aria-describedby="emailHelp"
                value={Data.image}
                name="image"

              />
            </div>

            <div className="mb-3 container">
              <label for="exampleInputEmail5" className="form-label text-white">
                Price
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail5"
                aria-describedby="emailHelp"
                value={Data.price}
                onChange={change}
                name="price"
              />
            </div>
            <button className="btn btn-success" onClick={submit}>Submit</button>
            
            {/* Add the closing form tag here */}
          </form>
        </div>
      </div>
    </div>
  );
}
