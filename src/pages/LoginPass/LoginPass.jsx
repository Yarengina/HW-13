import { useRef } from 'react'
import useCheckInput from '../../components/useCheckInput'
import './LoginPass.css'
import Navigation from '../../components/Navigation/Navigation'

function LoginPass() {
    const { inputValue, onChange, onBlur, isEmailError, isPassError } = useCheckInput('')

    const inputEmail = useRef(null)
    const inputPassword = useRef(null)
    const emailError = useRef(null)
    const passwordError = useRef(null)

    const onSubmit = (event) => {
        event.preventDefault()
    }

    const handleClick = () => {
        if (inputEmail.current.name === 'email' && inputEmail.current.value === '') {
            inputEmail.current.focus()
            emailError.current.innerText = 'Type your e-mail'
        }

        if (inputPassword.current.name === 'password' && inputPassword.current.value === '') {
            inputPassword.current.focus()
            passwordError.current.innerText = 'Type your password'
        }
    }
   
    return (
        <div>
            <Navigation />
            <h2>Авторизация</h2>
            <form className='Form' onSubmit={onSubmit}>
                <div className='Inputs'>
                    <input className='Input'
                        id='1'
                        name='email'
                        type='email'
                        placeholder='Enter your email...'
                        value={inputValue.inputEmail}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={inputEmail}
                    />
                    <span className='Error' ref={emailError}>{isEmailError}</span>
                </div>
                <div className='Inputs'>
                    <input className='Input'
                        id='2'
                        name='password'
                        type='password'
                        placeholder='Enter your password...'
                        value={inputValue.inputPassword}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={inputPassword}
                    />
                    <span className='Error' ref={passwordError}>{isPassError}</span>
                </div>
                <button className='Button' type='button' onClick={handleClick}>
                Submit
                </button>
            </form>
        </div>
    )
}

export default LoginPass