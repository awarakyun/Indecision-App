console.log('hey everything is ready');
//JSX - JavaScript XML extension
const app = {
  title: 'Indecision App',
  subtitle: 'put your life in the hands of computer',
  optional: ['One','Two']
}
const onFormSubmit = (e) =>{
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option) {
    app.optional.push(option);
    e.target.elements.option.value='';
    renderDom();
  }
};
let number =0;
const removeAll = () =>
{
  app.optional=[];
  renderDom();
};
const onMakeDEcision = () => {
  const randomNum = Math.floor(Math.random() * app.optional.length );

  const option = app.optional[randomNum];
  alert(option);
}
let appRoot = document.getElementById('app');
const renderDom = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle&&<p>{app.subtitle}</p>}
      <p>{app.optional.length>0?'Here are your option':'no options'}</p>
       <button disabled = {app.optional.length===0} onClick = {onMakeDEcision}>What should i do</button>
      <button onClick = {removeAll}>Remove All</button>
    <ol>  {

        app.optional.map( (str) => {
          return <li key = {number++}>{str}</li>;
        })

      }
    </ol>
      <form onSubmit = {onFormSubmit } >
        <input type='text' name='option' />
        <button>Add Options</button>

      </form>
    </div>
  );
  ReactDOM.render(template,appRoot);
}

renderDom();
