import { FC } from 'react';
import { FormBackground } from '../../components/Form/FormBackground/FormBackground';
import { NewPassword } from '../../components/Form/NewPassword/NewPassword';
import './NewPasswordPage.scss';

interface INewPasswordPage {
}

export const NewPasswordPage: FC<INewPasswordPage> = () => {
    return (
       <FormBackground>
            <NewPassword/>
       </FormBackground>
    )
};
