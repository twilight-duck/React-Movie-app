import { Input } from '../../components/Input/Input';
import { FC, useState } from 'react';
import { Form } from '../../components/Form/Form';
import './SignInPage.scss';
import { Button } from '../../components/Button/Button';
import { FormBackground } from '../../components/Form/FormBackground/FormBackground';
import { SignIn } from '../../components/Form/SignIn/SignIn';


interface ISignInPage {
}

export const SignInPage: FC<ISignInPage> = () => {
   
    return (
        <div className='sign-in'>
           <FormBackground> 
                <SignIn message='Your password has been changed!'/>
           </FormBackground>
        </div>
    )
};
