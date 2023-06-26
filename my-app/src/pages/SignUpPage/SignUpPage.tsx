import { FC } from 'react';
import { FormBackground } from '../../components/Form/FormBackground/FormBackground';
import { SignUp } from '../../components/Form/SignUp/SignUp';
import './SignUpPage.scss';

interface ISignUpPage {
}

export const SignUpPage: FC<ISignUpPage> = () => {
    return (
        <FormBackground>
            <SignUp/>
        </FormBackground>
    )
};
