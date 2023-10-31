import { atom } from 'jotai';

import VideoGrid from './VideoGrid';

const HOLODEX_API_KEY = import.meta.env.VITE_HOLODEX_API_KEY

export const liveData = atom(async () => {
  try {
    const response = await fetch("https://holodex.net/api/v2/live?org=Hololive", {
      headers: {
        "X-APIKEY": HOLODEX_API_KEY
      }
    });
    const live = await response.json();
    console.log(live);
    return live;
  } catch (error) {
    console.log(error)
  }
})

function Home() {
  
    return (
      <>
        <VideoGrid></VideoGrid>
      </>
    )
  }
  
  export default Home