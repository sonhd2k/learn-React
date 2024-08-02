// Class compodent
// Function compodent
import React from "react";
class Myconpodent extends React.Component {
  state={
    name:'Sơn',
    address:'Hà Nội',
    age:23
  };
  //JSX
   render(){
    return(
      <>
      <div>Tên tôi là {this.state.name}</div>
      <div>Địa chỉ của tôi là {this.state.address}</div>
      <div>Tuổi tôi là {this.state.age}</div>
      </>

    );
   }
}
export default Myconpodent;