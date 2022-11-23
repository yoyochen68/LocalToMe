import { signOut } from "next-auth/react";
import styled from 'styled-components';
import Link from 'next/link';
import { FlexBox, Wrapper } from '../../styles/globals';
import GeneralGreenBtn from '../../components/Atoms/GeneralGreenBtn';
import { useRouter } from 'next/router';

const Layout = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 100vh;
width: 100vw;
padding:5% 5% 3% 5%;
h1{s
@media(max-width: 768px) {
    margin:0 10%
}
`
const Center = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const SplashLogo = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 25vh;
width: auto;
`
const LogoutText = styled.span`
font-size: 1.5rem;
font-weight: 600;
margin: 5% 0;
`
const ButtonCont = styled.div`
display: flex;
height: 45vh;
width: 100%;
max-height: 50vh;
align-items: flex-end;
flex-direction: row;
justify-content: center;
align-self: flex-end;
gap: 20px;
`

export default function Signout() {
    const r = useRouter();

    return (
        <>
            <Layout>
                <SplashLogo>
                    <img src="../../Splash.png" />
                </SplashLogo>
                <Center>

                    < LogoutText>Are you sure you want to sign out?</LogoutText>
                    <GeneralGreenBtn
                        onClick={() => r.back()}
                        active={'#D1EAC8'}
                        txtcolor={'#108928'}
                        inactive={'white'}
                        borderstyle={' 3px solid #108928 '}
                        text='Back' />

                    <br />
                    <GeneralGreenBtn
                        text='Sign out'
                        onClick={() => signOut({ callbackUrl: "/" })} />
                </Center>
            </Layout>
        </>
    )
}
