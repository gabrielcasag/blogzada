import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361"/> Meu nome
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
    ) : (
      <button
        type="button"
        className={styles.signInButton}
      >
        <FaGithub color="#eba417"/> Sign in with GitHub
      </button>
    )
}

export { SignInButton };
