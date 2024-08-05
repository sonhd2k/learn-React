// Class compodent
// Function compodent
import React from "react";
import AddUserInfor from "./AddUserInfor";
import Dissplayinfor from "./Dissplayinfor";
class Myconpodent extends React.Component {

  state={
    listUsers:[
      {id:1,name:"Sơn" ,age:"23"},
      {id:2,name:"Nhung" ,age:"16"},
      {id:3,name:"Nam" ,age:"27"},
    ]
  }

  handleAddNewUser=(userObj)=>{
    this.setState({listUsers:[userObj,...this.state.listUsers]})

  }
  //JSX
   render(){
    // const myInfor=['a','b','c']
    return(
      <div>
     <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
     <br></br>
     {/* <Dissplayinfor  name="Sơn" age="23"></Dissplayinfor>
     <hr></hr>
     <Dissplayinfor  name={'Nhung'} age={23} myInfor={myInfor}></Dissplayinfor>
     <hr></hr> */}
     <Dissplayinfor listUsers={this.state.listUsers} ></Dissplayinfor>
      
      </div>

    );
   }
}
export default Myconpodent;