import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './state.jsx';
import Toggle from './Toggle';
import LoginButton from './LoginButton';
import LoginControl from './LoginControl';
import MailBox from './InlineConditional';
import Page from './page';
import NumberList from './NumberList';
import Blog from './Blog';
import NameForm from './forms';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Calculator';
import WelcomeBlog from './composition';
import SplitPane from './SplitPane';
import SignUpDialog from './WelcomeDialog';

// ReactDOM.render(
// 	<h1>
// 		Hello world!
// 	</h1>,
// 	document.getElementById('root')
// );
const name = 'Josh Perez';

function formatName(user){
	return user.firstName + ' ' + user.lastName;
}

function getgreeting(user) {
	// body...
	if (user){
		return <h1> Hello, {formatName(user)} </h1>;
	}
	else{
		return <h1> Hello, Stranger. </h1>;
	}
}


// function tiktok() {
// 	const element = (
// 		<div>
// 			<h1> Hello world! </h1>
		

// 		<h2> 
// 			It is {new Date().toLocaleTimeString()}. </h2>
// 		</div>
// 	);

// }


const user = {
	firstName: 'Shubham',
	lastName : 'Malhotra'
};


// const element = <div tabIndex = "0"> </div>;

// const title = response.potentiallyMaliciousInput;



// const element = React.createElement(
// 	'h1',
// 	{className:'greeting'},
// 	'hello, world!'
// );

// setInterval(tiktok,1000);

// const element = {
// 	type: 'h1',
// 	props: {
// 		className: 'greeting',
// 		children: 'Hello world!'
// 	}
// };






// const element = (
// 	<h1 className="greeting">
// 		hello world!
// 	</h1>

// );





// const element = (
// 	<div>
// 		<h1> Hello ! </h1>
// 	</div>
	
// );


// const element = (
// 	<div>
// 		<h1>
// 			Hello!
// 		</h1>
// 		<h2>
// 			{getgreeting(user)}
// 		</h2>
// 	</div>
// );



// ReactDOM.render(
// 	element,
// 	document.getElementById('root')
// );



// function Welcome(props){
// 	return <h1> hello, {props.name} </h1>;
// }


// // class Welcome extends React.component  {
// // 	render(){
// // 		return <h1> Hello, {this.props.name} </h1>;
// // 	}
// // }

// const element = <Welcome name = "Shubham" />;

// ReactDOM.render(
// 	element,
// 	document.getElementById('root')
// );









const messages = ['react','re: react','check','check123'];

const numbers = [1,2,3,4,5,6,7];


const posts = [
	{id: 1, title: 'Hello World',content: 'Welcome to learning React!'},
	{id: 2, title: 'Installation',content: 'Install react using npm!'}
];


ReactDOM.render(

  <React.StrictMode>
    <App />
	<Toggle/>
	<LoginButton/>
	<LoginControl/>
	<MailBox unreadMessages={messages}/>
	<Page/>
	<NumberList numbers={numbers}/>  
	<Blog posts={posts} />	
	<NameForm />
	<FlavorForm/>
	<Reservation/>
	<Calculator/>
	<WelcomeBlog/>
	<SignUpDialog/>
	

  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
