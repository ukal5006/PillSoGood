import axios from 'axios';
import { useEffect, useState } from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import styled from 'styled-components';
import { LOGIN } from '../assets/apis';
import { useNavigate } from 'react-router-dom';

const KAKAO_APP_KEY = 'e0b82853f928fa73b89ecc0a4fc4dc82';

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fee500;
    border-radius: 10px;
    font-size: 1.25rem;
    & > svg {
        margin-right: 0.75rem;
    }
    padding: 1rem;
    width: 70%;
    margin: 0px auto;
`;

const KakaoLogin = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init(KAKAO_APP_KEY);
        }
    }, []);

    const [kakaoToken, setKaKaoToken] = useState(null);

    useEffect(() => {
        if (kakaoToken) {
            console.log(kakaoToken);
            axios.post(LOGIN, { kakaoToken: kakaoToken }).then((e) => {
                localStorage.setItem('accessToken', e.data.accessToken);
                localStorage.setItem('refreshToken', e.data.refreshToken);
                if (e.data.newUser) {
                    navigate('/member/join');
                } else {
                    navigate('/');
                }
            });
        }
    }, [kakaoToken, navigate]);

    const handleLogin = () => {
        window.Kakao.Auth.login({
            scope: 'account_email, profile_nickname',
            success: async (authObj) => {
                setKaKaoToken(authObj.access_token); // accessToken 상태 업데이트
            },
            fail: (err) => {
                console.error(err);
            },
        });
    };

    return (
        <LoginContainer onClick={handleLogin}>
            <RiKakaoTalkFill />
            카카오로 시작하기
        </LoginContainer>
    );
};

export default KakaoLogin;
