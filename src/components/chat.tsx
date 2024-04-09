import { TChatProps } from "../utils/types/chat.type";
import ai from "../assets/ai.jpg";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { textToSpeech } from "../services/api/elevenlabs.service";
import { useEffect, useState } from "react";
export const AiChat = ({ message, isLastAIChat }: TChatProps) => {
  const [audioSrc, setAudioSrc] = useState("");

  useEffect(() => {
    // Definisikan fungsi async untuk memanggil textToSpeech
    const fetchTextToSpeech = async () => {
      try {
        const result: any = await textToSpeech(message); // Panggil fungsi textToSpeech dengan teks pesan
        const audioBlob = new Blob([result.data], { type: "audio/mpeg" }); // Buat blob audio dari respons API
        const audioUrl = URL.createObjectURL(audioBlob); // Buat URL untuk blob audio
        setAudioSrc(audioUrl); // Set sumber audio ke URL yang dibuat
      } catch (error) {
        console.error("Failed to convert text to speech:", error);
      }
    };

    // Panggil fetchTextToSpeech hanya saat pesan terakhir dari AIChat pertama kali ditampilkan
    if (isLastAIChat && !audioSrc) {
      fetchTextToSpeech();
    }
  }, [message, isLastAIChat, audioSrc]);
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
            {isLastAIChat && (
              <audio controls>
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
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
