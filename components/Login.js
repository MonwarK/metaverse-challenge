import { motion } from "framer-motion";
import { useMoralis } from "react-moralis"
import { Wave } from 'react-animated-text';
import Tilt from 'react-parallax-tilt';

export default function Login() {
  const { authenticate, isInitializing, isAuthenticating } = useMoralis();
  
  return (
    <div className="bg-black relative h-screen grid place-items-center">
      <Tilt className="relative z-10 cursor-pointer border-4 border-blue-400 rounded-full bg-black bg-opacity-60" tiltReverse>
        <img
          className="h-40 w-40 rounded-full object-cover shadow-lg"
          src="https://avatars.dicebear.com/api/pixel-art/metaverse.svg"
          alt=""
        />
      </Tilt>
      
      <motion.div
        initial={{ scale: 0 }} 
        animate={isInitializing ? { scale: 0 } : { scale: 1 }} 
        className="relative z-10"
      >
        {isAuthenticating ? (
          <p className="text-green-400 font-bold text-4xl">
            <Wave 
              text="Authenticating..."
            />
          </p>
        ) : (
          <button 
            onClick={authenticate}
            className="border-2 border-blue-200 text-white p-5 bg-blue-400 hover:bg-blue-500 bg-opacity-50 hover:bg-opacity-50 font-medium"
          >
            Login to the METAVERSE
          </button>
        )}
      </motion.div>
    </div>
  )
}
