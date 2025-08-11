import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import logo from '../../../src/images/uncubate-logo.png';
import { useDispatch, connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction, loadingToggleAction } from '../../store/actions/AuthActions';

const LoginForm = (props) => {
    const [email, setEmail] = useState('demo@demo.com');
    const [password, setPassword] = useState('123456');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let error = false;
        const errorObj = { email: '', password: '' };

        if (email === '') {
            errorObj.email = 'Email is required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is required';
            error = true;
        }

        setErrors(errorObj);
        if (error) return;

        dispatch(loadingToggleAction(true));
        dispatch(loginAction(email, password, navigate));
    };

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#333' }} fluid>
            <div className="text-center mb-4">
                <img src={logo} alt="Uncubate Logo" style={{ width: '280px', height: '120px' }} />
            </div>

            <div className="bg-white p-4 rounded shadow-sm" style={{ maxWidth: '450px', width: '100%' }}>
                <h3 className="text-center mb-4 text-primary pb-2">Login</h3>

                {props.errorMessage && <Alert variant="danger">{props.errorMessage}</Alert>}
                {props.successMessage && <Alert variant="success">{props.successMessage}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <Form.Check label="Remember my preference" />
                        <a href="/forgot-password" className="text-primary">
                            Lost your password?
                        </a>
                    </div>

                    <Button variant="primary" type="submit" className="w-100">
                        Sign In
                    </Button>
                </Form>

                <div className="text-center mt-3">
                    <p className="text-muted" style={{ fontSize: '14px' }}>
                        Don’t have an account?{' '}
                        <a href="/page-register" className="text-primary">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>

            <div className="text-center mt-4">
                <p className="text-muted" style={{ fontSize: '14px' }}>
                    ©2017 All Rights Reserved. Stimulus Consultancy Pvt Ltd.
                </p>
            </div>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
});

export default connect(mapStateToProps)(LoginForm);




// import React, { useState } from 'react';
// import { Container, Form, Button, Alert } from 'react-bootstrap';
// import logo from '../../../src/images/uncubate-logo.png';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [validated, setValidated] = useState(false);
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         navigate('/dashboard');  // Admin Dashboard
//         e.preventDefault();
//         setValidated(true);
//     };

//     return (
//         <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#333' }} fluid>
//             <div className="text-center mb-4">
//                 <img src={logo} alt="Uncubate Logo" style={{ width: '320px', height: '150px' }} />
//             </div>

//             <div className="bg-white p-4 rounded shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
//                 <h3 className="text-center mb-4 text-primary pb-2">Login</h3>

//                 <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                     <Form.Group controlId="formEmail" className="mb-3">
//                         <Form.Control
//                             required
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             isInvalid={validated && !email}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             The email address is required and cannot be empty
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group controlId="formPassword" className="mb-3">
//                         <Form.Control
//                             required
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             isInvalid={validated && !password}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             The password is required and cannot be empty
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                         <Button variant="light" type="submit" onClick={handleSubmit}>
//                             Log in
//                         </Button>
//                         <a href="/forgot-password" className="text-primary">
//                             Lost your password?
//                         </a>
//                     </div>
//                 </Form>
//             </div>

//             <div className="text-center mt-4">
//                 <p className="text-muted" style={{ fontSize: '14px' }}>
//                     ©2017 All Rights Reserved. Stimulus Consultancy Pvt Ltd.
//                 </p>
//             </div>
//         </Container>
//     );
// };

// export default LoginForm;
