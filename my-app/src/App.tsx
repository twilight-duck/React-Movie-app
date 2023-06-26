import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Container } from './components/Container/Container';
import { Menu } from './components/Menu/Menu';
import { FilmsList } from './components/FilmsList/FilmsList';
import { MainPage } from './pages/MainPage';
import { PageTemplate } from './components/PageTemplate/PageTemplate';
import { FormBackground } from './components/Form/FormBackground/FormBackground';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { NewPasswordPage } from './pages/NewPasswordPage/NewPasswordPage';
import { FilmPage } from './pages/FilmPage/FilmPage';
import { SettingsPage } from './pages/SettingsPage/SettingsPage';
import { Router } from '../src/routes/Router';


export default function App() {
 

  return (
    <div className="App">
       <Router/>
    </div>
  );
}

