const isShopOpen = function ()
{
    const hours = new Date().getHours();
    return hours >= 10 && hours < 24 ? true : false;
}

export default function Footer()
{
    return <footer className = 'footer'> { isShopOpen() && <div className="order">
        <p>We are open Untill 12::00 AM. Come visit us order online.</p>
        <button className="btn">Order</button>
    </div> }</footer>
}