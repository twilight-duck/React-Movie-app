import { FC, useState } from 'react';
import { Input } from '../../Input/Input';
import { Button } from '../../../components/Button/Button';
import './NewPassword.scss';

interface INewPassword {
}

export const NewPassword: FC<INewPassword> = () => {
    
    const [password, setPassword] = useState('');

    const handleChangePassword= (newValue: string) => {
        setPassword(newValue);
    }

    const [confirmPassword, setConfirmPassword] = useState('');

    const handleConfirmPassword= (newValue: string) => {
        setConfirmPassword(newValue);
    }

    const handleSubmit = () => {
        console.log('Форма отправляется на сервер');
    }

    return (
        <div className='new-password'>
            <form action="submit" className='new-password-form'>
                <h3 className='new-password-form-title'>New password</h3>
                <div className='new-password-form-input'>
                    <Input 
                        value={password} 
                        handleChange={handleChangePassword} 
                        title='Password' 
                        placeholder='Your password'
                    />
                </div>
                <div className='new-password-form-input'>
                    <Input 
                        value={confirmPassword} 
                        handleChange={handleConfirmPassword} 
                        title='Confirm Password' 
                        placeholder='Confirm your password'
                    />
                </div>    
                    <Button 
                        type={'primary'} 
                        content={'Set Password'} 
                        onClick={handleSubmit}
                    />
            </form>
        </div>
    )
};
