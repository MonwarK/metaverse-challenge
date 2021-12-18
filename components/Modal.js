import { XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMoralis } from "react-moralis";

export default function Modal({close}) {
  const [username, setUsername] = useState("");
  const { setUserData } = useMoralis();

  const changeUsername = () => {
    if (!username) return;

    setUserData({
      username
    })

    close();
  }

  return (
    <div className="absolute top-0 left-0 z-20 bg-black bg-opacity-30 h-full w-full">
      <div className="grid place-items-center h-screen">
        <motion.div
          initial={{scale:0}}
          animate={{scale:1}} 
          style={{
            background: "rgba( 255, 255, 255, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 4px )",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
          className="p-5 max-w-sm w-full relative rounded-lg shadow-md text-white"
        >
          <XIcon 
            onClick={close}
            className="text-gray-200 w-5 h-5 absolute top-5 right-5 cursor-pointer" 
          />
          <h1 className="text-white text-center text-3xl font-bold mb-3">Edit Profile</h1>
          <h2 className="font-medium text-lg">Change username</h2>
          <input 
            className="w-full border-b-2 my-3 py-2 bg-transparent outline-none" 
            type="text"
            placeholder="Change username"
            onChange={e => setUsername(e.target.value)}
          />
          <button 
            onClick={changeUsername}
            className="bg-red-500 hover:bg-red-400 duration-150 w-full mt-3 p-3 font-medium rounded-md"
          >Change username</button>
        </motion.div>
      </div>
    </div>
  )
}
