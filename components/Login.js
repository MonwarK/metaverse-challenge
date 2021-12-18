import { motion } from "framer-motion";
import { useMoralis } from "react-moralis"
import { Wave } from 'react-animated-text';

export default function Login() {
  const { authenticate, isInitializing, isAuthenticating } = useMoralis();
  
  return (
    <div className="bg-black relative h-screen grid place-items-center">
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
            className="border-2 border-purple-200 text-white p-5 bg-purple-400 hover:bg-purple-500 bg-opacity-50 hover:bg-opacity-50 font-medium"
          >
            Login to the METAVERSE
          </button>
        )}
      </motion.div>
    </div>
  )
}
