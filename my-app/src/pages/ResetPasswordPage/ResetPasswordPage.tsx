import { FC } from 'react';
import { FormBackground } from '../../components/Form/FormBackground/FormBackground';
import { ResetPassword } from '../../components/Form/ResetPassword/ResetPassword';
import './ResetPasswordPage.scss';

interface IResetPasswordPage {
}

export const ResetPasswordPage: FC<IResetPasswordPage> = () => {
    return (
       <FormBackground> 
            <ResetPassword resetMessage='You will receive an email example@gmail.com with a link to reset your password!'/>
       </FormBackground> 
    )
};
