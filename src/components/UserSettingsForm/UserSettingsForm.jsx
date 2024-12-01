import * as Yup from 'yup';
import css from './UserSettingsForm.module.css';
import { UploadOutlined } from '@ant-design/icons';
// import { Button, Upload } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
// import axios from 'axios';
import json from './userSettingsForm.json';
import { useTranslation } from 'react-i18next';
// import { useDispatch } from 'react-redux';
// import useSelection from 'antd/es/table/hooks/useSelection.js';
// import { selectUser } from 'redux/user/selector.js';

const initialAvatar =
  'src/assets/img/settings_avatar/settings_avatar_mob_1x.webp';

// { onClose, onUpdate }
export const UserSettingsForm = ({ onSettingModalClose }) => {
  // const dispatch = useDispatch();
  // const user = useSelection(selectUser);
  const { t } = useTranslation();
  const [avatar, setAvatar] = useState(null);
  // const [error, setError] = useState(null);

  const validationSchema = Yup.object().shape({
    gender: Yup.string().required(t('settingsForm.ValidationGender')),
    name: Yup.string(),
    email: Yup.string()
      .email(t('settingsForm.ValidationEmail'))
      .required(t('settingsForm.ValidationEmailRequired')),
    weight: Yup.number().positive(t('settingsForm.ValidationWeightPositiv')),
    activeTime: Yup.number().min(0, t('settingsForm.ValidationTimeTypeError')),
    dailyWaterIntake: Yup.number()
      .positive(t('settingsForm.ValidationDailyRequirementMin'))
      .required(t('settingsForm.ValidationDailyRequirementMin')),
  });

  const {
    register,
    // handleSubmit,
    // control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: json,
  });

  const onSubmit = async data => {
    const formData = new FormData();

    console.log('data', data);

    formData.append('gender', data.gender);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('weight', data.weight);
    formData.append('activeTime', data.activeTime);
    formData.append('waterIntake', data.waterIntake);
    formData.append('avatarUrl', avatar);
    console.log('formData', formData);
    onSettingModalClose();
    // try {
    //   console.log('formData', formData);
    //   console.log("data", data);

    //   // const response = await axios.post('/api/user/update', formData);
    //   // onUpdate(response.data);
    //   onModalClose();
    // } catch (error) {
    //   setError(error.response?.data?.message || 'An error occurred');
    // }
  };
  const handleAvatarChange = e => {
    setAvatar(e.target.files[0]);
  };
  // console.log(user);

  return (
    <>
      {/* {error && ( */}
      <form className="user-settings-form" onSubmit={onSubmit}>
        <div className={css.formGroup}>
          {!avatar && (
            <img
              src={initialAvatar}
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
          <label name="file-upload" className={css.customFileLabel}>
            <UploadOutlined /> {t('settingsForm.userUploadButton')}
            <input
              name="file-upload"
              type="file"
              onChange={handleAvatarChange}
            />
          </label>
        </div>

        <div className={css.genderGroup}>
          <label className={css.label}>{t('settingsForm.userGender')}:</label>
          <div className={css.radioBox}>
            <label>
              <input
                type="radio"
                value="Woman"
                className={css.radioInput}
                {...register('gender')}
              />
              {t('settingsForm.genderWoman')}
            </label>
            <label>
              <input
                type="radio"
                value="Man"
                className={css.radioInput}
                {...register('gender')}
              />
              {t('settingsForm.genderMan')}
            </label>
          </div>
          {errors.gender && <p className="error">{errors.gender.message}</p>}
        </div>

        <div className={css.flexGroup}>
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
            <input type="email" {...register('email')} className={css.input} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div>
            <p className={css.label}>{t('settingsForm.subtitle')}</p>
            <ul className={css.list}>
              <li className={css.item}>
                <p>{t('settingsForm.textForWoman')}</p>
                <p className={css.formula}>V=(M*0,03) + (T*0,4)</p>
              </li>
              <li className={css.item}>
                <p>{t('settingsForm.textForMan')}</p>
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

          <div className={css.weightGroup}>
            <label className={css.label}> {t('settingsForm.userWeight')}</label>
            <input
              type="number"
              {...register('weight')}
              className={css.input}
            />
            {errors.weight && <p className="error">{errors.weight.message}</p>}
          </div>

          <div className={css.emailGroup}>
            <label className={css.label}>{t('settingsForm.userWeight')}</label>
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
            <p>
              {t('settingsForm.WaterAmount')}:{' '}
              <span className={css.span}>1.8 {t('chooseDate.l')}:</span>{' '}
            </p>
          </div>

          <div className={css.emailGroup}>
            <label className={css.label}>
              {t('settingsForm.labelWaterNorma')}
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              {...register('waterIntake')}
              className={css.input}
            />
            {errors.waterIntake && (
              <p className="error">{errors.waterIntake.message}</p>
            )}
          </div>
        </div>

        <button type="submit" className={css.buttonSubmit}>
          {t('settingsForm.subButton')}
        </button>
      </form>
      {/* )} */}
    </>
  );
};
