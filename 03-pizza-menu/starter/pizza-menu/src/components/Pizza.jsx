export default function Pizza( { name,ingredients,img,price })
{
    return (
        <div className='pizza'>
            <img src={ img } alt= { name }/>
            <div>
                <h3> { name }</h3>
                <p> {ingredients} </p>
                <p> {price} </p>
            </div>
        </div>
    );
}