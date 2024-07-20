export const parseDate = (dateString) => {
  const parts = dateString?.split("/");
  if (parts?.length === 3) {
    return new Date(`${parts[0]}-${parts[1]}-${parts[2]}`);
  }
  return new Date(NaN); // Return an invalid date if the format is wrong
};
