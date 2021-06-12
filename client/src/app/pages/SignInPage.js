import { useState } from 'react';
import { useHistory } from "react-router-dom";
import styles from './SigninPage.module.scss'
import { useAuth } from '../contexts/firebase/auth.context';

const SignInPage = ({children}) => {
  const history = useHistory();
  const [signInForm, setSignInForm] = useState({
    txtEmail: '',
    txtPassword: ''
  });
  const {currentUser,signInWithEmailAndPassword,signOut} = useAuth();
  console.log(currentUser);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const result = await signInWithEmailAndPassword(signInForm.txtEmail, signInForm.txtPassword);
    if (result) {
      history.push("/");
    }    
  }

  const handleInputChange = async (ev) => {
    setSignInForm({
      ...signInForm,
      [ev.target.name]: ev.target.value
    })
  };

  return (
    <div className={styles.container}>
          <div className={styles.form__container}>
            <h1>Sign In</h1>
            {!!currentUser === false &&
            <form onSubmit={(ev) => handleSubmit(ev)}>
              <div className={styles.form__wrapper}>
                <label htmlFor="txtEmail">Email address</label>
                <input type="email" id="txtEmail" name="txtEmail"  aria-describedby="emailHelp" onChange={handleInputChange} value={signInForm.txtEmail}/>
              </div>
              <div className={styles.form__wrapper}>
                <label htmlFor="txtPassword">Password</label>
                <input type="password" className="form-control" id="txtPassword" name="txtPassword" onChange={handleInputChange} value={signInForm.txtPassword} />
              </div>
              <button type="submit" className={styles.btn}>Sign In</button>
            </form>
            }
            {!!currentUser === true && 
              <div>
                <button onClick={() => signOut()}>Sign out</button>
              </div>
            }
          </div>
    </div>
  );
};

export default SignInPage;