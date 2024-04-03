export const saveSession = (token: string) => {
  localStorage.setItem("usermail", token);
};

export const getSession = () => {
  return localStorage.getItem("usermail");
};

export const clearSession = () => {
  localStorage.removeItem("usermail");
};
