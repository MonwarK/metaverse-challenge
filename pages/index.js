import { useMoralis } from 'react-moralis';
import Login from '../components/Login';
import TypeWriter from 'react-typewriter';
import { motion } from 'framer-motion';

export default function Home() {
  const { isAuthenticated, logout, isInitializing } = useMoralis();

  if (!isAuthenticated) return <Login />

  return (
    <div className="bg-black relative h-screen grid place-items-center">
      <motion.div 
        initial={{ scale: 0 }}
        animate={isInitializing ? { scale: 0 } : { scale: 1 }}
        className="relative z-10 text-center"
      >
        <TypeWriter 
          typing={1}
        >
          <h1 className='text-white font-medium mb-2 text-3xl block'>
            Welcome to the Metaverse Challenge
          </h1>
          <p className='text-white font-medium text-lg mb-5'>
            More to come tomorrow...
          </p>
        </TypeWriter>
        <button 
          onClick={logout}
          className="border-2 border-purple-200 text-white py-3 px-5 bg-purple-500 hover:bg-purple-600 bg-opacity-50 hover:bg-opacity-50 font-medium"
        >
          Sign Out
        </button>
      </motion.div>
    </div>
  )
}
