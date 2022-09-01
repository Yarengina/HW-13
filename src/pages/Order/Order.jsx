import { useState } from 'react'
import OrderDetail from './OrderDetail'
import booksStub from '../../components/booksStub'
import './Order.css'
import Navigation from '../../components/Navigation/Navigation'

function Order() {
    const [books, setBooks] = useState(booksStub())
    const totalPrice = books.reduce(
        (total, currentBook) => 
        total + currentBook.price * (currentBook.quantity - 1), 0
    )

    const totalQuantity = books.reduce(
        (total, {quantity}) => 
        total + (quantity - 1), 0
    )

    const setQuantity = (id, quantity) => {
        setBooks(
            books.map((book) => (book.id !== id ? book : { ...book, quantity }))
        )
    }

    return (
        <>
        <Navigation />
            <h2>Каталог книг</h2>
            <OrderDetail
                books={books}
                setQuantity={setQuantity}
            />
            <p className='Total'>Total Quantity: <strong>{totalQuantity}</strong></p>
            <p className='Total'>Total Price: <strong>{totalPrice} /-</strong></p>
        </>
    )
  }
  
export default Order