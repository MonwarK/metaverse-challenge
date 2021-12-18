import Avatar from '../components/Avatar';
import TypeWriter from 'react-typewriter';
import { PencilIcon } from "@heroicons/react/outline"

export default function Header({user, logout, open}) {
  return (
    <div className='h-[30vh]'>
      <TypeWriter typing={1}>
        <h1 className='text-4xl font-bold mb-5'>Welcome to the Metaverse</h1>
      </TypeWriter>
      <div className='flex items-center space-x-2 justify-center mb-5'>
        <h2>Username: {user.getUsername()}</h2>
        <PencilIcon 
          onClick={open}
          className='w-4 h-4 cursor-pointer'
        />
      </div>
      <div className='p-2 h-28 w-28 relative mx-auto border-4 rounded-full border-blue-400'>
        <Avatar onClick={logout} />
      </div>
    </div>
  )
}
