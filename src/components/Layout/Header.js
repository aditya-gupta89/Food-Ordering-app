import {Fragment} from "react";
import classes from './Header.module.css';

// import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>{
return (
<Fragment>
  <header className={classes.header}>
      <h1>Meals</h1>
      <HeaderCartButton onClick={props.onShowCart}/>
  </header>
      {/* we can't write like that classes.main-image with slase */}
      {/* <div className={classes['main-image']}> 
          <img src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png' ></img>
      </div> */}

</Fragment>
)
};
export default Header;