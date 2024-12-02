import Logo from 'components/Logo/logo';
import BottleImg from '../BottleImg/BottleImg';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import css from './WaterMainInfo.module.css';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../../redux/user/operations';

const WaterMainInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className={css.waterMainInfo}>
      <Logo />

      <BottleImg />
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </div>
  );
};

export default WaterMainInfo;
