
import React from 'react'

class UserInfor extends React.Component{
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
   handleOnChangeName =(event)=>{
    this.setState({
      name:event.target.value
    })
    // console.log(event,event.target.value);

   }
   handleOnChangeAge =(event)=>{
    this.setState({
      age:event.target.value
    })
    // console.log(event,event.target.value);

   }
   handleOnSumit=(event)=>{
    event.preventDefault();
    console.log(this.state);

   }
  
  render(){
    
    
    return(
      
      <div>
        
      Tên tôi là {this.state.name},
      Địa chỉ của tôi là {this.state.address},
      Tuổi tôi là {this.state.age}
      <button onMouseOver={this.handleMouseOver}> Hover me</button>
      <button onClick={(event)=>{this.handleCick()}}>click</button>
     <form onSubmit={(event)=>{this.handleOnSumit(event)}}>
      <label>Your name</label>
      <input type="text" value={this.state.name} onChange={(event)=>{this.handleOnChangeName(event)}}/>
      <label>Your age</label>
      <input type="text" value={this.state.age} onChange={(event)=>{this.handleOnChangeAge(event)}}/>

      <button>Sumit</button>
     </form>

    </div>
    
    )
  }
}

export default UserInfor