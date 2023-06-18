// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import {useEffect, useState} from 'react';
import './App.css';
import UserData from './Components/UserData';

// const API="https://dummyjson.com/users";
const API="https://jsonplaceholder.typicode.com/users";

const  App=()=> {
  const [users,setUsers]=useState([]);
  const fetchUsers= async(url)=>{
    try{
      const res=await fetch(url);
      const data= await res.json();
      if(data.length>0){
        setUsers(data);
      }
      console.log(data);
    }catch(err){
      console.error(err);
    }
  }
  useEffect(()=>{
    fetchUsers(API);
  },[])


  return (
    <>
      <table>
          <tr> 
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        
          <UserData users={users}/>
        
      </table>
    </>
  );
}

export default App;
