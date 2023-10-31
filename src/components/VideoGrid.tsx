import { Suspense } from "react";
import { atom, useAtom } from 'jotai'
import VideoCard from "./VideoCard";

type Video = {
  id: string,
  title: string,
  type:string,
  topic_id: string,
  published_at: string,
  available_at: string,
  duration: number,
  status: string,
  channel: object
}

const HOLODEX_API_KEY = import.meta.env.VITE_HOLODEX_API_KEY

const liveData = atom(async () => {
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

export default function VideoGrid() {
    const [videos] = useAtom(liveData)

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos?.map((video: Video) => <VideoCard key={video.id} video={video}></VideoCard>)}
          test
        </div>
      </Suspense>
    )
}