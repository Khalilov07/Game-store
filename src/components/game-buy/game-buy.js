import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import { Button } from '../button';
import './game-buy.css'

export const GameBuy = ({ game }) => {

    const items = useSelector(state => state.cart.itemsInCart)

    const inItemInCart = items.some(item => item.id === game.id)

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.stopPropagation();

        if(inItemInCart) {
            dispatch(deleteItemFromCart(game.id))
        }else {
            dispatch(setItemInCart(game))
        }
    }

    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <Button
                type={inItemInCart ? 'secondary' : 'primary'}
                onClick={handleClick}
            >
               { inItemInCart ? 'Убрать из корзины' : 'В корзину' }
            </Button>
        </div>
    )
}
