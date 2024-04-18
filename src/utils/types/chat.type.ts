export type TChatProps = {
  message: string;
};
export type TChatDataProps = {
  star: string;
  model: string;
  is_rag?: string;
  message: string;
  id: string;
};

export type TResetChat = {
  star: string;
  id: any;
};
