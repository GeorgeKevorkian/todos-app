import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const new2 = React.createElement('h1', null, 'Hello World!');
// const new2 = <h1>HEYYY</h1>;

// const New2 = () => {
//   const year = new Date().getFullYear();
//   return <h1>This is {year}</h1>;
// };

// const final = <New2 />;

// ReactDOM.render(new2, document.getElementById('root'));
// ReactDOM.render(<App name={final} />, document.getElementById('root'));
// ReactDOM.render(<New2 />, document.getElementById('root'));

// class Counter extends React.Component {
//   render() {
//     return <div>This is Counter Component</div>;
//   }
// }

// const Second = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// };

// ReactDOM.render(<Second />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
