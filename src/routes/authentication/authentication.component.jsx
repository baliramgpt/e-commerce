import React from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignIn from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';


const Authentication = () => {

    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log('response', response);
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []);

    

    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // }

    return (
        <div className='authentication-container'>
            <SignIn />
            <SignUpForm />
        </div>
    )
}

export default Authentication;