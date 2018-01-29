import React from 'react';
const Option = (props) => {
   const list = props.app;

     return (list.length>0&&<div ><ol>{list.map( (x) => {return <div className="option"><li key={x} className="option__text">{x}
     </li><button onClick = { (e) => {
            props.handleDeleteOptional(x);}}
            className="button button--link" >Remove</button></div>})}</ol></div>);
          // }
          // else {
          //   return (<div></div>);
          // }

  };
export default Option;
