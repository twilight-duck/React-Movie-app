import { FC, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Menu } from '../../components/Menu/Menu';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import { Toggle } from '../../components/Toggle/Toggle';
import { useAppContext } from '../../contexts/AppContext';
import './SettingsPage.scss';

interface ISettingsPage {
}

export const SettingsPage: FC<ISettingsPage> = () => {
    const [filmTitle, setFilmTitle] = useState('');
    const handleFilmTitle = (newValue: string) => {
        setFilmTitle(newValue);
    }

    const [name, setName] = useState('Artem Lapitsky');
    const [email, setEmail] = useState('a.lapitsky@gmail.com');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangeName = (newValue: string) => {
        setName(newValue);
    }

    const handleChangeEmail= (newValue: string) => {
        setEmail(newValue);
    }

    const handleChangePassword= (newValue: string) => {
        setPassword(newValue);
    }

    const handleChangeNewPassword= (newValue: string) => {
        setNewPassword(newValue);
    }

    const handleChangeConfirmPassword = (newValue: string) => {
        setConfirmPassword(newValue);
    }

    const handleSubmit = () => {
        console.log('Форма отправляется на сервер');
    }

    const { toggleTheme, isDarkTheme } = useAppContext();

    return (
        <PageTemplate isOpen={false} filmTitle={handleFilmTitle}>
            <div className='settings-page'>
            <Menu/>
            <div className='settings'>
                <div className='settings-profile'>
                    <h2 className='settings-profile-title'>Profile</h2>
                    <div className={`settings-profile-info ${isDarkTheme() ? 'dark' : 'light'}`}>
                        <Input value={name} handleChange={handleChangeName} title={'Name'}/>
                        <Input value={email} handleChange={handleChangeEmail} title={'Email'}/>
                    </div>
                </div>
                <div className='settings-password'>
                    <h2 className='settings-password-title'>Password</h2>
                    <div className={`settings-password-info ${isDarkTheme() ? 'dark' : 'light'}`}>
                        <div className='old-password'>
                            <Input value={password} handleChange={handleChangePassword} title={'Password'} placeholder='Your Password'/>
                        </div>
                        <div className='new-password'>
                            <Input value={newPassword} handleChange={handleChangeNewPassword} title={'New Password'} placeholder='New Password'/>
                            <Input value={confirmPassword} handleChange={handleChangeConfirmPassword} title={'Confirm Password'} placeholder='Confirm Password'/>
                        </div>
                       
                    </div>
                </div>
                <div className='settings-color-mode'>
                    <h2 className='settings-color-mode-title'>Color Mode</h2>
                    <div className={`settings-color-mode-info ${isDarkTheme() ? 'dark' : 'light'}`}>
                        <div className='color-mode-info-text'>
                            <h4 className='color-mode-dark'>Dark</h4>
                            <p className='color-mode-dark-text'>Use dark theme</p>
                        </div>
                       <button className='color-mode-toggler' onClick={toggleTheme}>
                            <Toggle isDisabled={false}/>
                       </button>
                    </div>
                </div>
                <div className='settings-buttons'>
                    <Button type={'secondary'} content={'Cancel'} onClick={handleSubmit}/>
                    <Button type={'primary'} content={'Save'} onClick={handleSubmit}/>
                </div>
            </div>
            </div>
        </PageTemplate>
    )
};
