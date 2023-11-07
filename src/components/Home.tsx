import { atom } from 'jotai';

import VideoGrid from './VideoGrid';
import { Suspense } from 'react';

const HOLODEX_API_KEY = import.meta.env.VITE_HOLODEX_API_KEY

export const apiUrl = atom("https://holodex.net/api/v2/live")

export const queryOrg = atom<string>("Hololive")

export const liveData = atom(async (get) => {
  try {
    let fetchUrl = new URL(get(apiUrl))
    const org = get(queryOrg)
    if (org !== "All") { fetchUrl.searchParams.append("org", org) }
    console.log(fetchUrl);
    const response = await fetch(fetchUrl, {
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
      <Suspense fallback={<div>Loading...</div>}>
        <VideoGrid></VideoGrid>
      </Suspense>
    </>
  )
}

export default Home