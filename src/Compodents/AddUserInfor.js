
import React, { useState } from 'react'

function AddUserInfor(props){

  const [infor,setinfor]=useState({
    name:'',
    address:'Hà Nội',
    age:""
  })
 
 const handleCick=(event)=>{
    console.log("click me");
    console.log("Tên tôi là",infor);
    setinfor({
      name:"Nhung",
      age:Math.floor((Math.random()*100)+1)
    })
  }

 const handleMouseOver=(event)=>{
    console.log(event.pageX);
  }
  const handleOnChangeName =(event)=>{
    setinfor({
      name:event.target.value
    })
    // console.log(event,event.target.value);

   }
   const handleOnChangeAge =(event)=>{
    setinfor({
      age:event.target.value
    })
    // console.log(event,event.target.value);

   }
   const handleOnSumit=(event)=>{
    event.preventDefault();
    console.log(infor);
    props.handleAddNewUser({
      id:Math.floor((Math.random()*100)+1)+"-random",
      name:infor.name ,
      age:infor.age
    })

   }
    return(   
      <div>
      Tên tôi là {infor.name},
      Địa chỉ của tôi là {infor.address},
      Tuổi tôi là {infor.age}
      <button onMouseOver={handleMouseOver}> Hover me</button>
      <button onClick={(event)=>{handleCick()}}>click</button>
      <form onSubmit={(event)=>{handleOnSumit(event)}}>
      <label>Your name</label>
      <input type="text" value={infor.name} onChange={(event)=>{handleOnChangeName(event)}}/>
      <label>Your age</label>
      <input type="text" value={infor.age} onChange={(event)=>{handleOnChangeAge(event)}}/>
      <button>Sumit</button>
     </form>
    </div>
    
    )
  }


export default AddUserInfor