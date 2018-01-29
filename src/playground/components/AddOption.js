import React from 'react';
import ReactDOM from 'react-dom';

export default class AddOption extends React.Component {
  constructor(props) {
  super(props);
  this.handleAddOption = this.handleAddOption.bind(this);
   this.state = {
  error: undefined
     }
   }
   handleAddOption(e) {
  e.preventDefault();
    const option = e.target.elements.option.value.trim();
   if(option)
     {const  error =  this.props.handleAddOpt(option);
         this.setState(() => ({error}));
      e.target.elements.option.value = '';
    }
  }
    render() {
           return (
             <div>
               {this.state.error&&<p>{this.state.error}</p>}
               <form onSubmit = {this.handleAddOption} className="add-option">
                 <input type = 'text' name = 'option'  className="add-option__input"/>
                 <button className="button">Add Option</button>
               </form>
             </div>
           );
    }
  }
