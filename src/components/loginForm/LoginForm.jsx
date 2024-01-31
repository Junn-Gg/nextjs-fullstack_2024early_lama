'use client';

import { handleGithubLogin, login } from '@/lib/action';
import styles from './loginForm.module.css';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginForm = () => {
  const [state, loginForm] = useFormState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/');
  }, [state?.success, router]);

  return (
    <form action={loginForm} className={styles.wrapper}>
      <input type="text" placeholder="username" name="username" className={styles.input} />
      <input type="text" placeholder="password" name="password" className={styles.input} />
      <button className={styles.button}>login with credentials</button>
      {state?.error}
      <Link href='/register'>
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
