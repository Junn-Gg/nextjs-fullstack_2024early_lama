import LoginForm from '@/components/loginForm/LoginForm';
import { handleGithubLogin, login } from '@/lib/action';
import styles from './login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action={handleGithubLogin} className={styles.github}>
        <button className={styles.button}>Login with GitHub</button>
      </form>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
