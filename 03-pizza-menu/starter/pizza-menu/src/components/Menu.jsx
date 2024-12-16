import { pizzaData } from '../data';
import Pizza from './Pizza';
export default function Menu()
{
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            <ul className='pizzas'>
                {pizzaData.map((pizza) => {
                    return (<Pizza name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} img={pizza.photoName} key={pizza.name} />);
                })}
            </ul>
        </main>
    )
}