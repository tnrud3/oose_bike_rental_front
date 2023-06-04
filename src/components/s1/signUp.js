import React, { useState } from 'react';
import '../s1_css/signUp.css';

const Signup = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [birth, setBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        //TODO 등록 처리 로직
    };

    return (
        <div className="signup-page">
            <div className="signup-content signup-content-signin">
                <div>
                    <h2>Sign Up</h2>
                    <form className="wrapper-box" role="form" onSubmit={handleRegister}>
                        <input
                            type="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            className="form-control form-control-id"
                            placeholder="ID"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control form-control-password"
                            placeholder="Password"
                            required
                        />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control form-control-username"
                            placeholder="Username"
                            required
                        />
                        <input
                            type="birth"
                            value={birth}
                            onChange={(e) => setBirth(e.target.value)}
                            className="form-control form-control-birth"
                            placeholder="Birth"
                            required
                        />
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control form-control-phone"
                            placeholder="Phone"
                            required
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control form-control-email"
                            placeholder="email"
                            required
                        />

                        <button type="submit" className="btn btn-submit btn-default pull-right">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
