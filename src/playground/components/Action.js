import React from 'react';
const Action = (props) => {
    return (
      <div >
        <button onClick = {props.handleWhat}
           disabled = {!props.hasOptions}
           className="big-button"> What Should I do?</button>
      </div>
    );
  };
  export default Action;
