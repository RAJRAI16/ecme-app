const STORAGE_KEY = "customers";

/* save customers array */
export const saveCustomers = (customers) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
};

/* get customers array */
export const getCustomers = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
