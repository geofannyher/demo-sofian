import axios from "axios";
import { TChatDataProps } from "../../utils/types/chat.type";

export const chatRes = async ({ message, star, model, id }: TChatDataProps) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_APP_CHATT}chat`, {
      star: star,
      model: model,
      temperature: 1,
      id,
      message: message,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const generateRandomString = async () => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }
  return result;
};
