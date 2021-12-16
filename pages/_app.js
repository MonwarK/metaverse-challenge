import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider 
      appId={process.env.NEXT_PUBLIC_APP_ID} 
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <Component {...pageProps} />
      <div className="absolute top-0 left-0 h-screen w-full brightness-[60%]">
        {/* <img
          className="object-cover h-screen w-full"
          src="https://links.papareact.com/55n"
          alt=""
        /> */}
        <video 
          className='w-full h-screen object-cover'
          src="https://static.videezy.com/system/resources/previews/000/040/825/original/1975Z_stktunnelmotionsscifi56724temple.mp4" 
          autoPlay
          loop
          muted 
        ></video>
      </div>
    </MoralisProvider>
  )
}

export default MyApp
