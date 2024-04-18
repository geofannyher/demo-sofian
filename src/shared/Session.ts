export const saveSession = (token: string) => {
  localStorage.setItem("ids", token);
};

export const getSession = () => {
  return localStorage.getItem("ids");
};

export const clearSession = () => {
  localStorage.removeItem("ids");
};
