import { useEffect } from 'react';
import './App.css'

const HOLODEX_API_KEY = import.meta.env.VITE_HOLODEX_API_KEY

async function getLive() {
  const response = await fetch("https://holodex.net/api/v2/videos?status=live&max_upcoming_hours=24&org=Hololive", {
    headers: {
      "X-APIKEY": HOLODEX_API_KEY
    }
  });
  const live = await response.json();
  console.log(live);
}

function App() {
  useEffect(() => {
    getLive()
  },[])
  return (
    <>
      app
    </>
  )
}

export default App
