import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import css from './SignUpForm.module.css';

import { Input } from 'antd';
import Logo from 'components/Logo/logo';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  repeatPassword: Yup.string()
    .required('Please repeat your password')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});

const SignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <div className={css.backgroundContainer}>
        <Logo></Logo>
        <form className={css.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={css.formTitle}>Sign Up</h2>

          <label className={css.label}>Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={css.input}
                type="text"
                placeholder="Enter your email"
                variant="borderless"
                autoComplete="off"
              />
            )}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}

          <label className={css.label}>Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                className={css.input}
                type="password"
                placeholder="Enter your password"
                variant="borderless"
              />
            )}
          />
          {errors.password && (
            <p className={css.error}>{errors.password.message}</p>
          )}

          <label className={css.label}>Repeat password</label>
          <Controller
            name="repeatPassword"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                className={`${css.input} ${css.lastInput}`}
                type="password"
                placeholder="Repeat your password"
                variant="borderless"
              />
            )}
          />
          {errors.repeatPassword && (
            <p className={`${css.error} ${css.lastError}`}>
              {errors.repeatPassword.message}
            </p>
          )}

          <button type="submit" className={css.btn}>
            Sign Up
          </button>

          <div className={css.linkContainer}>
            <p className={css.text}>
              Already have account?
              <a className={css.link} href="#">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
