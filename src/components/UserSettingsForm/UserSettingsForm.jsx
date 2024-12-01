import * as Yup from 'yup';
import css from './UserSettingsForm.module.css';
import { UploadOutlined } from '@ant-design/icons';
// import { Button, Upload } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { instance } from 'redux/auth/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/user/operations.js';
import { selectUser } from '../../redux/user/selector.js';

const initialAvatar =
  'src/assets/img/settings_avatar/settings_avatar_mob_1x.webp';

export const UserSettingsForm = ({ onSettingModalClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { t } = useTranslation();
  const [avatar, setAvatar] = useState(null);
  console.log(user.avatarUrlLocal);


  // if (user.avatarUrlLocal){
  //   setAvatar(user.avatarUrlLocal)
  // }
  if (avatar) {
    const urlAvatar = URL.createObjectURL(avatar);
    const newUrlAvatar = urlAvatar.replace('blob:', '');
}


  const validationSchema = Yup.object().shape({
    gender: Yup.string().required(t('settingsForm.ValidationGender')),
    name: Yup.string(),
    email: Yup.string()
      .email(t('settingsForm.ValidationEmail'))
      .required(t('settingsForm.ValidationEmailRequired')),
    weight: Yup.number().positive(t('settingsForm.ValidationWeightPositiv')),
    activeTime: Yup.number().min(0, t('settingsForm.ValidationTimeTypeError')),
    currentDailyNorm: Yup.number()
      .positive(t('settingsForm.ValidationDailyRequirementMin'))
      .required(t('settingsForm.ValidationDailyRequirementMin')),
  });

  const {
    register,
    handleSubmit,
    // control,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: user,
  });

  const onSubmit = async data => {
    console.log('data', data);

    let newUrlAvatar;
    if (avatar) {
      const urlAvatar = URL.createObjectURL(avatar);
      newUrlAvatar = urlAvatar.replace('blob:', '');
  }
    try {
      const newUser ={
      gender:data.gender,
      name:data.name,
      email:data.email,
      weight:data.weight,
     activeTime:data.activeTime,
     currentDailyNorm:data.currentDailyNorm,
     avatarUrlLocal:newUrlAvatar
    }



      console.log("formData before dispatch", newUser);


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

  return (
    <>
      {/* {error && ( */}
      <form className="user-settings-form" onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formGroup}>
          {!user.avatarUrlLocal && !avatar && (
            <img
              src={initialAvatar}
              alt="Avatar Preview"
              className={css.image}
            />
          )}
          {user.avatarUrlLocal && !avatar && (
            <img
              src= {user.avatarUrlLocal}
              alt="Avatar Preview"
              className={css.image}
            />
          )

          }
          {user.avatarUrlLocal && avatar && (
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

        <div className={css.genderGroup}>
          <label className={css.label}>{t('settingsForm.userGender')}:</label>
          <div className={css.radioBox}>
            <label className={css.radioInput}>
              <input type="radio" value="woman" {...register('gender')} />
              {t('settingsForm.genderWoman')}
            </label>
            <label className={css.radioInput}>
              <input type="radio" value="man" {...register('gender')} />
              {t('settingsForm.genderMan')}
            </label>
          </div>
          {errors.gender && <p className="error">{errors.gender.message}</p>}
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
              <label className={css.label}>
                {t('settingsForm.userTime')}
              </label>
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
              <p className={css.text}>
                {t('settingsForm.WaterAmount')}{' '}
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
      {/* )} */}
    </>
  );
};
