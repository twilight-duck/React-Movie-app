import { FC, useState } from 'react';
import { postNewUser } from '../../../api/postNewUser';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";
import './SignUp.scss';
import { Link } from 'react-router-dom';

interface ISignUp {
}

export const SignUp: FC<ISignUp> = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleChangeName = (newValue: string) => {
        setName(newValue);
    }

    const handleChangeEmail= (newValue: string) => {
        setEmail(newValue);
    }

    const handleChangePassword= (newValue: string) => {
        setPassword(newValue);
    }

    const handleChangeConfirmPassword= (newValue: string) => {
        setConfirmPassword(newValue);
    }

    const handleChangeNameError = (newValue: string) => {
        setNameError(newValue);
    }

    const handleChangeEmailError = (newValue: string) => {
        setEmailError(newValue);
    }

    const handleChangePasswordError = (newValue: string) => {
        setPasswordError(newValue);
    }

    const handleChangeConfirmPasswordError = (newValue: string) => {
        setConfirmPasswordError(newValue);
    }


    const validateForm = () => {
        let isValid = true;
        if (!name){
            isValid = false;
            setNameError("Name is required")
        }

        if (!email){
            isValid = false
            setEmailError("Email is required")
        } else if (email.indexOf("@") === -1 && email.indexOf('.') === -1){
            isValid = false;
            setEmailError('Email is invalid')
        }

        if (!password){
            isValid = false
            setPasswordError('Password is required')
        }

        if (!confirmPassword){
            isValid = false
            setConfirmPasswordError('Password confirmation is required')
        } else if(password !== confirmPassword){
            setConfirmPasswordError('Passwords do not match')
            setPasswordError('Passwords do not match')
        }


        return isValid
    }


    const handleSubmit = () => {
        if (validateForm()){
            const register = async () => {
                try{
                    const user = await createUserWithEmailAndPassword(auth, email, password)
                    console.log(user)
                } catch(error) {
                    console.log('error')
                }
            }
        }
    }
    return (
        <div className='sign-up'>
            <form className='sign-up-form' onSubmit={e => e.preventDefault()}>
            <h3 className='sign-up-form-title'>Sign Up</h3>   
            <Input
                title='Name'
                placeholder='Your Name'
                value={name}
                handleChange={handleChangeName}
                errorMessage={nameError}
            />
             <Input
                title='Email'
                placeholder='Your Email'
                value={email}
                handleChange={handleChangeEmail}
                errorMessage={emailError}
            />
             <Input
                title='Password'
                placeholder='Your Password'
                value={password}
                handleChange={handleChangePassword}
                errorMessage={passwordError}
            />
             <Input
                title='Confirm Password'
                placeholder='Confirm Password'
                value={confirmPassword}
                handleChange={handleChangeConfirmPassword}
                errorMessage={confirmPasswordError}
            />
            <Button content='Sign Up' onClick={handleSubmit} type='primary'  />
            <p className='sign-up-form-description'>
                    Already have an account? {' '}
                    <Link to='/sign-in'><a className='sign-up form-link' href="">
                        Sign In
                    </a>
                    </Link>
                </p>
            </form>
        </div>
    )
};
