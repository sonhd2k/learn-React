// Class compodent
// Function compodent
import React from "react";
import UserInfor from "./UserInfor";
import Dissplayinfor from "./Dissplayinfor";
class Myconpodent extends React.Component {

  //JSX
   render(){
    return(
      <div>
     <UserInfor></UserInfor>
     <br></br>
     <Dissplayinfor  name="Sơn" age="23"></Dissplayinfor>
      
      </div>

    );
   }
}
export default Myconpodent;