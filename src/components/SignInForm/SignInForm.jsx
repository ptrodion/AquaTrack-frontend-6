import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import css from './SignInForm.module.css';
import { Input } from 'antd';
import Logo from 'components/Logo/logo';
import { useTranslation } from 'react-i18next';
import Section from 'components/Section/Section.jsx';
import { Link } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

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

  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(login(data));
  };
  return (
    <Section>
      <div className={css.backgroundContainer}>
        <Logo></Logo>
        <form className={css.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={css.formTitle}>{t('signIn.title')}</h2>

          <label className={css.label}>{t('signIn.email')}</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={css.input}
                type="text"
                placeholder={t('signIn.placeholderEmail')}
                variant="borderless"
                autoComplete="off"
              />
            )}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}

          <label className={css.label}>{t('signIn.password')}</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                className={`${css.input} ${css.lastInput}`}
                type="password"
                placeholder={t('signIn.placeholderPassword')}
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
            {t('signIn.title')}
          </button>

          <div className={css.linkContainer}>
            <p className={css.text}>
              {t('signIn.account')}
              <Link className={css.link} to="/signup">
                {t('signIn.signUp')}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default SignInForm;
