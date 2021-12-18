import { useState } from "react";
import { useMoralis } from "react-moralis"

export default function SendMessage({ endOfMessagesRef }) {
  const [message, setMessage] = useState("")
  const { user, Moralis } = useMoralis();

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();

    messages.save({
      message: message,
      username: user.getUsername(),
      ethAddress: user.get('ethAddress')
    }).catch((err) => {
      alert(err)
    });

    endOfMessagesRef.current.scrollIntoView({ behaviour: 'smooth' });
    
    setMessage("")
  }

  return (
    <form onSubmit={sendMessage} className="flex w-full max-w-screen-xl mx-auto border-2 border-white py-3 px-5 rounded-full bg-black">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500"
        type="text"
        onChange={e => setMessage(e.target.value)}
        placeholder={`Enter a Message, ${user.getUsername()}...`}
        value={message}
      />
      <button className="font-bold text-blue-400 pl-2">Send</button>
    </form>
  )
}
