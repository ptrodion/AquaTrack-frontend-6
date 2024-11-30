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

const initialAvatar =
  'src/assets/img/settings_avatar/settings_avatar_mob_1x.webp';

// { onClose, onUpdate }
export const UserSettingsForm = onClose => {
  const { t } = useTranslation();
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState(null);

  const validationSchema = Yup.object().shape({
    gender: Yup.string().required('Gender is required'),
    name: Yup.string(),
    email: Yup.string().email('Invalid email').required('Email is required'),
    weight: Yup.number().positive('Weight must be positive'),
    activeTime: Yup.number().min(0, 'Active time cannot be negative'),
    dailyWaterIntake: Yup.number()
      .positive('Daily water intake must be positive')
      .required('Daily water intake is required'),
  });

  const {
    register,
    handleSubmit,
    // control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: json,
  });


  const onSubmit = async data => {
    const formData = new FormData();

    formData.append('gender', data.gender);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('weight', data.weight);
    formData.append('activeTime', data.activeTime);
    formData.append('waterIntake', data.waterIntake);
    formData.append('avatarUrl', avatar);

    try {
      console.log('formData', formData);

      // const response = await axios.post('/api/user/update', formData);
      // onUpdate(response.data);
      onClose(onClose);
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };
  const handleAvatarChange = e => {
    setAvatar(e.target.files[0]);
  };

  return (
    <>
      {/* {error && ( */}
        <form className="user-settings-form" onSubmit={handleSubmit(onSubmit)}>
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
              <UploadOutlined /> Upload a photo
              <input
                name="file-upload"
                type="file"
                onChange={handleAvatarChange}
              />
            </label>
          </div>

          <div className={css.genderGroup}>
            <label className={css.label}>Your gender identity:</label>
            <div className={css.radioBox}>
              <label>
                <input
                  type="radio"
                  value="Woman"
                  className={css.radioInput}
                  {...register('gender')}
                />
                Woman
              </label>
              <label>
                <input
                  type="radio"
                  value="Man"
                  className={css.radioInput}
                  {...register('gender')}
                />
                Man
              </label>
            </div>
            {errors.gender && <p className="error">{errors.gender.message}</p>}
          </div>

          <div className={css.flexGroup}>
            <div className={css.nameGroup}>
              <label className={css.label}>Your name:</label>
              <input type="text" {...register('name')} className={css.input} />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className={css.emailGroup}>
              <label className={css.label}>Email:</label>
              <input
                type="email"
                {...register('email')}
                className={css.input}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div>
              <p className={css.label}>My daily norma</p>
              <ul className={css.list}>
                <li className={css.item}>
                  <p>For woman:</p>
                  <p className={css.formula}>V=(M*0,03) + (T*0,4)</p>
                </li>
                <li className={css.item}>
                  <p>For man:</p>
                  <p className={css.formula}>V=(M*0,04) + (T*0,6)</p>
                </li>
              </ul>

              <p className={css.description}>
                * V is the volume of the water norm in liters per day, M is your
                body weight, T is the time of active sports, or another type of
                activity commensurate in terms of loads (in the absence of
                these, you must set 0)
              </p>
              <p className={css.textActive}>
                <span className={css.formula}>!</span>Active time in hours
              </p>
            </div>

            <div className={css.weightGroup}>
              <label className={css.label}>Your weight (kg):</label>
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
              <label className={css.label}>Active time per day (hours):</label>
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
                The required amount of water in liters per day:{' '}
                <span className={css.span}>1.8 L</span>{' '}
              </p>
            </div>

            <div className={css.emailGroup}>
              <label className={css.label}>
                Write down how much water you will drink:
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
            Save
          </button>
        </form>
      {/* )} */}
    </>
  );
};
