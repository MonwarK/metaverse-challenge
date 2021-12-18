import { useMoralis } from 'react-moralis';
import Login from '../components/Login';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from '../components/modal';
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const { isAuthenticated, logout, isInitializing, user } = useMoralis();

  if (!isAuthenticated) return <Login />

  return (
      <>
       <div className='text-white flex-col relative z-10 h-screen m-0 p-5'>
          <motion.div 
            initial={{ scale: 0 }}
            animate={isInitializing ? { scale: 0 } : { scale: 1 }}
            className="relative z-10 text-center bg-black bg-opacity-60 p-5 rounded-xl max-w-screen-xl w-full mx-auto"
          >
            <Header user={user} logout={logout} open={() => setIsVisible(true)} />
          </motion.div>

          <Messages />

        </div>
        {isVisible && (
          <Modal close={() => setIsVisible(false)} />
        )}
      </>
  )
}
