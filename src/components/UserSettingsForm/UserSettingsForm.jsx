import * as yup from 'yup';
import css from './UserSettingsForm.module.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import json from './userSettingsForm.json';

export const UserSettingsForm = () => {
  const validationSchema = yup.object().shape({
    gender: yup.string().required('Gender is required'),
    name: yup.string().min(2, 'Name must be at least 2 characters').required(),
    email: yup.string().email('Invalid email address').required(),
    weight: yup.number().min(1, 'Weight must be positive'),
    activeTime: yup.number().min(0, 'Active time must be 0 or more'),
    waterIntake: yup.number().min(0, 'Water intake must be 0 or more'),
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
        message.error(`${info.file.name} file upload failed.`);
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
  const onSubmit = () =>{}

  return (
    <form className="user-settings-form" onSubmit={handleSubmit(onSubmit)}>

        <div className={css.formGroup}>
          <img
                src="src/assets/img/settings_avatar/settings_avatar_mob_1x.webp"
                alt="Customer 1"
                className={css.image}
              />
          <Upload {...props}>
            <Button className={css.button} icon={<UploadOutlined />}>Upload a photo</Button>
          </Upload>
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
            <input type="text" {...register('name')} className={css.input}/>
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className={css.emailGroup}>
            <label className={css.label}>Email:</label>
            <input type="email" {...register('email')} className={css.input}/>
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
              activity commensurate in terms of loads (in the absence of these,
              you must set 0)
            </p>
            <p className={css.textActive}>
              <span className={css.formula}>!</span>Active time in hours
            </p>
          </div>

          <div className={css.weightGroup}>
            <label className={css.label}>Your weight (kg):</label>
            <input type="number" {...register('weight')} className={css.input}/>
            {errors.weight && <p className="error">{errors.weight.message}</p>}
          </div>

          <div className={css.emailGroup}>
            <label className={css.label}>Active time per day (hours):</label>
            <input type="number" {...register('activeTime')} className={css.input}/>
            {errors.activeTime && (
              <p className="error">{errors.activeTime.message}</p>
            )}
          </div>

          <div className={css.text}>
            <p>The required amount of water in liters per day: <span className={css.span}>1.8 L</span> </p>
          </div>

          <div className={css.emailGroup}>
            <label className={css.label}>Write down how much water you will drink:</label>
            <input type="number" {...register('waterIntake')} className={css.input}/>
            {errors.waterIntake && (
              <p className="error">{errors.waterIntake.message}</p>
            )}
          </div>
        </div>

      <button type="submit" className={css.buttonSubmit}>
        Save
      </button>
    </form>
  );
};
