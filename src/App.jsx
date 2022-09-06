/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react'
import './App.css'
import Routes from './Routes'
import UserInfoContext from './contexts/UserInfoContext'
import OrderInfoContext from './contexts/OrderInfoContext'
 
function App() {
    const [user, setUser] = useState({
		email: null,
		phone: null,
		name: null,
	})

	const [order, setOrder] = useState({
        quantity: null,
        price: null,
    })
    
    return (
        <UserInfoContext.Provider value={{user, setUser}}>
			<OrderInfoContext.Provider value={{order, setOrder}}>
                <div className='App'>
                    <Routes />
                </div>
            </OrderInfoContext.Provider >
		</UserInfoContext.Provider >
    )
}

export default App