import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Register Successful, Please Verify Your Email Address ')
            })
            .catch(error => {
                setError(error.message);
                console.error(error);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        return verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleCheckBox = (event) => {
        setAcceptTerms(event.target.checked);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="name" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleCheckBox}
                    type="checkbox"
                    label={<Link to="/terms">Accept Terms and Condition</Link >} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!acceptTerms}>
                Register
            </Button>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;