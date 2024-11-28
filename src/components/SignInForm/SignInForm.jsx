import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import css from './SignInForm.module.css';
import { Input } from 'antd';
import Logo from 'components/Logo/logo';
import { useTranslation } from 'react-i18next';

const SignInForm = () => {
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(t('validation.requiredEmail'))
      .email(t('validation.validEmail')),
    password: Yup.string()
      .required(t('validation.requiredPassword'))
      .min(6, t('validation.passwordMessage')),
    repeatPassword: Yup.string()
      .required(t('validation.repeatPasswordMessage'))
      .oneOf([Yup.ref('password')], t('validation.oneOf')),
  });
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
    },
  });

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <>
      <div className={css.backgroundContainer}>
        {/* <Logo></Logo> */}
        <form className={css.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={css.formTitle}>Sign In</h2>

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
                className={`${css.input} ${css.lastInput}`}
                type="password"
                placeholder="Enter your password"
                variant="borderless"
              />
            )}
          />
          {errors.password && (
            <p className={`${css.error} ${css.lastError}`}>
              {errors.password.message}
            </p>
          )}

          <button type="submit" className={css.btn}>
            Sign in
          </button>

          <div className={css.linkContainer}>
            <p className={css.text}>
              Don’t have an account?
              <a className={css.link} href="#">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
