import Counter from './Counter'

function OrderDetail({
    books,
    setQuantity
}) {
    return (
        <div className='BookField'>
            {books.map(({id, title, price, rest, quantity}) => (
            <div className='Book' key={id}>
                <p className='Title'>{title}</p>
                <p className='Price'>Price: {price} /-</p>
                <p className='Price'>Quantity: {quantity - 1}</p>
                <Counter
                    min={1}
                    max={rest + 1}
                    current={quantity}
                    onChange={(bookQuantity) => setQuantity(id, bookQuantity)}
                />
            </div>
            ))}
        </div>
    )
}

export default OrderDetail