import { useMoralis } from "react-moralis";

export default function Avatar({ username, ...otherProps }) {
  const { user } = useMoralis();

  return (
    <img
      className='m-auto rounded-full object-cover cursor-pointer'
      src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`}
      {...otherProps}
    />
  )
}
