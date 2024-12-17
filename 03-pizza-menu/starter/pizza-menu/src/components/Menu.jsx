import { pizzaData } from '../data';
import Pizza from './Pizza';
export default function Menu()
{
    return (
        <main className='menu'>
            <h2>Our Menu</h2>

            
            {
                pizzaData.length > 0 ? 
                    (
                        <>
                            <p>
                            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all deliciouns.
                            </p>
                            <ul className='pizzas'>
                                {pizzaData.map((pizza) => {
                                    return (<Pizza name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} img={pizza.photoName} key={pizza.name} />);
                                })}
                            </ul>
                        </>
                    ) : <p>We are sold out for now.</p>
    }
        </main>
    )
}