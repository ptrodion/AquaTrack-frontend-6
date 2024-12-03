import * as Yup from 'yup';
import css from './UserSettingsForm.module.css';
import { UploadOutlined } from '@ant-design/icons';
import { LuUserCircle2 } from 'react-icons/lu';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/user/operations.js';
import { selectUser } from '../../redux/user/selector.js';

export const UserSettingsForm = ({ onSettingModalClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const dropdownRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [avatar, setAvatar] = useState(null);
  const [language, setLanguage] = useState(null);


  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const storedLanguage = localStorage.getItem('language');

  useEffect(() => {

    if (!storedLanguage) {
      localStorage.setItem('language', user.language);
      setLanguage(user.language);
    }
  }, [storedLanguage, user.language]);

  useEffect(() => {

    i18n.changeLanguage(language);

    console.log("changeLanguage", i18n.changeLanguage(language));


  }, [language, i18n]);

  const validationSchema = Yup.object().shape({
    gender: Yup.string().required(t('settingsForm.ValidationGender')),
    name: Yup.string(),
    email: Yup.string()
      .email(t('settingsForm.ValidationEmail'))
      .required(t('settingsForm.ValidationEmailRequired')),
    weight: Yup.number().default(0),
    activeTime: Yup.number()
      .min(0, t('settingsForm.ValidationTimeTypeError'))
      .default(0),
    currentDailyNorm: Yup.number()
      .positive(t('settingsForm.ValidationDailyRequirementMin'))
      .required(t('settingsForm.ValidationDailyRequirementMin')),
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: user,
  });

  const onSubmit = async data => {
    console.log('data', data);

    let avatarUrlLocal;
    if (avatar) {
      avatarUrlLocal = avatar;
    }

    try {
      const newUser = {
        gender: data.gender,
        name: data.name,
        email: data.email,
        weight: data.weight,
        activeTime: data.activeTime,
        currentDailyNorm: data.currentDailyNorm,
        avatarUrlLocal: avatarUrlLocal,
        language: data.language
      };

      console.log('newUser', newUser);

      dispatch(updateUser(newUser));
    } catch (error) {
      alert(
        `Error: ${error.response?.data?.message || 'Something went wrong'}`
      );
    }
    onSettingModalClose();
  };
  const handleAvatarChange = e => {
    setAvatar(e.target.files[0]);
  };

  const gender = watch('gender');
  const weight = watch('weight') || 0;
  const activeTime = watch('activeTime') || 0;

  const calculateDailyWaterIntake = () => {
    const weightFactor = gender === 'Woman' ? 0.03 : 0.04;
    const activityFactor = gender === 'Woman' ? 0.4 : 0.6;
    return (weight * weightFactor + activeTime * activityFactor).toFixed(2);
  };

  return (
    <>
      <form className="user-settings-form" onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formGroup}>
          {!user.avatarUrlCloudinary && !avatar && (
            <LuUserCircle2 className={css.image} />
          )}
          {user.avatarUrlCloudinary && !avatar && (
            <img
              src={user.avatarUrlCloudinary}
              alt="Avatar Preview"
              className={css.image}
            />
          )}
          {avatar && (
            <img
              src={URL.createObjectURL(avatar)}
              alt="Avatar Preview"
              className={css.image}
            />
          )}
          <label name="avatar" className={css.customFileLabel}>
            <UploadOutlined /> {t('settingsForm.userUploadButton')}
            <input
              {...register('avatarUrlLocal')}
              type="file"
              onChange={handleAvatarChange}
            />
          </label>
        </div>

        <div className={css.boxRadio}>
          <div className={css.genderGroup}>
            <label className={css.label}>{t('settingsForm.userGender')}:</label>
            <div className={css.radioBox}>
              <label className={css.radioInput}>
                <input type="radio" value="woman" {...register('gender')} className={css.inputGreen} />
                {t('settingsForm.genderWoman')}
              </label>
              <label className={css.radioInput}>
                <input type="radio" value="man" {...register('gender')} className={css.inputGreen} />
                {t('settingsForm.genderMan')}
              </label>
            </div>
            {errors.gender && <p className="error">{errors.gender.message}</p>}
          </div >

          <div className={css.langGroup}>
            <label className={css.label}>Language:</label>
            <div className={css.radioBox} ref={dropdownRef}>
              <label className={css.radioInput}>
                <input
                  type="radio"
                  value="en"
                  name='en'
                  className={css.inputGreen}
                  {...register('language')}
                  onClick={() => changeLanguage('en')}
                />
                English
              </label>
              <label className={css.radioInput}>
                <input
                  type="radio"
                  value="de"
                  name='de'
                  className={css.inputGreen}
                  {...register('language')}
                  onClick={() => changeLanguage('de')}
                />
                German
              </label>
              <label className={css.radioInput}>
                <input
                  type="radio"
                  value="uk"
                  name='uk'
                  className={css.inputGreen}
                  {...register('language')}
                  onClick={() => changeLanguage('uk')}
                />
                Ukrainian
              </label>
            </div>
          </div>
        </div>

        <div className={css.flexGroup}>
          <div className={css.item}>
            <div className={css.nameGroup}>
              <label className={css.label}>
                {t('settingsForm.userNameLabel')}:
              </label>
              <input type="text" {...register('name')} className={css.input} />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className={css.emailGroup}>
              <label className={css.label}>
                {' '}
                {t('settingsForm.userEmailLabel')}:
              </label>
              <input
                type="email"
                {...register('email')}
                className={css.input}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div>
              <p className={css.label}>{t('settingsForm.subtitle')}</p>
              <ul className={css.list}>
                <li className={css.item}>
                  <p className={css.text}>{t('settingsForm.textForWoman')}</p>
                  <p className={css.formula}>V=(M*0,03) + (T*0,4)</p>
                </li>
                <li className={css.item}>
                  <p className={css.text}>{t('settingsForm.textForMan')}</p>
                  <p className={css.formula}>V=(M*0,04) + (T*0,6)</p>
                </li>
              </ul>

              <p className={css.description}>
                * {t('settingsForm.textDescription')}
              </p>
              <p className={css.textActive}>
                <span className={css.formula}>!</span>
                {t('settingsForm.textActiveTime')}
              </p>
            </div>
          </div>

          <div className={css.item}>
            <div className={css.weightGroup}>
              <label className={css.label}>
                {' '}
                {t('settingsForm.userWeight')}
              </label>
              <input
                type="number"
                {...register('weight')}
                className={css.input}
              />
              {errors.weight && (
                <p className="error">{errors.weight.message}</p>
              )}
            </div>

            <div className={css.emailGroup}>
              <label className={css.label}>{t('settingsForm.userTime')}</label>
              <input
                type="number"
                {...register('activeTime')}
                className={css.input}
              />
              {errors.activeTime && (
                <p className="error">{errors.activeTime.message}</p>
              )}
            </div>

            <div className={css.text}>
              <label className={css.text}>
                {t('settingsForm.WaterAmount')}{' '}
              </label>
              <Controller
                name="waterIntake"
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    className={css.span}
                    {...field}
                    value={calculateDailyWaterIntake()}
                    readOnly
                  />
                )}
              />{' '}
              <span className={css.span}>{t('chooseDate.l')}:</span>{' '}
              {errors.waterIntake && (
                <p className="error">{errors.waterIntake.message}</p>
              )}
            </div>

            <div className={css.emailGroup}>
              <label className={css.label}>
                {t('settingsForm.labelWaterNorma')}
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                {...register('currentDailyNorm')}
                className={css.input}
              />
              {errors.currentDailyNorm && (
                <p className="error">{errors.currentDailyNorm.message}</p>
              )}
            </div>
          </div>
        </div>

        <button type="submit" className={css.buttonSubmit}>
          {t('settingsForm.subButton')}
        </button>
      </form>
    </>
  );
};
