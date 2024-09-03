import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <>
            <h1>Log in</h1>
            <form>
                <label>Email</label>
                <input type="text" placeholder="email"/>
                <label>Password</label>
                <input type="text" placeholder="password"/>
                <input type="button" value="Log in"/>
            </form>
            <Link to="/Signin">Create Account</Link>
        </>
    )
}

export default Login;