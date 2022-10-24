import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import {selectIsCartOpen} from "../../store/cart/cart.selector";
import {selectCurrentUser} from "../../store/user/user.selector";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { SignOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  
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