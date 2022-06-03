import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstComponent from './component/firstCompent';

// const myFirstElement = <h1>Hello React!</h1>
// class Demo{
//   methodone()
//   {
//     var a=2;
//     var b=3;
//     var c=a+b;
//     document.getElementById('root').innerHTML=c;
//   }
// }
// var mydemo=new Demo();
// mydemo.methodone();
// export 
// class Mywepsite extends React.Component
// {
//   render(){
//    return <h1>welcome</h1>
//   }
// }
// class Mynewwepsite extends React.Component
// {
//   render(){
//     return <div>
//       <Mywepsite/>
//       <h1>riyas</h1>
//     </div>
//   }
// }
// ReactDOM.render(<Mynewwepsite/>,document.getElementById('root'));
ReactDOM.render(<FirstComponent/>,document.getElementById('root'));
// root.render(FirstComponent);
// );
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
