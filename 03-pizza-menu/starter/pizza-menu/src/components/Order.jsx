`use strict`;
export default function Order( { time })
{
    return (
        <div className="order">
            <p>We are open Untill { time }. Come visit us order online.</p>
            <button className="btn">Order</button>
        </div>
    );
}