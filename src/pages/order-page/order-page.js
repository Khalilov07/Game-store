import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item';
import { calcTotalPrice } from '../../components/utils';
import './order-page.css'

export const OrderPage = () => {

    const items = useSelector(state => state.cart.itemsInCart)

    if(items.length < 1) {
        return <h2>Ваша корзина пуста</h2>
    }

    return (
        <div className='order-page'>
            <div className="order-page__left">
                { items.map(game => <OrderItem game={game} /> )}
            </div>
            <div className="order-page__right">
                <div className="ordra-page__total-price">
                    <span>
                       {items.length} товаров на сумму { calcTotalPrice(items) } руб.
                    </span>
                </div>
            </div>
        </div>
    )
};
