import { FC } from 'react';
import { Route, Routes } from "react-router-dom";
import { NewPassword } from '../components/Form/NewPassword/NewPassword';
import { ResetPassword } from '../components/Form/ResetPassword/ResetPassword';
import { SignIn } from '../components/Form/SignIn/SignIn';
import { SignUp } from '../components/Form/SignUp/SignUp';
import { FilmPage } from '../pages/FilmPage/FilmPage';
import { MainPage } from '../pages/MainPage';
import { SettingsPage } from '../pages/SettingsPage/SettingsPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';



export const Router: FC = () => (
   <Routes>
        <Route path='/films' element={<MainPage/>}/>
        <Route path='/films/:id' element={<FilmPage/>}/>
        <Route path='/new-password' element={<NewPassword/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/sign-up' element={<SignUpPage/>}/>
        <Route path='/sign-in' element={<SignInPage/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
        <Route path='*' element={<>Такой страницы не существует</>}/>
   </Routes>
);
