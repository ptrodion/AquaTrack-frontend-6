import * as yup from 'yup';
import css from './UserSettingsForm.module.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
// import json from './userSettingsForm.json';

export const UserSettingsForm = () => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    gender: yup.string().required(t('settingsForm.ValidationGender')),
    name: yup.string().min(2, t('settingsForm.ValidationNameMin')).required(),
    email: yup.string().email(t('settingsForm.ValidationEmail')).required(),
    weight: yup.number().min(1, t('settingsForm.ValidationWeightPositiv')),
    activeTime: yup.number().min(0, t('settingsForm.ValidationTimeTypeError')),
    waterIntake: yup
      .number()
      .min(0, t('settingsForm.ValidationDailyRequirementMin')),
  });

  //
  const props = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} ${t('settingsForm.propserror')}`);
      }
    },
  };
  const {
    register,
    handleSubmit,
    // control,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      gender: 'Woman',
      name: 'Nadia',
      email: 'nadia10@gmail.com',
      weight: 0,
      activeTime: 0,
      waterIntake: 1.8,
    },
  });
  const onSubmit = () => {};

  return (
    <form className="user-settings-form" onSubmit={handleSubmit(onSubmit)}>
      <div className={css.formGroup}>
        <img
          src="src/assets/img/settings_avatar/settings_avatar_mob_1x.webp"
          alt="Customer 1"
          className={css.image}
        />
        <Upload {...props}>
          <Button className={css.button} icon={<UploadOutlined />}>
            {t('settingsForm.userUploadButton')}
          </Button>
        </Upload>
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
            {t('settingsForm.genderWoman')}:
          </label>
          <label>
            <input
              type="radio"
              value="Man"
              className={css.radioInput}
              {...register('gender')}
            />
            {t('settingsForm.genderMan')}:
          </label>
        </div>
        {errors.gender && <p className="error">{errors.gender.message}</p>}
      </div>

      <div className={css.flexGroup}>
        <div className={css.nameGroup}>
          <label className={css.label}>
            {t('settingsForm.userNameLabel')}:
          </label>
          <input
            type="text"
            {...register('userNamePlaceholder')}
            className={css.input}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className={css.emailGroup}>
          <label className={css.label}>
            {t('settingsForm.userEmailLabel')}:
          </label>
          <input
            type="email"
            {...register('userEmailLabel')}
            className={css.input}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div>
          <p className={css.label}>{t('settingsForm.subtitle')}</p>
          <ul className={css.list}>
            <li className={css.item}>
              <p>{t('settingsForm.textForWoman')}:</p>
              <p className={css.formula}>V=(M*0,03) + (T*0,4)</p>
            </li>
            <li className={css.item}>
              <p>{t('settingsForm.textForMan')}:</p>
              <p className={css.formula}>V=(M*0,04) + (T*0,6)</p>
            </li>
          </ul>

          <p className={css.description}>
            {t('settingsForm.textDescription"')}*
          </p>
          <p className={css.textActive}>
            <span className={css.formula}>!</span>{' '}
            {t('settingsForm.textActiveTime')}
          </p>
        </div>

        <div className={css.weightGroup}>
          <label className={css.label}> {t('settingsForm.userWeight')}:</label>
          <input
            type="number"
            {...register('userWeight')}
            className={css.input}
          />
          {errors.weight && <p className="error">{errors.weight.message}</p>}
        </div>

        <div className={css.emailGroup}>
          <label className={css.label}>{t('settingsForm.userWeight')}:</label>
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
            <span className={css.span}>1.8 L</span>{' '}
          </p>
        </div>

        <div className={css.emailGroup}>
          <label className={css.label}>
            {t('settingsForm.labelWaterNorma')}
          </label>
          <input
            type="number"
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
  );
};
