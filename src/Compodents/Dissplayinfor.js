import React from "react";

class Dissplayinfor extends React.Component{
 render(){
  //props=> viết tắt properties
  console.log(this.props);
  return(
    <div>
      <div> My name's {this.props.name}</div>
      <div> My age's {this.props.age}</div>
      
       </div>
  )
}
}

export default Dissplayinfor;