import Pizza from './Pizza';

export default function Menu()
{
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            <Pizza name='Pizza Spinaci' ingredients = 'Tomato, mozarella, spinach, and ricotta cheese' img='pizzas/spinaci.jpg'price='12' />
        </main>
    )
}