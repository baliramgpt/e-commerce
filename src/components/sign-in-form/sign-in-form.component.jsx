import React from 'react';
import {  useState } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect,signInAuthUserWithEmailAndPassword, signOutUser } from '../../utils/firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import { UserContext } from '../../context/user.context';
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log('response', response);
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // }

    return (
        <div className='sign-up-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='email'
                    type='email'
                    required
                    name='email'
                    value={email}
                    onChange={handleChange}
                />

                <FormInput
                    label='password'
                    type='password'
                    required
                    name='password'
                    value={password}
                    onChange={handleChange}
                />

                <div className='buttons-container'>
                    <Button type='submit'> Sign In</Button>
                    <Button
                        buttonType='google'
                        onClick={signInWithGoogle}
                        type='button'
                    >
                        Google sign in
                    </Button>

                </div>
            </form>
        </div>
    )
}

export default SignIn