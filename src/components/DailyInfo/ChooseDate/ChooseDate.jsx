import css from './ChooseDate.module.css';

const ChooseDate = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className={css.chooseDateContainer}>
      <h2 className={css.chooseDateTitle}>{today}</h2>
    </div>
  );
};

export default ChooseDate;
