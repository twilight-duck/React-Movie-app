import { Input } from '../../../components/Input/Input';
import { FC, useState } from 'react';
import { Form } from '../../../components/Form/Form';
import './SignIn.scss';
import { Button } from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

interface ISignIn{
    message?: string;
}

export const SignIn: FC<ISignIn> = ({message}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail= (newValue: string) => {
        setEmail(newValue);
    }

    const handleChangePassword= (newValue: string) => {
        setPassword(newValue);
    }

    const handleSubmit = () => {
        console.log('Форма отправляется на сервер');
    }
    return (
        <div className='sign-in'>
            <form className='sign-in-form' action="submit">
            <h3 className='sign-in-form-title'>Sign In</h3>
                <p className="sign-in-message">{}</p>
                <div className='email-input'>
                    <Input 
                        value={email} 
                        handleChange={handleChangeEmail} 
                        title='Email' 
                        placeholder='Your email'/>
                </div>
                    <Input 
                        value={password} 
                        handleChange={handleChangePassword} 
                        title='Password' 
                        placeholder='Your password'/>
                <p className='input-message'>Forgot Password?</p>
                <Link to='/films'> <Button 
                        type={'primary'} 
                        content={'Sign In'} 
                        onClick={handleSubmit}/></Link>
                <p className='sign-in-form-message'>
                    Don't have an account? 
                    <Link to='/sign-up'><a href="">Sign Up</a></Link>
                </p>
            </form>
        </div>
    )
};
