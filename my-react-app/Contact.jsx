import React, { useState } from 'react'

const Contact = () => {
  const [data,setData ]= useState({
    Fullname :"",
    phone : "",
    Email  :"",
    Message :"",

  })

  const InputEvent =(event) =>{
    const {name,value}= event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name]: value ,
      };
 
    });
  };


const formSubmit = (e)=> {
  e.preventDefault();
  alert(`my name is ${data.Fullname}.my mobile number is ${data.phone} and email is ${data.Email},here is what i want to say ${data.Message}`
  );
};



  return (
    <>
    <div className='my-5'>
      <h1 className='text-center'>Contact us</h1>

    </div>
    <div className='container contact-div'>
      <div className='row'>
    <div className='col-md-6 col-10 mx-auto'>
<form onSubmit={formSubmit}> 
  <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">FullName</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="Fullname" value={data.Fullname} onChange={InputEvent} placeholder="enter yor name" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">phone</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent}  placeholder="mobile no" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email </label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="Email" value={data.Email} onChange={InputEvent} placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"name="Message" value={data.Message} onChange={InputEvent}  ></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>

</form>
    </div>
      </div>
    </div>
    </>
  )
}

export default Contact