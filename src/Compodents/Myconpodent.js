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
    this.setState({
      name:"Nhung",
      age:Math.floor((Math.random()*100)+1)
    })
  }

  handleMouseOver=(event)=>{
    console.log(event.pageX);
  }
   handleOnChange =(event)=>{
    this.setState({
      name:event.target.value
    })
    // console.log(event,event.target.value);

   }
   handleOnSumit=(event)=>{
    event.preventDefault();
    console.log(this.state);

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
        <button onClick={(event)=>{this.handleCick()}}>click</button>
       <form onSubmit={(event)=>{this.handleOnSumit(event)}}>
        <input type="text" onChange={(event)=>{this.handleOnChange(event)}}/>
        <button>Sumit</button>
       </form>
      </div>
      
      </>

    );
   }
}
export default Myconpodent;