import React from 'react';
import AddOption from './AddOption.js';
import Option from './Option.js';
import Options from './Options.js';
import Action from './Action.js';
import Header from './Header.js';
import OptionModal from './OptionModal.js'
export default class IndecisionApp extends React.Component {
    state = {
      options: [],
      selectedOption: undefined,
      suggestion: 'none'
    };

    handleSelectedOption = () => {
      this.setState( () => ({selectedOption: false}));
    }

    handleWhatShouldIDo = () => {
      let len = this.state.options.length ;
      let opt = Math.floor(( Math.random() ) * len);
      let  msg = this.state.options[opt];
      this.setState( () => ({selectedOption: true,
      suggestion:msg}));
    }
    handleAddOption = (opt) => {

      if(this.state.options.indexOf(opt)>-1)
      return <p className="add-option-error">This option Already exist</p>;
      this.setState((prevState) => ({options: prevState.options.concat(opt)}));
    }
    handleDeleteAll = () => {
      this.setState(() => ({options: []}));
    }
    handleDeleteOptional = (optionToRemove) => {
       this.setState( (prevState) => ({
       options: prevState.options.filter((option) => { return optionToRemove !== option ;}) }));
    }
 componentDidMount() {
  try {
  const json = localStorage.getItem('options');
  const options = JSON.parse(json);
  if(options){
  this.setState( () => ({options: options}));
  }
    }catch(e){ console.log(e); }
     }

  componentDidUpdate(prevProps,prevState) {
  if(prevState.options.length !== this.state.options.length){
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options',json);
   }

    }
  render() {
    const app = {
    title: 'Ankecision',
    subtitle: 'Put your life in the hands of computers'
    };
    return (
      <div>
        <Header anpp ={app}/>
         <div className="container">
           <Action  hasOptions = {this.state.options.length > 0}  handleWhat = {this.handleWhatShouldIDo}/>
            <div className="widget">
           <Options anpp = {this.state.options}
           deleteAll ={this.handleDeleteAll}
           handleDeleteOptional = {this.handleDeleteOptional} />
           <AddOption  handleAddOpt = {this.handleAddOption}/>
         </div></div>

        <OptionModal selectedOption={this.state.selectedOption}  suggestion={this.state.suggestion}  handleSelectedOption={this.handleSelectedOption}/>
      </div>
    );
  }
 }
