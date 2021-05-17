import logo from './logo.svg';
import './App.css';

function Welcome(props){
  return <h1> Hello, {props.name} </h1>;
}


function Avatar(props){
  return (
    <img className="Avatar"
      src = {props.user.avatarUrl}
      alt = {props.user.name}
    />
  );
}

function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar user = {props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props){
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      
    </div>

    );
}



function App() {
  return (
    <div>
      <Welcome name = "Shubham"/>
      <Welcome name= "Himanshu" />
      <Welcome name= "ssss.." />
    </div>

  );


}




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

export default App;
