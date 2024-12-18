export default function Pizza( { pizzaObj })
{
    console.log(pizzaObj);
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={ pizzaObj.photoName } alt= { pizzaObj.name }/>
            <div>
                <h3> { pizzaObj.name }</h3>
                <p> {pizzaObj.ingredients} </p>
                <p> { pizzaObj.soldOut ? 'SOLD OUT' : <span> {pizzaObj.price}</span>}  </p>
            </div>
        </li>
    );
}