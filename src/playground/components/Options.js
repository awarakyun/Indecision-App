import React from 'react';
import Option from './Option.js'
const Options = (props) => {
    return (
    <div>
      <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>

      <button
          className="button button--link"
        onClick = {props.deleteAll}>
        Remove all</button></div>
    <Option app = {props.anpp} handleDeleteOptional = {props.handleDeleteOptional}/>
  {props.anpp.length==0&&(<div><p className="widget-message">Please enter An Option to continue</p></div>)}
  </div>
    );
  };
 export default Options;
