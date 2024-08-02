// Class compodent
// Function compodent
import React from "react";
class Myconpodent extends React.Component {
  state={
    name:'Sơn',
    address:'Hà Nội',
    age:23
  };
  handleCick=(event)=>{
    console.log("click me");
    console.log("Tên tôi là",this.state.name);
  }

  handleMouseOver=(event)=>{
    console.log(event.pageX);
  }
  //JSX
   render(){
    return(
      <>
      <div>
        
        Tên tôi là {this.state.name},
        Địa chỉ của tôi là {this.state.address},
        Tuổi tôi là {this.state.age}
        <button onMouseOver={this.handleMouseOver}> Hover me</button>
        <button onClick={this.handleCick}>click</button>
      </div>
      
      </>

    );
   }
}
export default Myconpodent;