import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider 
      appId={process.env.NEXT_PUBLIC_APP_ID} 
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <Component {...pageProps} />
      <div className="absolute top-0 left-0 z-0 h-screen w-full brightness-[60%]">
        <video 
          className='w-full h-screen object-cover'
          src="https://assets.mixkit.co/videos/preview/mixkit-driving-through-futuristic-neon-3d-space-landscape-5399-large.mp4" 
          autoPlay
          playsInline 
          loop
          muted 
        ></video>
      </div>
    </MoralisProvider>
  )
}

export default MyApp
