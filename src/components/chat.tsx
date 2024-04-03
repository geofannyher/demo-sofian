import { TChatProps } from "../utils/types/chat.type";
import ai from "../assets/ai.jpg";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
export const AiChat = ({ message }: TChatProps) => {
  return (
    <div className="flex justify-start py-2">
      <div className="flex items-start">
        <div className="flex gap-2 items-start">
          <img
            src={ai}
            className="h-10 w-10 items-center justify-center rounded-full object-cover"
          />
          <div
            style={{ whiteSpace: "pre-line" }}
            className="w-auto max-w-2xl rounded-br-xl rounded-tl-xl rounded-tr-xl bg-chatAi p-4 shadow-sm"
          >
            <Markdown
              components={{
                a: ({ node, ...props }) => (
                  <a {...props} style={{ color: "blue" }} />
                ),
              }}
              remarkPlugins={[remarkGfm]}
            >
              {message}
            </Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export const UserChat = ({ message }: TChatProps) => {
  return (
    <div className="flex justify-end py-2">
      <div className="w-auto  max-w-xs rounded-bl-xl rounded-tl-xl rounded-tr-xl bg-mainColor p-4 text-white shadow-sm">
        <p>{message}</p>
      </div>
    </div>
  );
};
