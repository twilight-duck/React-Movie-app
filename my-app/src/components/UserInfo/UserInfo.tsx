import { FC } from 'react';
import { IconButton } from '../IconButton/IconButton';
import './UserInfo.scss';
import userCheck from "../../assets/icons/user-check-icon.svg";

interface IUserInfo {
    userName: string;
}

export const UserInfo: FC<IUserInfo> = ({userName}) => {
    const generateInitials = (userName: string) => {
        return userName.split(' ').map((n) => n[0]).join('').toUpperCase();
    }
    return (
        <div className='userinfo'>
            <div className='userinfo__initials'>{generateInitials(userName)}</div>
            <div className='userinfo__name'>
                {userName}
                <div className='userinfo-check'>
                    <IconButton onClick={() => {console.log('a click has happened')}}>
                        <img src={userCheck} alt="userCheck" />
                    </IconButton>
                </div>
            </div>
        </div>
    )
};
