import Order from "./Order";
const isShopOpen = function ()
{
    const hours = new Date().getHours();
    return hours >= 10 && hours < 24 ? true : false;
}

export default function Footer()
{
    return <footer className = 'footer'> { isShopOpen() && <Order time={'12::00 AM'} />}</footer>
}