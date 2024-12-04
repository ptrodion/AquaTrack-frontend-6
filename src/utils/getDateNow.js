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
