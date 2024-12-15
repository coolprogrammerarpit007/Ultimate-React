const isShopOpen = function ()
{
    const hours = new Date().getHours();
    return hours >= 10 && hours <= 22 ? ' We are currently open! ' : 'We are closed for now,look at our sehdule.';
}

export default function Footer()
{
    return <footer className = 'footer'> { new Date().toLocaleTimeString() } { isShopOpen() }</footer>
}