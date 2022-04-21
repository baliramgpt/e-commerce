import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import {useSelector} from "react-redux";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
    const currentUser= useSelector(selectCurrentUser )
    // const { currentUser } = useContext(UserContext);
    const isCartOpen = useSelector(selectIsCartOpen);

    // const signOutHandler = async() =>{
    //     const res = await signOutUser();
    //     console.log(res);
    //     setCurrentUser(null);
    // }

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser }>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;