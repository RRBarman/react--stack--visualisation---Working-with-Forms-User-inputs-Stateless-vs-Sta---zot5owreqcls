/*import React from 'react';
function Element() {
  return <div className="element"></div>;
}

export default Element;*/
import React from 'react';

function Element(props) {
  return <div className="element">{props.value}</div>;
}

export default Element;
