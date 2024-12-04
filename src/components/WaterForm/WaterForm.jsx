import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import css from './WaterForm.module.css';
import clsx from 'clsx';
import svg from '../../assets/icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { addWater, updateWater } from '../../redux/water/operations';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import { getFullFormattedDate } from '../../utils/getDateNow';

const WaterForm = ({
  operationType = 'add',
  editTime,
  waterPortion,
  waterID,
  handleClose,
}) => {
  const { t } = useTranslation();
  const [waterAmount, setWaterAmount] = useState(waterPortion);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const dateFromUrl = new Date(editTime);

  const currentTime = operationType === 'add' ? new Date() : dateFromUrl;
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');

  const [formHours, setFormHours] = useState(hours);
  const [formMinutes, setFormMinutes] = useState(minutes);

  const validationSchema = Yup.object().shape({
    recordingTime: Yup.string()
      .required(t('recordTimeRequired'))
      .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, t('invalidTimeFormat')),
    waterValue: Yup.number()
      .required(t('waterValueRequired'))
      .min(50, t('waterValueGreater'))
      .max(5000, t('waterValueLess')),
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      recordingTime: `${formHours}:${formMinutes}`,
      waterValue: waterAmount.toString(),
    },
  });

  const onSubmit = data => {
    const timeToSend = getFullFormattedDate({ formHours, formMinutes });

    const addWaterValue = {
      amount: data.waterValue,
      date: timeToSend,
    };

    const editWaterValue = {
      amount: data.waterValue,
      date: timeToSend,
    };

    setIsLoading(true);

    switch (operationType) {
      case 'add':
        dispatch(addWater(addWaterValue)).then(({ error }) => {
          if (!error) {
            setIsLoading(false);
            handleClose();
          } else {
            setIsLoading(false);
          }
        });
        break;
      case 'edit':
        dispatch(updateWater({ id: waterID, formData: editWaterValue })).then(
          ({ error }) => {
            if (!error) {
              setIsLoading(false);
              handleClose();
            } else {
              setIsLoading(false);
            }
          }
        );
        break;
      default:
        setIsLoading(false);
        break;
    }
  };

  const FormHeader = operationType => {
    switch (operationType) {
      case 'add':
        return <p className={css.FormHeader}>{t('waterForm.titleAdd')}</p>;
      case 'edit':
        return <p className={css.FormHeader}>{t('waterForm.titleEdit')}</p>;
      default:
        return <p className={css.FormHeader}>{t('waterModal.add')}</p>;
    }
  };

  const handleWaterAmountChange = amount => {
    setWaterAmount(amount);
    setValue('waterValue', amount.toString());
  };

  const isMinusButtonDisabled = waterAmount === 50;
  const isPlusButtonDisabled = waterAmount === 5000;

  return (
    <form className={css.WaterForm} onSubmit={handleSubmit(onSubmit)}>
      {FormHeader(operationType)}
      <p className={css.AmountOfWater}>{t('waterForm.secondTitle')}</p>
      <div className={css.TapAddWaterWrapper}>
        <button
          type="button"
          className={css.TapAddWater}
          onClick={() => handleWaterAmountChange(Math.max(waterAmount - 50, 0))}
          disabled={isMinusButtonDisabled}
        >
          <svg>
            <use xlinkHref={svg + '#icon-remove'}></use>
          </svg>
        </button>
        <p className={css.TapAddWaterValue}>
          {waterAmount} {t('chooseDate.ml')}
        </p>
        <button
          type="button"
          className={css.TapAddWater}
          onClick={() => handleWaterAmountChange(waterAmount + 50)}
          disabled={isPlusButtonDisabled}
        >
          <svg>
            <use xlinkHref={svg + '#icon-add'}></use>
          </svg>
        </button>
      </div>

      <label className={css.RecordingTimeLabel}>
        {t('waterForm.time')}
        <Controller
          name="recordingTime"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className={clsx(css.RecordingTime)}
              placeholder="HH:MM"
              onChange={e => {
                const [newHours, newMinutes] = e.target.value.split(':');
                setFormHours(newHours);
                setFormMinutes(newMinutes);
                field.onChange(e);
              }}
            />
          )}
        />
        {errors.recordingTime && (
          <p className={css.Error}>{errors.recordingTime.message}</p>
        )}
      </label>
      <label className={css.WaterValueLabel}>
        {t('waterForm.waterUsed')}
        <Controller
          name="waterValue"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              value={waterAmount || ''}
              onChange={e => handleWaterAmountChange(Number(e.target.value))}
              className={css.WaterValue}
            />
          )}
        />
        {errors.waterValue && (
          <p className={css.Error}>{errors.waterValue.message}</p>
        )}
      </label>
      <button type="submit" className={css.SaveBtn} disabled={isLoading}>
        {isLoading ? (
          <LoaderComponent height={44} width={44} />
        ) : (
          t('waterForm.button')
        )}
      </button>
    </form>
  );
};

export default WaterForm;
