// VisibilityToggle -render, handleToggleVisisbility
//visibility -> false
class VisibilityToggle extends React.Component {
           constructor(props) {
             super(props);
             this.shwdetails = this.shwdetails.bind(this);
          this.state ={
            visibility: false
          }
        }
  shwdetails() {
    this.setState( (prevState) => {
      return {
      visibility: !prevState.visibility
     };
    } );
  }
  render(){
             return (
               <div>
                 <h1> visibility Toggle</h1>
                  <button onClick = {this.shwdetails}>{this.state.visibility?'hide':'show details'}</button>
                  {this.state.visibility&&<p> Toggling the the things is not necessery for each part</p>}
              </div>
             );
  }
}
ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));




// let disa = true;
// const shwdetails= () => {
//   disa = !disa;
//   renderElement();
//    }
// const appRoot =document.getElementById('app');
//
// let renderElement = () => {
//   const template = (
//     <div>
//       <h1> visibility Toggle</h1>
//       <button onClick = {shwdetails}>{disa?'show details':'hide'}</button>
//     {!disa&&<p> Toggling the the things is not necessery for each part</p>}
//     </div>
//   );
//   ReactDOM.render(template,appRoot);
// };
// renderElement();
