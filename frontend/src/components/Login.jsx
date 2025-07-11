import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset } from '../features/authSlice';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/dashboard");
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    }

    return (
        <section className="hero has-background-grey-light  is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="column is-centered">
                        <div className="columns is-4">
                            <form onSubmit={Auth} className='box'>
                                {isError && <p className='has-text-centered'>{message}</p>}
                                <h2 className='title is-2'>Sign In</h2>
                                <div className='field'>
                                    <label className='label'>Email</label>
                                    <div className="control">
                                        <input type="text" className='input' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                                    </div>
                                </div>
                                <div className='field'>
                                    <label className='label'>Password</label>
                                    <div className="control">
                                        <input type="password" className='input' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*****' />
                                    </div>
                                </div>
                                <div className='field'>
                                    <button type='submit' className="button is-success is-fullwidth">{isLoading ? "Login" : "Loading..."}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login