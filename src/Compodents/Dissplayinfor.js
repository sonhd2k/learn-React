import React from "react";

class Dissplayinfor extends React.Component{
 render(){
  //props=> viết tắt properties
  // const {age,name}=this.props;
  const {listUsers}=this.props;
  console.log(listUsers);
  return(
    <div>
      {/* <div> My name's {name}</div>
      <div> My age's {age}</div> */}
     {listUsers?.map((item,index) => {
      return(
        <div key={item.id}>
          <div>tên tôi là {item.name}</div>
          <div>tuổi tôi là {item.age}</div>
        </div>
      )
     })}
       </div>
  )
}
}

export default Dissplayinfor;