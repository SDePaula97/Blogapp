const React = require('react');
const Navbar = require('../components/Navbar')

class Signup extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Create an Account!</h1>
        <form action='/user/signup' method="post">
         <fieldset>
          <legend>Create a new account</legend>
         <label htmlFor="username">Username</label>
          <br />
          <input type="text" name='username' required/>
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input type="text" name='email' required/>
          <br />

          <label htmlFor="password">Password</label>
          <br />
          <input type="text" name='password' required/>
          <br />

          <input type="submit" value="Register" />
         </fieldset>
        </form>

        <div>
          <p>
            Already have an account? <a href="/user/signin">Sign in</a>
          </p>
        </div>
      </div>
    );
  }
}

module.exports = SignUp;