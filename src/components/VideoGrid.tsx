import { useAtom } from 'jotai'
import VideoCard from "./VideoCard";
import { useLiveData } from "../hooks/useLiveData";
import { queryOrg } from '../App';
import { Video } from "../types/video";

export default function VideoGrid() {
  //const [videos] = useAtom(liveData)
  const [org] = useAtom(queryOrg)
  const { liveData, loading } = useLiveData(org)

  if (loading) {
    return (<div>Loading...</div>)
  }

  return (
    <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {liveData?.map((video: Video) => <VideoCard key={video.id} video={video}></VideoCard>)}
    </div>
  )
}