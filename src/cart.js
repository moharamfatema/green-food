import React from "react";
import { useCart } from "react-use-cart";
const cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItem,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=alfredo&app_id=8fc37a41&app_key=afc4e0d690c5ce190e4a3358bd822131')
        .then(response => response.json())
        .then(data => {
            let { hits } = data;
            recipe = hits[0].recipe;
        }
        );


    return (
        <div>
            <button className="btn btn-danger ms-2"
                onClick={() => removeItem(item.id)}
            >Remove Item</button>
            <div className="col-auto">
                <button className="btn btn-danger ms-2"
                    onClick={() => emptyCart()}

                >Clear cart</button>

            </div>
        </div>
    );
};
export default cart;