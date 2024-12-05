export const getFormattedDate = () => {
  let dateNow = new Date();
  let year = dateNow.getFullYear();
  let month = (dateNow.getMonth() + 1).toString().padStart(2, '0');
  let day = dateNow.getDate().toString().padStart(2, '0');

  let date = `${year}-${month}-${day}`;

  return date;
};

export const getFullFormattedDate = ({ formHours, formMinutes }) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${formHours}:${formMinutes}:${seconds}`;
};

export const getFormattedDateForWaterList = date => {
  const formatedDate = new Date(date);
  const hours = formatedDate.getHours();
  const minutes = formatedDate.getMinutes();
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
  return timeString;
};

export const checkIsToday = dateString => {
  const selectedDate = new Date(dateString);
  const selectedday = selectedDate.getDate();
  const selectedmonth = selectedDate.toLocaleString('en-US', { month: 'long' });
  const selectedformattedDate = `${selectedday}, ${selectedmonth}`;

  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('en-US', { month: 'long' });
  const formattedDate = `${day}, ${month}`;

  return formattedDate === selectedformattedDate;
};

export const getFormatedChoswnDate = slectedDate => {
  let dateNow = new Date(slectedDate);
  let year = dateNow.getFullYear();
  let month = (dateNow.getMonth() + 1).toString().padStart(2, '0');
  let day = dateNow.getDate().toString().padStart(2, '0');

  let date = `${year}-${month}-${day}`;

  return date;
};
