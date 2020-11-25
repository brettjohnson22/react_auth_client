import React from 'react'

const LoginForm = (props) => {

    return (
        <div className='login'>
            
            <form onSubmit = {props.handleSubmit}>
                <label>
                    Email:
                    <input type="email" 
                    name="email"
                    onChange={props.handleChange}
                    value={props.values.email}
                    required={true}
                    />
                </label>
                <label>
                    Password:
                    <input
                    type="password"
                    name="password"
                    onChange={props.handleChange}
                    value={props.values.password}
                    required={true}
                    />
                </label>
                <button type="submit">Log In</button>
            </form>

        </div>
    )

}

export default LoginForm