import './App.scss';
import Myconpodent from './Compodents/Myconpodent';
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div>
      hello
      <Myconpodent/>
    </div>
    );
  }
} 
// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
 

//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <div>Count = {count}</div>
//     //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//     //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//     //   </header>
//     // </div>
//   );
// }


export default App;
