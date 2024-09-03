
const Signin = () => {
    return(
        <div id="login">
            <h1>Sign in</h1>
            <form>
                <label>Name</label>
                <input type="text" placeholder="name"/>
                <label>Email</label>
                <input type="email" placeholder="email"/>
                <label>Phone</label>
                <input type="tel" placeholder="phone"/>
                <label>Country</label>
                <input type="text" placeholder="location"/>
                <label>Password</label>
                <input type="password" placeholder="password"/>
                <input type="button" value="Login"/>
            </form>
        </div>
    )
}

export default Signin;