import { Input } from '../Input/Input';
import { FC, useState } from 'react';
import './Form.scss';

interface IForm {
    formTitle: string;
}

export const Form: FC<IForm> = ({formTitle}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (newEmail: string) => {
        setEmail(newEmail);
    }

    const handleChangePassword = (newPassword: string) => {
        setPassword(newPassword);
    }
    return (
       <form className='form'>
        <h3 className='form-title'>{formTitle}</h3>
            <Input 
                value={email}
                handleChange={handleChangeEmail}
                title='Title'
                placeholder='Some Placeholder'
            />
            <Input 
                value={password}
                handleChange={handleChangePassword}
                title='Title 2'
                placeholder='Some Placeholder 2'
            />
       </form>
    )
};
