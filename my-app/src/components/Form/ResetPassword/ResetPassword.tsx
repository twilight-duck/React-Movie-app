import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { FC, useState } from 'react';
import './ResetPassword.scss';

interface IResetPassword {
    resetMessage?: string;
}

export const ResetPassword: FC<IResetPassword> = ({resetMessage}) => {
    const [email, setEmail] = useState('');

    const handleChangeEmail= (newValue: string) => {
        setEmail(newValue);
    }

    const handleSubmit = () => {
        console.log('Форма отправляется на сервер');
    }

    return (
        <div className='reset-password'>
            <form action="submit" className='reset-password-form'>
                <h3 className='reset-password-form-title'>Reset Password</h3>
                <p className="reset-password-form-message">{resetMessage}</p>
                <div className='reset-password-form-input'>
                    <Input
                        value={email} 
                        handleChange={handleChangeEmail} 
                        title='Email' 
                        placeholder='Your email'
                    />
                </div>
                <Button
                    type={'primary'} 
                    content={'Reset'} 
                    onClick={handleSubmit}
                 />
            </form>
        </div>
    )
};
