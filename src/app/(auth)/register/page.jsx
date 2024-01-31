import { register } from '@/lib/action';
import styles from './register.module.css';
import RegisterForm from '@/components/registerForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
