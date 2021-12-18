import { useEffect, useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

export default function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, isLoading, error } = useMoralisQuery(
    'Messages',
    (query) => query.ascending('createdAt')
    ,
    [],
    {
      live: true
    }
  )

  useEffect(() => {
    endOfMessagesRef.current.scrollIntoView({ behaviour: 'smooth' });
  }, [data])

  return (
    <div>
      <div>
        <ByMoralis 
          variant="dark"
          style={{
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
      </div>

      <div className="max-w-screen-md h-[50vh] mx-auto text-white overflow-auto scrollbar-hide">
        {data.map(message => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={endOfMessagesRef} className="text-center text-gray-400 my-5">
          <p>You're up to date {user.getUsername()}</p>
        </div>
      </div>


      <div className="relative z-20">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

    </div>
  )
}
