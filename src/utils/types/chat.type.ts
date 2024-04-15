export type TChatProps = {
  message: string;
  isLastAIChat?: any;
  audioUrl?: Blob;
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
