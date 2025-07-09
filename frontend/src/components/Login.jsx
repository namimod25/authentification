import React from 'react'

const Login = () => {
    return (
        <section className="hero has-background-grey-light  is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="column is-centered">
                        <div className="columns is-4">

                            <form className='box'>
                                <h2 className='title is-2'>Sign In</h2>
                                <div className='field'>
                                    <label className='label'>Email</label>
                                    <div className="control">
                                        <input type="text" className='input' placeholder='email' />
                                    </div>
                                </div>
                                <div className='field'>
                                    <label className='label'>Password</label>
                                    <div className="control">
                                        <input type="password" className='input' placeholder='*****' />
                                    </div>
                                </div>
                                <div className='field'>
                                    <button className="button is-success is-fullwidth mt-5">Login</button>
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