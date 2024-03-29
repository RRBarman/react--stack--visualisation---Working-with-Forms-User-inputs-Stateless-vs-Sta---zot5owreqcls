/*import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Element from './components/element';

function App() {
  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          <Element />
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
              PUSH
            </button>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group pop">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
              POP
            </button>
            <input type="text" disabled className="form-control" />
          </div>
          <div className="input-group top">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
              TOP
            </button>
            <input type="text" disabled className="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
*/

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Element from './components/element';

function App() {
  const [stack, setStack] = useState([]);

  const handlePush = () => {
    const value = document.getElementById('pushInput').value;
    if (value !== '') {
      setStack([...stack, value]);
      document.getElementById('pushInput').value = '';
    }
  };

  const handlePop = () => {
    if (stack.length === 0) {
      window.alert('Stack is empty');
      return;
    }
    const value = stack.pop();
    setStack([...stack]);
    document.getElementById('popInput').value = value;
  };

  const handleTop = () => {
    if (stack.length === 0) {
      window.alert('Stack is empty');
      return;
    }
    const value = stack[stack.length - 1];
    document.getElementById('topInput').value = value;
  };

  const elements = stack.map((value, index) => <Element key={index} value={value} />);

  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          {elements}
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" onClick={handlePush}>
              PUSH
            </button>
            <input type="text" className="form-control" id="pushInput" />
          </div>
          <div className="input-group pop">
            <button className="btn btn-outline-secondary" type="button" onClick={handlePop}>
              POP
            </button>
            <input type="text" disabled className="form-control" id="popInput" />
          </div>
          <div className="input-group top">
            <button className="btn btn-outline-secondary" type="button" onClick={handleTop}>
              TOP
            </button>
            <input type="text" disabled className="form-control" id="topInput" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Element from './components/element';

function App() {
  const [value, setValue] = React.useState('');
  const [currpop, setPop] = React.useState('');
  const [currtop, setTop] = React.useState('');
  const [stack, setStack] = React.useState([]);

  const hanldeChange = (event) => {
    var curr = event.target.value;
    setValue(curr);
  };
  const getTop = () => {
    if (stack.length === 0) {
      alert('Stack is empty');
      return;
    }
    var top = stack[0];
    setTop(top);
  };
  const push = () => {
    if (value === '') {
      alert('Please enter a value');
      return;
    }
    setStack([value, ...stack]);
  };
  const pop = () => {
    if (stack.length === 0) {
      alert('Stack is empty');
      return;
    }
    var top = stack[0];
    var arr = stack.slice();
    arr.shift();
    setStack(arr);
    setPop(top);
  };

  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          {stack.map((item, key) => (
            <Element key={key} val={item} />
          ))}
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button onClick={push} className="btn btn-outline-secondary" type="button" id="button-addon2">
              PUSH
            </button>
            <input type="text" value={value} onChange={hanldeChange} className="form-control" />
          </div>
          <div className="input-group pop">
            <button onClick={pop} className="btn btn-outline-secondary" type="button" id="button-addon2">
              POP
            </button>
            <input type="text" disabled value={currpop} className="form-control" />
          </div>
          <div className="input-group top">
            <button onClick={getTop} className="btn btn-outline-secondary" type="button" id="button-addon2">
              TOP
            </button>
            <input type="text" disabled value={currtop} className="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;*/
