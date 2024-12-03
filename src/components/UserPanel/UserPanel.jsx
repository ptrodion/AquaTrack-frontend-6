import css from './UserPanel.module.css';
import { useTranslation } from 'react-i18next';
import UserBar from 'components/UserBar/UserBar';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from '../../redux/user/selector';
import { getUser } from '../../redux/user/operations.js';
import { useEffect } from 'react';



const UserPanel = () => {
  const { t } = useTranslation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //  useEffect(() => {
  //   const savedUser = localStorage.getItem('user');
    
  //   if (savedUser) {
  //     dispatch({ type: 'SET_USER', payload: JSON.parse(savedUser) });
  //   } else {
  //     dispatch(getUser());
  //   }
  //  }, [dispatch]);
  
  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem('user', JSON.stringify(user));
  //   }
  // }, [user]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);





  return (
    <>
      {user && (
        <div className={css.welcome}>
          {t('userPanel.greeting')}
          <span className={css.userName}>, {(user.name || user.email)
            ?.slice(0, 6)
            .charAt(0).toUpperCase() + ((user.name || user.email)?.slice(1, 6))}
          </span>
          <UserBar user={user} />
        </div>
      )}
    </>
  );
}


export default UserPanel;
