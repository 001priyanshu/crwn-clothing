import './cart-dropdown.styles.scss'
import Button from '../button/button.component';

const CartDropdowm = () => {
return (
    <div className='cart-dropdown-container'>
        <div className='cart-item'>
            <Button>GO TO CHECKOUT</Button>
        </div>
    </div>
);
};

export default CartDropdowm;