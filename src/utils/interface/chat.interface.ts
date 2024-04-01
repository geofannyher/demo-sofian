export interface IMessage {
  text: string;
  sender: "user" | "ai";
  isLoading?: boolean;
  timestamp?: Date;
}

export interface IChatResponse {
  data: {
    data: {
      data: string;
      message: string;
    };
  };
}
