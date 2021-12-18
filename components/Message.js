import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import TimeAgo from "timeago-react";

export default function Message({ message }) {
  const { user } = useMoralis();
  const isUserMessage = message.get("ethAddress") === user.get("ethAddress"); 

  return (
    <div className={`flex items-end space-x-2 relative mb-10 ${isUserMessage && "justify-end"}`}>
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={message.get("username")} />
      </div>

      <div className={`text-gray-100 flex space-x-4 p-3 rounded-lg font-bold ${isUserMessage ? "rounded-br-none bg-green-300" : "rounded-bl-none bg-blue-300"}`}>
        <p>{message.get("message")}</p>
      </div>

      <TimeAgo 
        className={`text-[10px] italic text-gray-300 ${isUserMessage && "order-first pr-1"}`}
        datetime={message.createdAt}
      />

      <p className={`absolute -bottom-5 text-xs ${isUserMessage ? "text-green-300" : "text-blue-400"}`}>
        {message.get("username")}
      </p>
    </div>
  )
}
