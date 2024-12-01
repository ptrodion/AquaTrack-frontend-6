export const getDateNow = () => {
  let dateNow = new Date();
  let year = dateNow.getFullYear();
  let month = (dateNow.getMonth() + 1).toString().padStart(2, '0');
  let day = dateNow.getDate().toString().padStart(2, '0');
  let hours = dateNow.getHours().toString().padStart(2, '0');
  let minutes = dateNow.getMinutes().toString().padStart(2, '0');
  let seconds = dateNow.getSeconds().toString().padStart(2, '0');

  let date = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

  return date;
};
