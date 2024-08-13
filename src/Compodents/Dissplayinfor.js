/* eslint-disable jsx-a11y/alt-text */
import "./DisplayInfor.scss";
import React, { useEffect, useState } from 'react'

function Dissplayinfor(props) {
  const {listUsers}=props
  const [isShowHideListUser,setisShowHideListUser]=useState(true);
  const handleShowHideListUser=()=>{
    setisShowHideListUser(!isShowHideListUser)
  }
  console.log("render");
  useEffect(()=>{
    if(listUsers.length ===0){
      alert("Bạn đã xóa hết các phần tử")
    }
    console.log('useEffect');
  },[listUsers])
  return (
    <div className="Displayinfor">
      <div>
        <button onClick={()=>{handleShowHideListUser()}}> 
       
          {isShowHideListUser === true ? "Hide List User" :"Show List User"}
          </button>
      </div>
       {isShowHideListUser &&
        <>
          {listUsers?.map((item) => (
            <div key={item.id} className={+item.age > 18 ? "green" : "red"}>
              <div>Tên tôi là {item.name}</div>
              <div>Tuổi tôi là {item.age}</div>
              <button  onClick={()=>{props.handleDeleteUser(item.id)}}>Delete</button>
            </div>
          ))}
        </>
        }
      
        
      </div>
  )
}


export default Dissplayinfor;
