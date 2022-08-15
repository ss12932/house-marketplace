//bring in component level state
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { db } from '../firebase.config';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const { email, password, name } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back!</p>
          <main>
            <form onSubmit={onSubmit}>
              <input
                type='text'
                className='nameInput'
                placeholder='name'
                id='name'
                value={name}
                onChange={onChange}
              />
              <input
                type='email'
                className='emailInput'
                placeholder='email'
                id='email'
                value={email}
                onChange={onChange}
              />

              <div className='passwordInputDiv'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className='passwordInput'
                  placeholder='password'
                  id='password'
                  value={password}
                  onChange={onChange}
                />

                <img
                  src={visibilityIcon}
                  alt='show password'
                  className='showPassword'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              </div>
              <Link to='/forgot-password' className='forgotPasswordLink'>
                Forgot Password
              </Link>

              <div className='signUpBar'>
                <p className='signUpText'>Sign Up</p>
                <button className='signUpButton'>
                  <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                </button>
              </div>
            </form>

            {/* Google Oauth component */}
            <Link to='/sign-in' className='registerLink'>
              Sign In Instead
            </Link>
          </main>
        </header>
      </div>
    </>
  );
}

export default SignUp;
