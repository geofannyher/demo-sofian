export type TRegisProps = {
  fullname: string;
  email: string;
  password: string;
};

export type TAuthLoginRes = {
  email: string;
  password: string;
};

export type TAlertDangerProps = {
  msg?: string;
};

export type TLoginProps = {
  email: string;
  password: string;
};
