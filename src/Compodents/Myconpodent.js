// Class compodent
// Function compodent
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import Dissplayinfor from "./Dissplayinfor";
function Myconpodent() {
 const [listUsers,setlistUsers] =useState([
  {id:1,name:"Sơn" ,age:"23"},
  {id:2,name:"Nhung" ,age:"16"},
  {id:3,name:"Nam" ,age:"27"},
])


 const handleAddNewUser=(userObj)=>{
    setlistUsers([userObj,...listUsers])

  }
  const handleDeleteUser = (userId) => {
    const listUsersClone = listUsers.filter((item) => item.id !== userId);
    setlistUsers(listUsersClone);
  };
  //JSX

    // const myInfor=['a','b','c']
    return(
      <div>
     <AddUserInfor handleAddNewUser={handleAddNewUser}></AddUserInfor>
     <br></br>
     {/* <Dissplayinfor  name="Sơn" age="23"></Dissplayinfor>
     <hr></hr>
     <Dissplayinfor  name={'Nhung'} age={23} myInfor={myInfor}></Dissplayinfor>
     <hr></hr> */}
     <Dissplayinfor listUsers={listUsers} handleDeleteUser={handleDeleteUser}></Dissplayinfor>
      
      </div>

    );
   }

export default Myconpodent;