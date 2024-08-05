// Class compodent
// Function compodent
import React from "react";
import UserInfor from "./UserInfor";
import Dissplayinfor from "./Dissplayinfor";
class Myconpodent extends React.Component {

  state={
    listUsers:[
      {id:1,name:"Sơn" ,age:"23"},
      {id:2,name:"Nhung" ,age:"23"},
      {id:3,name:"Nam" ,age:"27"},
    ]
  }
  //JSX
   render(){
    const myInfor=['a','b','c']
    return(
      <div>
     <UserInfor></UserInfor>
     <br></br>
     <Dissplayinfor  name="Sơn" age="23"></Dissplayinfor>
     <hr></hr>
     <Dissplayinfor  name={'Nhung'} age={23} myInfor={myInfor}></Dissplayinfor>
     <hr></hr>
     <Dissplayinfor listUsers={this.state.listUsers}></Dissplayinfor>
      
      </div>

    );
   }
}
export default Myconpodent;