import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
    return (
      <Fragment>
        <NavigationContainer>
            <NavLink to='/'>
                <div><CrwnLogo /></div>
            </NavLink>
            <NavLinks>
                <NavLink to='/shop'>SHOP</NavLink>
                {
                  currentUser ? (
                    <NavLink as='span' onClick={SignOutUser}>SIGN OUT</NavLink>
                  ) : (
                    <NavLink to='/auth'>SIGN IN</NavLink>
                  )
                }
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;