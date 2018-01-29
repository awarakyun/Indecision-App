import React from 'react';

const Header = (props) => {
    return (
      <div className= "header">
        <div className="container">
       <h1 className="header__title">{props.anpp.title}</h1>
       <h2 className="header__subtitle">{props.anpp.subtitle}</h2>
     </div></div>);
  };

  export default Header;
