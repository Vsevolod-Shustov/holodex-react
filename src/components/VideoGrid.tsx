import { Suspense } from "react";
import { useAtom } from 'jotai'
import VideoCard from "./VideoCard";
import { liveData } from "./Home";

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

export default function VideoGrid() {
    const [videos] = useAtom(liveData)

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos?.map((video: Video) => <VideoCard key={video.id} video={video}></VideoCard>)}
        </div>
      </Suspense>
    )
}